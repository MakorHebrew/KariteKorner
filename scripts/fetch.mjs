import { mkdir, writeFile, readFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const RAW = path.join(ROOT, "content", "raw");
const REDIRECTS_PATH = path.join(ROOT, "content", "redirects.json");
const MANIFEST_PATH = path.join(ROOT, "content", "manifest.json");
const UA = "KaraiteKornerStaticMirror/1.0 (+https://github.com/MakorHebrew/KariteKorner)";
const LIVE_ORIGIN = "https://www.karaite-korner.org";

const SKIP_PARTS = ["cgi-bin", "%22", "%2522", "end_referrer", "end_subscribe", "@"];

function isKaraiteHost(hostname) {
  const host = hostname.replace(/^www\./, "").toLowerCase();
  return host === "karaite-korner.org";
}

function shouldSkipPath(urlPath) {
  if (!urlPath || urlPath === "/") return false;
  const lower = urlPath.toLowerCase();
  if (SKIP_PARTS.some((part) => lower.includes(part))) return true;
  if (/\.(shtml|html|htm)\//i.test(urlPath)) return true;
  if (urlPath.includes("\\")) return true;
  if (urlPath.split("/").some((part) => part === "." || part === "..")) return true;
  return false;
}

function urlToRel(urlPath) {
  let rel = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  if (!rel.startsWith("/")) rel = `/${rel}`;
  if (rel.endsWith("/")) rel += "index.html";
  return rel.replace(/^\/+/, "");
}

async function exists(file) {
  try {
    const info = await stat(file);
    return info.size > 0;
  } catch {
    return false;
  }
}

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function request(url, { redirects = "manual", timeout = 60000 } = {}, attempt = 0) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      redirect: redirects,
      signal: controller.signal,
      headers: { "User-Agent": UA, Accept: "*/*" },
    });
    if ((response.status === 429 || response.status === 503) && attempt < 5) {
      await response.arrayBuffer().catch(() => {});
      await sleep(1500 * (attempt + 1));
      return request(url, { redirects, timeout }, attempt + 1);
    }
    return response;
  } catch (error) {
    if (attempt < 4) {
      await sleep(800 * (attempt + 1));
      return request(url, { redirects, timeout }, attempt + 1);
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

async function pool(items, limit, worker) {
  let cursor = 0;
  let active = 0;
  await new Promise((resolve, reject) => {
    function launch() {
      while (active < limit && cursor < items.length) {
        const item = items[cursor];
        cursor += 1;
        active += 1;
        Promise.resolve(worker(item))
          .then(() => {
            active -= 1;
            if (cursor >= items.length && active === 0) resolve();
            else launch();
          })
          .catch(reject);
      }
      if (cursor >= items.length && active === 0) resolve();
    }
    launch();
  });
}

function classifyRedirect(fromUrl, location) {
  const target = new URL(location, fromUrl);
  if (isKaraiteHost(target.hostname)) {
    return { kind: "internal", target: `${target.pathname}${target.search}` };
  }
  return { kind: "external", target: target.href };
}

async function probeLive(rel) {
  const url = new URL(rel, `${LIVE_ORIGIN}/`);
  let current = url.href;
  const seen = new Set();
  for (let hop = 0; hop < 6; hop += 1) {
    if (seen.has(current)) return { type: "error", error: "redirect loop" };
    seen.add(current);
    const response = await request(current, { timeout: 180000 });
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      await response.arrayBuffer().catch(() => {});
      if (!location) return { type: "missing", status: response.status };
      const classified = classifyRedirect(current, location);
      if (classified.kind === "external") {
        return { type: "redirect", location: classified.target, status: response.status };
      }
      current = new URL(classified.target, current).href;
      continue;
    }
    if (response.status === 200) {
      const buf = Buffer.from(await response.arrayBuffer());
      const type = response.headers.get("content-type") || "";
      if (/text\/html/i.test(type) && /Index of\s+\//i.test(buf.toString("latin1").slice(0, 800))) {
        return { type: "missing", status: 404, note: "autoindex" };
      }
      return { type: "ok", buf, contentType: type, via: current };
    }
    await response.arrayBuffer().catch(() => {});
    return { type: "missing", status: response.status };
  }
  return { type: "error", error: "too many redirects" };
}

function rowsToIndex(rows) {
  const parsedRows = [];
  const fileRels = new Set();
  for (const row of rows.slice(1)) {
    let original;
    let timestamp = "";
    let mimetype = "";
    let length = 0;
    if (row.length >= 5 && /^\d{10,}$/.test(String(row[1]))) {
      [original, timestamp, , mimetype, length] = row;
    } else {
      [original, , mimetype, length] = row;
    }
    let parsed;
    try {
      parsed = new URL(original);
    } catch {
      continue;
    }
    if (!isKaraiteHost(parsed.hostname)) continue;
    if (parsed.search) continue;
    if (shouldSkipPath(parsed.pathname)) continue;
    const entry = {
      pathname: parsed.pathname,
      timestamp,
      mimetype: mimetype || "",
      length: Number(length) || 0,
    };
    parsedRows.push(entry);
    if (!parsed.pathname.endsWith("/")) fileRels.add(urlToRel(parsed.pathname));
  }

  const byPath = new Map();
  for (const entry of parsedRows) {
    if (entry.pathname.endsWith("/")) {
      const folder = entry.pathname.replace(/^\/+|\/+$/g, "");
      const indexes = ["index.html", "index.htm", "index.shtml"].map((name) => (folder ? `${folder}/${name}` : name));
      if (indexes.some((rel) => fileRels.has(rel))) continue;
    }
    const rel = urlToRel(entry.pathname);
    if (!rel || shouldSkipPath(`/${rel}`)) continue;
    const pathname = entry.pathname.endsWith("/") ? `/${rel}` : entry.pathname;
    const prev = byPath.get(rel);
    if (!prev || (entry.timestamp && entry.timestamp > (prev.timestamp || ""))) {
      byPath.set(rel, {
        rel,
        original: `http://www.karaite-korner.org${pathname}`,
        timestamp: entry.timestamp,
        mimetype: entry.mimetype,
        length: entry.length,
      });
    }
  }
  return byPath;
}

async function loadCdx() {
  const cdxUrl =
    "https://web.archive.org/cdx/search/cdx?url=karaite-korner.org/*&output=json&fl=original,timestamp,statuscode,mimetype,length&filter=statuscode:200&collapse=urlkey&fastLatest=true&limit=8000";
  const seedPath = path.join(ROOT, "content", "cdx-seed.json");
  console.log("Loading archive index…");
  try {
    const response = await request(cdxUrl, { redirects: "follow", timeout: 90000 });
    const text = await response.text();
    if (!response.ok || text.trim().startsWith("<")) throw new Error(`CDX ${response.status}`);
    const rows = JSON.parse(text);
    const index = rowsToIndex(rows);
    if (index.size > 50) {
      await writeFile(seedPath, `${JSON.stringify(rows)}\n`);
      console.log(`Archive index from CDX: ${index.size} paths`);
      return index;
    }
  } catch (error) {
    console.log(`CDX unavailable (${error.message}); using seed list`);
  }
  const rows = JSON.parse(await readFile(seedPath, "utf8"));
  const index = rowsToIndex(rows);
  console.log(`Archive index from seed: ${index.size} paths`);
  return index;
}

function looksWrapped(buf, expectedHtml) {
  const head = buf.subarray(0, 600).toString("utf8");
  if (head.includes("web.archive.org/web/") && head.includes("wm-ipp")) return true;
  if (!expectedHtml && /^\s*</.test(head) && /text\/html|Wayback Machine|404 Not Found/i.test(head)) return true;
  return false;
}

async function fetchWayback(entry) {
  const originals = [
    entry.original,
    entry.original.replace("://www.", "://"),
    entry.original.replace("://karaite-korner.org", "://www.karaite-korner.org"),
  ];
  const stamps = entry.timestamp ? [entry.timestamp, "2026"] : ["2026"];
  let lastError = "no capture";
  for (const original of [...new Set(originals)]) {
    for (const stamp of stamps) {
      const url = `https://web.archive.org/web/${stamp}id_/${original}`;
      try {
        const response = await request(url, { redirects: "follow", timeout: 180000 });
        if (!response.ok) {
          lastError = `wayback ${response.status}`;
          await response.arrayBuffer().catch(() => {});
          continue;
        }
        const buf = Buffer.from(await response.arrayBuffer());
        const type = response.headers.get("content-type") || entry.mimetype || "";
        const pathLooksHtml = /\.(shtml|html|htm|js|css|txt|xml)$/i.test(entry.rel);
        if (!pathLooksHtml && /text\/html/i.test(type)) {
          lastError = "html response for a non-html path";
          continue;
        }
        const head = buf.subarray(0, 900).toString("latin1");
        if (/Index of\s+\//i.test(head) && /Parent Directory/i.test(head)) {
          lastError = "autoindex";
          continue;
        }
        if (!buf.length || looksWrapped(buf, pathLooksHtml || /html|text/i.test(type))) {
          lastError = "wrapped or empty capture";
          continue;
        }
        return { buf, contentType: type };
      } catch (error) {
        lastError = error.message;
      }
    }
  }
  throw new Error(lastError);
}

function discoverLinks(buf, pageUrl) {
  const text = buf.toString("latin1");
  const found = new Set();
  const pattern = /\b(?:href|src|background)\s*=\s*["']([^"']+)["']/gi;
  let match;
  while ((match = pattern.exec(text))) {
    const raw = match[1].trim();
    if (!raw || /^(mailto:|javascript:|#|data:)/i.test(raw)) continue;
    let resolved;
    try {
      resolved = new URL(raw, pageUrl);
    } catch {
      continue;
    }
    if (!isKaraiteHost(resolved.hostname)) continue;
    if (resolved.search) continue;
    if (shouldSkipPath(resolved.pathname)) continue;
    const rel = urlToRel(resolved.pathname);
    if (rel) found.add(rel);
  }
  return found;
}

async function saveFile(rel, buf) {
  const dest = path.join(RAW, rel);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, buf);
}

async function main() {
  await mkdir(RAW, { recursive: true });
  const cdx = await loadCdx();
  console.log(`Archive index has ${cdx.size} paths`);

  const extras = [
    "index.shtml",
    "main.shtml",
    "main.htm",
    "nehemiaswall.htm",
    "google.htm",
    "last_updated.htm",
    "donate.shtml",
    "donate.html",
    "kk_style.css",
    "kk_info.js",
    "side_menu.js",
    "bottom_menu.js",
    "copyright.js",
    "subscription_box.js",
    "search_box.js",
    "pentecost.js",
    "logobox.gif",
    "bgancient.jpg",
    "robots.txt",
    "favicon.ico",
  ];
  for (const rel of extras) {
    if (!cdx.has(rel)) cdx.set(rel, { rel, original: `${LIVE_ORIGIN}/${rel}`, timestamp: "", mimetype: "", length: 0 });
  }

  const redirects = {};
  const manifest = { fetchedAt: new Date().toISOString(), files: {}, errors: [] };
  const queue = [...cdx.values()];
  const queued = new Set(queue.map((entry) => entry.rel));
  let done = 0;

  async function handle(entry) {
    const dest = path.join(RAW, entry.rel);
    done += 1;
    if (await exists(dest)) {
      manifest.files[entry.rel] = { source: "cached", bytes: (await stat(dest)).size };
      if (done % 50 === 0) console.log(`  ${done}/${queue.length} ${entry.rel} (cached)`);
      return;
    }
    try {
      const live = await probeLive(entry.rel);
      if (live.type === "redirect") {
        redirects[`/${entry.rel}`] = live.location;
        console.log(`  redirect /${entry.rel} -> ${live.location}`);
        if (Object.keys(redirects).length % 5 === 0) {
          await writeFile(REDIRECTS_PATH, `${JSON.stringify(redirects, null, 2)}\n`);
        }
        return;
      }
      if (live.type === "ok") {
        await saveFile(entry.rel, live.buf);
        manifest.files[entry.rel] = { source: "live", bytes: live.buf.length, contentType: live.contentType };
        if (/\.(shtml|html|htm)$/i.test(entry.rel)) {
          for (const rel of discoverLinks(live.buf, `${LIVE_ORIGIN}/${entry.rel}`)) {
            if (!queued.has(rel)) {
              queued.add(rel);
              queue.push({ rel, original: `${LIVE_ORIGIN}/${rel}`, timestamp: cdx.get(rel)?.timestamp || "", mimetype: "", length: 0 });
            }
          }
        }
        if (done % 25 === 0) console.log(`  ${done} live /${entry.rel} (${live.buf.length})`);
        return;
      }
      const archived = await fetchWayback(entry);
      await saveFile(entry.rel, archived.buf);
      manifest.files[entry.rel] = {
        source: "wayback",
        bytes: archived.buf.length,
        contentType: archived.contentType,
        timestamp: entry.timestamp,
      };
      console.log(`  wayback /${entry.rel} (${archived.buf.length})`);
      if (/\.(shtml|html|htm)$/i.test(entry.rel)) {
        for (const rel of discoverLinks(archived.buf, `${LIVE_ORIGIN}/${entry.rel}`)) {
          if (!queued.has(rel) && !shouldSkipPath(`/${rel}`)) {
            queued.add(rel);
            const known = cdx.get(rel);
            queue.push(known || { rel, original: `${LIVE_ORIGIN}/${rel}`, timestamp: "", mimetype: "", length: 0 });
          }
        }
      }
    } catch (error) {
      manifest.errors.push({ rel: entry.rel, error: error.message });
      console.log(`  error /${entry.rel}: ${error.message}`);
    }
  }

  // Live probes can run wider; wayback calls sit behind the same loop, so keep the pool modest.
  await pool(queue, 4, handle);

  // The pool snapshots length only via the shared queue cursor. Items pushed during
  // the run are picked up because workers read queue.length each iteration.
  await writeFile(REDIRECTS_PATH, `${JSON.stringify(redirects, null, 2)}\n`);
  await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
  const fileCount = Object.keys(manifest.files).length;
  console.log(`Saved ${fileCount} files, ${Object.keys(redirects).length} redirects, ${manifest.errors.length} errors`);
}

await main();
