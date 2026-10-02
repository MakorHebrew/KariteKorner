
/*To add a page insert the file name without .shtml in the Array list and the Association List*/

if (navigator.appName.indexOf("WebTV")==-1) {

//Array List
var loi_pages = new Array("index", "alternative", "loi2", "loi9", "loi23eng", "loi20", "loi6", "loi21", "loi5", "loi15", "loi18", "loi10", "loi19", "loi8", "loi16", "loi17", "servant_vs_jesus", "loi7", "loi11", "loi12", "loi14", "i_accept", "loi13", "sin_and_atonement", "what_is_the_torah", "death_of_a_karaite_hacham", "pentecost", "pentecost_significance", "pentecost_always_on_sunday", "pentecost_morrow_after_the_sabbath", "pentecost_classical_proofs", "pentecost_facts", "servant_of_yhvh");

//Association List
loi_pages["index"]="0";
loi_pages["alternative"]="1";
loi_pages["loi2"]="2";
loi_pages["loi9"]="3";
loi_pages["loi23eng"]="4";
loi_pages["loi20"]="5";
loi_pages["loi6"]="6";
loi_pages["loi21"]="7";
loi_pages["loi5"]="8";
loi_pages["loi15"]="9";
loi_pages["loi18"]="10";
loi_pages["loi10"]="11";
loi_pages["loi19"]="12";
loi_pages["loi8"]="13";
loi_pages["loi16"]="14";
loi_pages["loi17"]="15";
loi_pages["servant_vs_jesus"]="16";
loi_pages["loi7"]="17";
loi_pages["loi11"]="18";
loi_pages["loi12"]="19";
loi_pages["loi14"]="20";
loi_pages["i_accept"]="21";
loi_pages["loi13"]="22";
loi_pages["sin_and_atonement"]="23";
loi_pages["what_is_the_torah"]="24";
loi_pages["death_of_a_karaite_hacham"]="25";
loi_pages["pentecost"]="26";
loi_pages["pentecost_significance"]="27";
loi_pages["pentecost_always_on_sunday"]="28";
loi_pages["pentecost_morrow_after_the_sabbath"]="29";
loi_pages["pentecost_classical_proofs"]="30";
loi_pages["pentecost_facts"]="31";
loi_pages["servant_of_yhvh"]="32";
/*
loi_pages["abomination"]="25";
loi_pages["gamaliel_s_advice"]="27";
loi_pages["thinking_things_over"]="28";
loi_pages["way_of_yhvh"]="28";*/


var the_page=document.location.href;
var this_page_name;
var the_last;
var the_next;
var the_site;

if (the_page.indexOf('geocities')!=-1) 

{

	this_page_name=the_page.substring(the_page.indexOf("views") + 6, the_page.indexOf(".html")); //"6" takes into account the slash or back slash after "views"

	if (this_page_name=="loi1") {this_page_name="index";} //Geocities index page is called loi1.html

	the_site='http://www.karaite-korner.org/';	

}

else 

{

	if (the_page.indexOf(".shtml") == -1) {the_page = the_page + "index.shtml";} // The index page might end in a slash without a .shtml file name so in this case add "index.shtml"

	this_page_name=the_page.substring(the_page.indexOf("light-of-israel") + 16, the_page.indexOf(".shtml")); //"16" takes into account the slash or back slash after "light-of-israel"

	the_site='';

}


var this_page_index = eval(loi_pages[this_page_name]);

if ((this_page_index>0) && (this_page_index<loi_pages.length-1)) //For Regular Page except first and last page

	{the_last = loi_pages[this_page_index - 1];
	the_next = loi_pages[this_page_index + 1];}

		else {if (this_page_index==0) //For First Page in List

				{the_last = loi_pages[loi_pages.length-1];
				the_next = loi_pages[this_page_index + 1];}

			else { //For Last Page in List

				the_last = loi_pages[this_page_index - 1];
				the_next = loi_pages[0];}

			}	

document.write('<center>');
document.write('<img src="yhvh_alone_is_saviour.jpg" width="233" height="95" border="0" alt=""><br clear=all">');
//document.write('<a href="' + the_site + the_last + '.shtml"><img src="loilast.gif" border=0 width=62 height=42 alt=LAST></a>&nbsp;');
document.write('<a href="' + the_site + 'index.shtml"><img src="loiindex.gif" border=0 width=71 height=42 alt="Index"></a>&nbsp;');
//document.write('<a href="' + the_site + the_next + '.shtml"><img src="loinext.gif" border=0 width=65 height=42 alt=NEXT></a>');
document.write('<br clear=all>');
document.write("| <a href\=\"http:\/\/www\.karaite\-korner\.org\/light\-of\-israel\/sign\.htm\">Sign Guestbook<\/a> |"); 
document.write("<a href\=\"http:\/\/www\.karaite\-korner\.org\/light\-of\-israel\/guestbook\.htm\">View Guestbook<\/a>|"); 
document.write('</center>');

} else {document.write('<center><br><br><a href="http://www.karaite-korner.org/light-of-israel/index.shtml"><img src="loiindex.gif" border=0 width=71 height=42 alt="Index"></a></center>');}


