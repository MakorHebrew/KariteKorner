//when adding new pages follow model of end_of_days

if (navigator.appName.indexOf("WebTV")==-1) { //don't show regular navBar to WebTV, send it to site outline button

var the_page=document.location.href;
var the_directory;
var the_reference;

if (the_page.indexOf('new_moon')!=-1)
	{the_directory='../';} 

else	{the_directory='';}

if (the_page.indexOf('geocities')!=-1 || the_page.indexOf('KK Shadow')!=-1) 

	{the_reference='http://www.karaite-korner.org/';} 

else	{the_reference='';}

document.write('<hr><br>');

document.write('<center><table width="" border="0" cellspacing="10" cellpadding="10"><tr>');
document.write('<td align="center" valign="middle" bgcolor="#ffffcc" width="50%"><p>Have a question about Karaism? ');
document.write('<br>Look for the answer in our <a href="karaite_faq.shtml">Karaite FAQ</a> <br>');
document.write('</td>');
document.write('</tr></table></center>');

document.write('<center>|');
document.write('<a href="' + the_reference + the_directory + 'index.shtml#outline">Site&nbsp;Outline</a>&nbsp;| ');
document.write('<a href="' + the_reference + the_directory + 'shavuot.shtml">Shavuot (Feast of Weeks)</a>&nbsp;| ');
document.write('<a href="' + the_reference + the_directory + 'main.shtml">What&nbsp;is&nbsp;Karaism</a>&nbsp;| ');
document.write('<a href="' + the_reference + the_directory + 'history.shtml">History</a>&nbsp;| ');
document.write('<a href="' + the_reference + the_directory + 'salmon_ben_yeruham.shtml">Karaism&nbsp;vs.&nbsp;Rabbanism</a>&nbsp;| ');
document.write('<a href="' + the_reference + the_directory + 'kknmr.shtml">New&nbsp;Moon&nbsp;Report</a>&nbsp;| ');
document.write('<a href="' + the_reference + the_directory + 'holidays.shtml">Holidays</a>&nbsp;| ');
document.write('<a href="' + the_reference + the_directory + 'tzitzit.shtml">Tzitzit</a>&nbsp;| ');
document.write('<a href="' + the_reference + the_directory + 'tefillin.shtml">Tefillin</a>&nbsp;| ');
document.write('<a href="' + the_reference + the_directory + 'end_of_days.shtml">The End of Days</a>&nbsp;| ');
document.write('<a href="http\:\/\/www\.hilkiahpress\.com\/">Bookstore</a>&nbsp;| ');
document.write('</center>');

document.write("<div align\=\"center\"><form action\=\"https:\/\/www\.paypal\.com\/cgi\-bin\/webscr\" method\=\"post\"><input type\=\"hidden\" name\=\"cmd\" value\=\"_donations\"><input type\=\"hidden\" name\=\"business\" value\=\"makorhebrewfoundation@gmail\.com\"><input type\=\"hidden\" name\=\"item_name\" value\=\"Karaite Korner\"><input type\=\"hidden\" name\=\"item_number\" value\=\"002\"><input type\=\"hidden\" name\=\"no_shipping\" value\=\"1\"><input type\=\"hidden\" name\=\"return\" value\=\"http:\/\/www\.karaite\-korner\.org\/makorthankyou\.shtml\">\r\n<input type\=\"hidden\" name\=\"currency_code\" value\=\"USD\"><input type\=\"hidden\" name\=\"tax\" value\=\"0\">\r\n<input type\=\"hidden\" name\=\"lc\" value\=\"US\"><input type\=\"hidden\" name\=\"bn\" value\=\"PP\-DonationsBF\"><input type\=\"image\" src\=\"https:\/\/www\.paypal\.com\/en_US\/i\/btn\/btn_donateCC_LG\.gif\" border\=\"0\" name\=\"submit\" alt\=\"PayPal \- The safer\, easier way to pay online\!\"><img alt\=\"\" border\=\"0\" src\=\"https:\/\/www\.paypal\.com\/en_US\/i\/scr\/pixel\.gif\" width\=\"1\" height\=\"1\"><\/form><\/div>"); 

} 



