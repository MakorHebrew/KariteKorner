
var the_page=document.location.href;

var page_0='<dd><img src="tridown.gif" width=16 height=16><a href="http://www.karaite-korner.org/haggadah.shtml">Introduction</a>'
var page_1='<dd><img src="tridown.gif" width=16 height=16><a href="http://www.karaites.org.uk/haggadha.shtml">Biblical Passover Haggadah</a>'
var page_2='<dd><img src="tridown.gif" width=16 height=16><a href="http://www.karaite-korner.org/haggadah_2.shtml">Egyptian Version (Translation)</a>'
var page_3='<dd><img src="tridown.gif" width=16 height=16><a href="http://www.karaite-korner.org/haggadah_3.shtml">Russian Version (Translation)</a>'

/*
if (the_page.indexOf('haggadah.shtml')!=-1)
		{var page_2='<dd><img src="tridown.gif" width=16 height=16>Egyptian Version (Translation)</a>';} else
		{if (the_page.indexOf('haggadah_3')!=-1)
			{page_3='<dd><img src="tridown.gif" width=16 height=16>Russian Version (Translation)</a>';}
*/

document.write('<dl>');
document.write('<dt><img src="triup.gif" width=16 height=16>Passover Haggadah');
document.write(page_0);
document.write(page_1);
document.write(page_2);
document.write(page_3);
document.write('</dl>');

