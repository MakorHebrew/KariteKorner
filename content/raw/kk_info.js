
function stopError() {return true;}

if (document.location.href.indexOf('www.karaite-korner.org') != -1)

{window.onerror = stopError;}

if ((document.cookie=='') || (document.cookie.indexOf("kk_referrer=") == -1))
{document.cookie="kk_referrer=" + document.referrer + "_to_" + location.href + "/end_referrer";}


