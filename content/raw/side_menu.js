//when adding new pages follow model of end_of_days

if (navigator.appName.indexOf("WebTV")==-1) {

var the_page=document.location.href;
var file_type;
var the_pages;

if (the_page.indexOf('geocities')!=-1 || the_page.indexOf('KK Shadow')!=-1) 

	{the_reference='http://www.karaite-korner.org/';
	file_type="html";
	the_pages = new Array("karaitekorner-main.", "karaitekorner-history.", "salmon1.", "abib_1.", "karaitekorner-tzitzit.", "karaitekorner-tefillin.", "karaitekorner-survey.");} 

else	{the_reference='';
		file_type="shtml";
		the_pages = new Array("main.", "history.", "salmon_ben_yeruham.", "abib.", "tzitzit.", "tefillin.", "survey.");}

document.write('<center><font size="+1">Navigation Bar</font></center>');

document.write('<font size="-1">');

document.write('<br><a href="index.shtml#outline">Site Outline</a>');

document.write('<p><a href="main.shtml">What is Karaism</a>');

document.write('<p><a href="history.shtml">History of Karaism</a>');

document.write('<p><a href="sukkot.shtml">Sukkot<br>(Feast of Booths)</a>');

document.write('<p><a href="salmon_ben_yeruham.shtml">Karaism vs. Rabbanism</a>');

document.write('<p><a href="kknmr.shtml">Monthly New<br>Moon Sightings</a><p>');

document.write('<p><a href="holidays.shtml">Biblical Holidays</a></p>');

document.write('<p><a href="holiday_dates.shtml">Holiday Dates</a>');

document.write('<p><a href="abib.shtml">Abib (Barley)</a>');

document.write('<p><a href="new_moon.shtml">New Moon</a>');

document.write('<p><a href="tzitzit.shtml">Tzitzit ("Fringes")</a>');

document.write('<p><a href="end_of_days.shtml">The End of Days</a>');

document.write('<p><a href="tefillin.shtml">Tefillin</a><br><a href="tefillin.shtml">(Phylacteries)</a>');

document.write('<p><center><a href\=\"http:\/\/www\.hilkiahpress\.com\/tzitzit\.html\"><img src\=\"http:\/\/www\.karaite\-korner\.org\/tzitzit_icon_2\.jpg\" alt\=\"Buy Karaite Tzitzit \(Fringes\)\" name\=\"Buy Karaite Tzitzit \(Fringes\)\" id\=\"Buy Karaite Tzitzit \(Fringes\)\" width\=\"100\" height\=\"48\" border\=\"0\"><\/a><\/center>');

document.write("<div align\=\"center\"><form action\=\"https:\/\/www\.paypal\.com\/cgi\-bin\/webscr\" method\=\"post\"><input type\=\"hidden\" name\=\"cmd\" value\=\"_donations\"><input type\=\"hidden\" name\=\"business\" value\=\"makorhebrewfoundation@gmail\.com\"><input type\=\"hidden\" name\=\"item_name\" value\=\"Karaite Korner\"><input type\=\"hidden\" name\=\"item_number\" value\=\"002\"><input type\=\"hidden\" name\=\"no_shipping\" value\=\"1\"><input type\=\"hidden\" name\=\"return\" value\=\"http:\/\/www\.karaite\-korner\.org\/makorthankyou\.shtml\">\r\n<input type\=\"hidden\" name\=\"currency_code\" value\=\"USD\"><input type\=\"hidden\" name\=\"tax\" value\=\"0\">\r\n<input type\=\"hidden\" name\=\"lc\" value\=\"US\"><input type\=\"hidden\" name\=\"bn\" value\=\"PP\-DonationsBF\"><input type\=\"image\" src\=\"https:\/\/www\.paypal\.com\/en_US\/i\/btn\/btn_donateCC_LG\.gif\" border\=\"0\" name\=\"submit\" alt\=\"PayPal \- The safer\, easier way to pay online\!\"><img alt\=\"\" border\=\"0\" src\=\"https:\/\/www\.paypal\.com\/en_US\/i\/scr\/pixel\.gif\" width\=\"1\" height\=\"1\"><\/form><\/div>"); 

document.write('</font>');

document.write('<p><hr>');

} else {document.write('<center><br><br><a href="http://www.karaite-korner.org/index.shtml#outline"><img src="site_outline.gif" width=139 height=43 border=0 alt="Site_Outline"></a><P>');}