
var bookNameEnglish = new Array("genesis", "exodus", "leviticus", "numbers", "deuteronomy", "joshua", "judges", "first_samuel", "second_samuel", "first_kings", "second_kings", "isaiah", "jeremiah", "ezekiel", "hosea", "joel", "amos", "obadiah", "jonah", "michah", "nachum", "habakkuk", "zephaniah", "haggay", "zechariah", "malachi", "psalms", "job", "proverbs", "ruth", "song_of_songs", "ecclesiastes", "lamentations", "esther", "daniel", "ezra", "nehemiah", "first_chronicles", "second_chronicles");

var pageTitleEnglish = new Array("Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "1Samuel", "2Samuel", "1Kings", "2Kings", "Isaiah", "Jeremiah", "Ezekiel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Michah", "Nachum", "Habakkuk", "Zephaniah", "Haggay", "Zechariah", "Malachi", "Psalms", "Job", "Proverbs", "Ruth", "Song of Songs", "Ecclesiastes", "Lamentations", "Esther", "Daniel", "Ezra", "Nehemiah", "1Chronicles", "2Chronicles");

var pageTitleHebrew = new Array("בראשית", "שמות", "ויקרא", "במדבר", "דברים", "יהושע", "שופטים", "שמואל א", "שמואל ב", "מלכים א", "מלכים ב", "ישעיהו", "ירמיהו", "יחזקאל", "הושע", "יואל", "עמוס", "עובדיה", "יונה", "מיכה", "נחום", "חבקוק", "צפניה", "חגי", "זכריה", "מלאכי", "תהלים", "איוב", "משלי", "רות,", "שיר השירים", "קהלת", "איכה", "אסתר", "דניאל", "עזרא", "נחמיה", "דברי הימים א", "דברי הימים ב"); 

var hebChapters = new Array("א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "יא", "יב", "יג", "יד", "טו", "טז", "יז", "יח", "יט", "כ", "כא", "כב", "כג", "כד", "כה", "כו", "כז", "כח", "כט", "ל", "לא", "לב", "לג", "לד", "לה", "לו", "לז", "לח", "לט", "מ", "מא", "מב", "מג", "מד", "מה", "מו", "מז", "מח", "מט", "נ", "נא", "נב", "נג", "נד", "נה", "נו", "נז", "נח", "נט", "ס", "סא", "סב", "סג", "סד", "סה", "סו", "סז", "סח", "סט", "ע", "עא", "עב", "עג", "עד", "עה", "עו", "עז", "עח", "עט", "פ", "פא", "פב", "פג", "פד", "פה", "פו", "פז", "פח", "פט", "צ", "צא", "צב", "צג", "צד", "צה", "צו", "צז", "צח", "צט", "ק", "קא", "קב", "קג", "קד", "קה", "קו", "קז", "קח", "קט", "קי", "קיא", "קיב", "קיג", "קיד", "קטו", "קטז", "קיז", "קיח", "קיט", "קכ", "קכא", "קכב", "קכג", "קכד", "קכה", "קכו", "קכז", "קכח", "קכט", "קל", "קלא", "קלב", "קלג", "קלד", "קלה", "קלו", "קלז", "קלח", "קלט", "קמ", "קמא", "קמב", "קמג", "קמד", "קמה", "קמו", "קמז", "קמח", "קמט", "קנ", "קנא", "קנב", "קנג", "קנד", "קנה", "קנו", "קנז", "קנח", "קנט", "קס", "קסא", "קסב", "קסג", "קסד", "קסה", "קסו", "קסז", "קסח", "קסט", "קע", "קעא", "קעב", "קעג", "קעד", "קעה");

var fileChapterName = new Array("001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020", "021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "031", "032", "033", "034", "035", "036", "037", "038", "039", "040", "041", "042", "043", "044", "045", "046", "047", "048", "049", "050", "051", "052", "053", "054", "055", "056", "057", "058", "059", "060", "061", "062", "063", "064", "065", "066", "067", "068", "069", "070", "071", "072", "073", "074", "075", "076", "077", "078", "079", "080", "081", "082", "083", "084", "085", "086", "087", "088", "089", "090", "091", "092", "093", "094", "095", "096", "097", "098", "099", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "175");

var bookNumber = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39");

function expandIt(theItem) { 
	whichItem = eval(theItem + "_chapters");
	if (whichItem.style.display == "none") {
		whichItem.style.display = "block";
	}
	else {
		whichItem.style.display = "none";
	}
}

function changeVerseParahraphing(styleSheetName) {
	var thisStyleSheet = top.theText.document.styleSheets[styleSheetName];
	for (currentRule = 0; currentRule < thisStyleSheet.rules.length; currentRule++) {
		thisRule = thisStyleSheet.rules[currentRule].style;
		if (thisRule.display == 'block') {
			thisRule.display = "inline"
		} else {if (thisRule.display == 'inline') {
			thisRule.display = "block"
		}}
	}
}

bibleDisplay = "1"; //default type
function changeDisplayType(newType) {
bibleDisplay = newType;
}

function changeVerseNumberAppearance(styleSheetName) {
	var thisStyleSheet = top.theText.document.styleSheets[styleSheetName];
	for (currentRule = 0; currentRule < thisStyleSheet.rules.length; currentRule++) {
		thisRule = thisStyleSheet.rules[currentRule].style;
		if (thisRule.display == 'none') {
			thisRule.display = "inline"
		} else {if (thisRule.display == 'inline') {
			thisRule.display = "none"
		}}
	}
}

function translateIt(theBook,theChapter,theVerse,thisContainer) {
thisArray = eval(bookNameEnglish[theBook-1] + "_" + theChapter + "_jps1917");
	if (top.englishTranslation) {
		if (thisArray) {
			top.englishTranslation.oVerse.innerText = pageTitleEnglish[theBook-1] + " " + theChapter + ":" + theVerse;
			top.englishTranslation.oTrans.innerText = thisArray[theVerse-1];
		} else {top.englishTranslation.oVerse.innerHTML = '<img src="loading.gif">'}
	}
	thisContainer.style.backgroundColor='#F5F5F5';
	thisContainer.style.cursor='default';
}

function clearIt(thisContainer) {
	thisContainer.style.backgroundColor='transparent';
	thisContainer.style.cursor='auto';
}

function clearTable() {
	if (top.theText.oTable.rows) {
		numberOfRows = top.theText.oTable.rows.length
		for (i=0; i < numberOfRows; i++) {
			top.theText.oTable.deleteRow(0);
		}
	}
}

function writeToDiv() {
	var theChapterNumber = fileChapterName[theSavedChapter-1];
	var theBookNumber = bookNumber[theSavedBook-1];
	var newChapter = ""; 
	var theBookName = bookNameEnglish[theSavedBook-1]
	var theChapterContents = eval("top.theText." + theBookName + "_" + theSavedChapter + "_" + "heb");
	var chapter_length = theChapterContents.length;
	var newChapter = "<b>" + pageTitleHebrew[theSavedBook-1] + " פרק " + hebChapters[theSavedChapter-1] + "</b><br><br>";
	for (k=0; k < chapter_length; k++) {
		var verseNumber = k + 1;
		var verseContent = theChapterContents[k];
newChapter += "<span class\=\"hebrewVerse\" book\=\"" + theSavedBook + "\" chapter\=\"" + theSavedChapter + "\" verse\=\"" + verseNumber + "\"  onmouseover\=\"translateIt\(this\.book\,this\.chapter\,this\.verse\,this\)\;\" onmouseout\=\"clearIt\(this\)\;\"><span class\=\"hebrewVerseNumber\">\(" + hebChapters[k] + "\)<\/span><span class\=\"romanVerseNumber\">" + verseNumber + "</span> " + verseContent + "<\/span> ";
	}
	top.theText.mainTextHebrew.innerHTML = newChapter;
	top.document.title = pageTitleEnglish[theSavedBook-1] + " Chapter " + theSavedChapter  + " - " + pageTitleHebrew[theSavedBook-1] + " פרק " + hebChapters[theSavedChapter-1];
		top.theText.loadingMessage.style.display = 'none';
}

function writeToTable() {

	var theChapterNumber = fileChapterName[theSavedChapter-1];
	var theBookNumber = bookNumber[theSavedBook-1];
	theBookName = bookNameEnglish[theSavedBook-1]
	theHebrewContents = eval("top.theText." + theBookName + "_" + theSavedChapter + "_" + "heb");
	theEnglishContents = eval("top.theText." + theBookName + "_" + theSavedChapter + "_" + "jps1917");

	chapter_length = theHebrewContents.length;

//chapter title
  oRow = top.theText.oTBody0.insertRow();
    oCell_1 = oRow.insertCell();
    oCell_2 = oRow.insertCell();
	oCell_1.innerHTML = "<b id\=\"theTop\">" + pageTitleHebrew[theSavedBook-1] + " פרק " + hebChapters[theSavedChapter-1] + "</b>";
	oCell_2.innerHTML = "<b>" + pageTitleEnglish[theSavedBook-1] + " Chapter " + theSavedChapter + "</b>";
	oCell_1.className = 'hebrewCell';
	oCell_2.className = 'englishCell';

//chapter contents
for (k=0; k<chapter_length; k++) //1 row for each verse
{
		var verseNumber = k + 1;
		var hebrewVerseContent = theHebrewContents[k];
		var translationContent = theEnglishContents[k];
  oRow = top.theText.oTBody0.insertRow();
    oCell_1 = oRow.insertCell();
    oCell_2 = oRow.insertCell();
	oCell_1.innerHTML = "<span class\=\"hebrewVerseNumber\">\(" + hebChapters[k] + "\)<\/span><span class\=\"romanVerseNumber\">" + verseNumber + "</span> " + hebrewVerseContent;
	oCell_2.innerHTML = "<span class\=\"englishVerseNumber\">\(" + verseNumber + "\)</span> " + translationContent;

	oCell_1.className = 'hebrewCell';
	oCell_2.className = 'englishCell';
}
	top.document.title = pageTitleEnglish[theSavedBook-1] + " Chapter " + theSavedChapter  + " - " + pageTitleHebrew[theSavedBook-1] + " פרק " + hebChapters[theSavedChapter-1];
		top.theText.loadingMessage.style.display = 'none';
top.theText.theTop.focus;
}

function layOutChapter() {
	if (theMethod == 'aDiv') { writeToDiv() }
	else {if (theMethod == 'aTable') { writeToTable() }}
}

function checkSecondReadyState()
{
	if (top.theText.eng.readyState=="loaded") {
		layOutChapter()
	} 
}

function checkFirstReadyState() {
	if (top.theText.heb.readyState=="loaded") { 
		if (top.theText.eng.readyState=="loaded") {
			layOutChapter()
		} else {
			top.theText.eng.onreadystatechange = checkSecondReadyState; 
		}
	}
}

function loadJsLibraries() {
	top.theText.heb.src = "hebrew_mt\/" + bookNumber[theSavedBook-1] + "_" + bookNameEnglish[theSavedBook-1] + "_chapter_" + fileChapterName[theSavedChapter-1] + "_" + "heb" + ".js";
	top.theText.eng.src = "jps1917\/" + bookNumber[theSavedBook-1] + "_" + bookNameEnglish[theSavedBook-1] + "_chapter_" + fileChapterName[theSavedChapter-1] + "_" + "jps1917" + ".js";
	top.englishTranslation.oVerse.innerHTML = '';
	top.englishTranslation.oTrans.innerHTML = '';
	top.theText.heb.onreadystatechange = checkFirstReadyState;  
}

function populateDiv(theBook,theChapter) {
	if (top.theText) {
		theMethod = 'aDiv';
		clearTable()
		top.theText.loadingMessage.style.display = 'inline';
		toggleTranslationWindow('show')
		theSavedBook = theBook;
		theSavedChapter = theChapter;
		loadJsLibraries()
	}
}

function populateTable(theBook,theChapter) {
	if (top.theText) {
		theMethod = 'aTable';
		clearTable()
		top.theText.loadingMessage.style.display = 'inline';
		toggleTranslationWindow('hide')
		top.theText.mainTextHebrew.innerHTML="";
		theSavedBook = theBook;
		theSavedChapter = theChapter;
		loadJsLibraries()
	}
}

function showChapter(theBook,theChapter,theDisplayType) {
savedDisplayType=theDisplayType;
	if (theDisplayType == 1) {
		populateDiv(theBook,theChapter)
	} else {if (theDisplayType == 2) {
		populateTable(theBook,theChapter)
	}}

}

var strColumns_Current = "25%,*";

function hidetoc()
  {
  strColumns_Current = top.theCols.cols;

  top.theCols.cols = "20,*";
top.theButton.buttonHolder.innerHTML = '<a href\=\"#\" onClick\=\"top\.theMenu\.showtoc\(\)\; return false\"><img src\=\"arrow1b\.gif\" width\=\"16\" height\=\"16\" border\=\"0\" alt\=\"Show Menu\" onmouseover\=\"this\.src\=\'arrow3b\.gif\'\; window\.status\=\'Show Menu\'\;\" onmouseout\=\"this\.src\=\'arrow1b\.gif\'\; window\.status\=\'\'\;\"><\/a>'
window.status = "";
top.theMenu.mainMenu.style.display='none';
top.theMenu.showMenu.style.display='inline';
top.theMenu.theBody.bgColor='#c0c0c0';
//  top.theText.document.all("showtoc").style.display = "block";
  }

function showtoc()
  {
  top.theCols.cols = strColumns_Current;
top.theButton.buttonHolder.innerHTML = '<a href\=\"#\" onClick\=\"top\.theMenu\.hidetoc\(\)\; return false\"><img src\=\"hidetoc1\.gif\" id\=\"imgHideToc\" width\=\"15\" height\=\"20\" border\=\"0\" alt\=\"Hide Menu\" align\=\"right\" onmouseover\=\"this\.src\=\'hidetoc2.gif\'\; window\.status\=\'Hide Menu\'\;\" onmouseout\=\"this\.src\=\'hidetoc1.gif\'\; window\.status\=\'\'\;\"><\/a>'
window.status = "";
top.theMenu.mainMenu.style.display='block';
top.theMenu.showMenu.style.display='none';
top.theMenu.theBody.bgColor='White';

//  top.theText.document.all("showtoc").style.display = "none";
  }

savedCurrentFrameSize = "75%,*"; //default size
function toggleTranslationWindow(theCommand) {
	strRowsCurrent = parseInt(top.theBible.rows);
	if (theCommand == 'toggle') {
		if (strRowsCurrent < 99) {
			savedCurrentFrameSize = top.theBible.rows;
			top.theBible.rows = "100%,*";
			} else {
				top.theBible.rows = savedCurrentFrameSize;
			}
	} 
	if (theCommand == 'hide') {
		if (parseInt(top.theBible.rows) != 100) {
			savedCurrentFrameSize = top.theBible.rows;
			top.theBible.rows = "100%,*";
		}
	}
	if (theCommand == 'show') {
		if (parseInt(top.theBible.rows) > 70) {
			top.theBible.rows = savedCurrentFrameSize;
		}
	}
}

//top.theMenu.mainMenu.style.display='none';

//  top.theCols.cols = strColumns_Current;
//top.theMenu.mainMenu.style.display='block';

