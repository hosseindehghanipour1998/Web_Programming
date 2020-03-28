/*
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


// =============== EVENTS ====================

var btn = document.getElementsByTagName("button")[1]; // we say the first button on the page by [0]
function saveTheName(){
btn.addEventListener("click",function() 
	{ console.log("Clicked The Button");
})
*/
// *******************
var textField = document.getElementById("inputName");
var unorderedList = document.querySelector("ul");
var enterBtn = document.getElementById("enterBtn");

function saveTheItem(){
	var string = textField.value ;
	if ( string.length > 0 ){
		var li = document.createElement("li");
		var node = document.createTextNode(string) ;
		li.appendChild(node);
		unorderedList.appendChild(li);
		textField.value = "" ;
	}
	else{
		alert("Enter Something to submit!");
	}
}


enterBtn.addEventListener("click",saveTheItem);

textField.addEventListener("keypress",function(event){
	if(event.keyCode === 13 ){
		saveTheItem();
	}
}
); // When we press enter button on the keyboard this happens