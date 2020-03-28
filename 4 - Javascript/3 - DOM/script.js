document.getElementsByTagName("second") ;
// Access an HTML element by it's class name.
// we say elements by tagName because there are multiple elements named by a class.
document.getElementsByTagName("second")[0] ;

document.getElementById("first");
// Get an HTML element by it's id.
// We don't sat elementsByID because id is unique for just one element.

document.querySelector("li");
// get's the first <li>.

document.querySelectorAll("li");
// gathers all <li> tags.

document.querySelector("li").getAttribute("random");
document.quesrySelector("li").setAttribute("random",1000);

var h1 = document.quesrySelector("h1");
h1.className = "coolTitle" ;
// search for codePen.io for cool themes.


// =============== EVENTS ==============