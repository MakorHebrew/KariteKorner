
var the_version = parseInt(navigator.appVersion);
var netscape_fonts = '\"Arial (Hebrew)\"\,\"Times New Roman (Hebrew)\"\,\"Tahoma (Hebrew)\"';

//Fix direction in IE4
if (navigator.userAgent.indexOf("MSIE 4") != -1) {mainTextHebrew.style.textAlign='right';} 

//Fix direction in NS4
if ((navigator.appName.indexOf("Netscape") != -1) && (the_version == 4)) {

//main text
document.tags.p.textAlign = "Right"; 

//Page Title
document.classes.pageTitle.all.fontSize = "30pt"; 
document.classes.pageTitle.all.textAlign = "Center"; 

//Page Footer
document.classes.pageFooter.all.textAlign = "Center"; 
} 

//NS5 - Make fix when it comes out
//if ((navigator.appName.indexOf("Netscape") != -1) && (the_version == 5)) {}

//IE5 - Doesn't require fix

