/* 

====== INTRODUCTION =========
# Javascript doesn't need any professional IDE. All we need is a text editor and a web browser like google chrome or etc.
# JS is a non-typed language which means there is no need to define a type (int , string, ... ) before the variable name.
# JS is also a "dynamic programming language" which means a variable can be defined as a String but later in the code be assigned an integer number ( like python)
# Suggested Text Editors : Atom , VS Code , Sublime Text , Notepad++
# Suggested IDEs : WebStorm , Eclipse , Visual Stduio

*/

/* 
 ============= SESSION 1 =================
*/
// This shows a window on the top of the page telling us " I Love Javascript"
alert("I Love Javascript.") ;

// +/- Operators
5 * 3 ;//  15

5 ** 3 ; // Power Opearot -> 5^3 = 125

10 / 2 ; // 5

5 + 8 ; //  13

5 - 8  ;// -3

"Hello Wolrd" ; // a string but not assigned to anything

"Hello " + "World !" ; // "Hello World !" -> Concats the Strings

5 + "05" ; // "505" -> Concats as Strings

5 - "4" ; // 5 - 4 = 1 -> subtracts as Integers

10 % 5 ; // 0

5 % 10 ; // 5

" " + " " ; // "  "

" " + 0  ; // " 0"

true + true ; // 2 -> considers "true" as 1

true + false ; // 1 -> considers "fasle" as 0

false + true ; // 1

false - true ; // 0 - 1 = -1

"bob" - "bill" ; // NaN

// Comparisons : >= , <= , == , === , != , < , >  

5 >= 1 ; // true

0 === 1 ; // false

4 <= 1 ; // false

1 != 1 ; // false

"A" > "B" ; // false

"B" < "C" ; // true -> based on ASCII Code

"a" > "A" ; // true

"b" < "A" ; // false

true === false ; // true 

true != true ; // false 

// Question : What's the difference between == and === ?
/*
# == (Double equals operator): Known as the equality or abstract comparison operator
# === (Triple equals operator): Known as the identity or strict comparison operator.
# == converts the variable values to the same type before performing comparison. This is called type coercion.
# === does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.
# If we forget ";"" at the end of the line, in most of the times the code works but we may face some bugs and errors in rare situation. ";" is crucial to have an error-free code.

*/
var one = 1;
var one_again = 1;
var one_string = "1";  // note: this is string

console.log(one ==  one_again);  // true
console.log(one === one_again);  // true
console.log(one ==  one_string); // true. See below for explanation.
console.log(one === one_string); // false. See below for explanation.

// ==================== SESSION 2 ==========================
// VARIABLES
// Types : 	undefined , Null , Object , Symbol ( new in ECMAScript 6).
/*
# variable names can't start with a number but ot can end with numebrs.
# names can start with "letter" or "_" or "$"
# we write names in camelCase standard.
# varibales are decribed with keyword "var"
# If the varibale is empty ( not assigned) , an "undefined" message will show up below the variable while running in the web console.
*/

// *********

prompt() ; // opens a text field above the web window and writes down what ever you type in

prompt("Enter Username") ; // does the same thing as above with the difference that it shows us a message " Enter Username "

// ********
var firstNumber = prompt("Enter First Number "); // returns a String -> what you type in
var secondNumber = prompt("Enter Second Number ") ;
var sum = Number(firstNumber) + Number(secondNumber) ; // Number() casts a String to int -> "0" -> 0  or "125" -> 125
alert("The Sum is " + sum) ;// alert() shows a popup as alert field.
// ********
// JS is a Dynamic Language : Like Python

var strOrNumber = " This is a String ";
alert(strOrNumber) ;
strOrNumber = 12 ;
alert(strOrNumber);

// *******

//================================ SESSION 3 ======================
// Control Flow.
// # just like anyother programming language.

var myName = "Billy" ;
var herName = "Susan";

if ( myName === herName ){
	alert("Same Names :) ");
}
//*****

if ( myName === "Nilan" ){
	alert("Hi Nilan. ");
}
else if ( myName === "Delaram"){
	alert("Hi Delaram.");
}
else {
	alert("Nice to meet you " + myName) ;
}
//******
// "===" operator
 var userName, password ;
 userName = "John" ;
 password = "Wick" ;

 if ( userName === "John" && password === "Wick") {
 	alert("Successful Login !");
 }
 // *******
 // "!" operator

 if ( !(userName === "John") ) {
 	alert("Access Denied !");
 }

 // *********

 // ==================== Session 4 ===========================
// FUNCTIONS
/*
function <functionName> (<passing Parameters>){
	statements ;
}
*/

function sayHello ( name , age ){
	document.write("My Name is : " + name + " I am " + age + " Years Old.");
	//  Document function writes whatever you give it on a webpage.
}

//  ********

function concatenate(first , last){
	return (first + last);
}

// *******

/* <ctrl + shift + />  */
// <ctrl + />

//*********
/* In HTML file , each <input> tag has a "onclick" attribute that you can pass the name of the wanted function to it to operate as you wish the form do with the input data */
// ***********

// Nested Functions :

function nestedFunction(a,b){
	function square(x){ return x*x ;}
	function squareRoot(x) { return Math.sqrt(x) ;}
	var summation = square(a) + square(b) ;
	var sqrtOfSummation = squareRoot(summation);
	return (sqrtOfSummation);
}

//**************
// Function Constructor : 
/*
The Function() constructor expects any number of string arguments. The last
argument is the body of the function – it can contain arbitrary JavaScript
statements, separated from each other by semicolons.
*/
// In JS you can pass a function to a parameter which is also called " Pass-by-Reference."
var func = new Function ( "x" , "y" , "return x + y ;");
function operatorX(x , y){
	return func(x,y);
}

// ============================= Session 5 ======================
// Switch Case :

var grade = 'B' ;

switch(grade){

	case 'A':
		document.write("Good job getting a \'A\'");
		break;

	case 'B':
		document.write("You can do better Next time.");
		break;

	case 'F':
		document.write("Never Give Up. You Failed !");
		break;

	default :
		document.write("Not Bad ... Not Good");
}

// ======================== Session 6 ========================
// Loops :
//************* "while" Loop
var counter = 0 ;
while ( counter < 10 ){
	console.log("Number:("+counter+")\n");
	counter ++ ;
}

// ************** "do-while" Loop
counter = 0 ;

do{
	console.log("Number:("+counter+")\n");
	counter ++ ;
}while(counter < 10);

// ************* "for" Loop
for ( count = 0 ; count < 10 ; count++){
	document.write("Current Count : " + count );
	document.write("<br />");
}
// ************* "for-each" Loop
var aProperty;
document.write("Navigator Object Properties<br /> ");
// navigator is an Object -> we'll get to that later.
for (aProperty in navigator){
	document.write(aProperty);
	document.write("<br />");
}
document.write ("Exiting from the loop!");
// *************

// ======================= Session 7 =========================
// Flow Control:
/*
	Reference of the Codes & Descriptions used in this session :
	https://www.tutorialspoint.com/javascript/javascript_loop_control.htm
*/
// *********************** Break 
document.write("Entering the loop<br /> ");
while (x < 20){
	if (x == 5){
		break; // breaks out of loop completely
	}
	x = x + 1;
	document.write( x + "<br />");
}
// *********************** Continue

var x = 1;
document.write("Entering the loop<br /> ");

while (x < 10) {
   x = x + 1;
   
   if (x == 5) {
      continue;   // skip rest of the loop body
   }
   document.write( x + "<br />");
}         
document.write("Exiting the loop!<br /> ");
//************************ Labels
/*
Starting from JavaScript 1.2, a label can be used with break and continue to
control the flow more precisely. A label is simply an identifier followed by a
colon (:) that is applied to a statement or a block of code. We will see two
different examples to understand how to use labels with break and continue.

*/
document.write("Entering the loop!<br /> ");
outerloop:        // This is the label name         
	for (var i = 0; i < 5; i++) {
	   document.write("Outerloop: " + i + "<br />");
	   innerloop:
		   for (var j = 0; j < 5; j++) {
		      if (j > 3 ) break ;           // Quit the innermost loop
		      if (i == 2) break innerloop;  // Do the same thing
		      if (i == 4) break outerloop;  // Quit the outer loop
		      document.write("Innerloop: " + j + " <br />");
		   }
	}        
document.write("Exiting the loop!<br /> ");

// ======================= Session 8 ================================
// Arrays

//Arrays are zero indexed
var animals = ["tiger" , "cat" , "lion" , "bird"];
console.log(animals[1]); // gets "cat"
for( animal in animals ){
	cosole.log(animal); // returns the index of items -> animal is the index
}

// ****** array of Functions ******


var mathFunctions = [
	function add(a,b){
		return a+b ;
	},
	function sub(a,b){
		return a-b;
	}
]

// ******** Array of Mixed Things ****

var mixedList = ["apple" , 2 , 35 , "hiiii" , ["seed","soil","breeze"]];
cosole.log(mixedList[4][0]);

// **** arrays methods ****
var List = ["tiger" , "cat" , "bird" , "bear"];
list.shift(); // -> removes "tiger" from the list
list.pop(); // -> pops and returns the last item of the array
list.push("Elephant");
clear(); // clears the page
list = list.concat(["bee","deer","shark"]); // concats to the end of the list
list.length();
list.sort();
/*
Visit for more Methods on Lists : 
	tutorialspoint.com/javascript/javascript_builtin_functions.htm
*/
  
  // ================== Session 9 ==================================
  // Data Structures -> Objects.  
/*
A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword "class", and the properties are assigned inside a "constructor()" method.

*/

// *********** Class Definition
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}
// Methods
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

mycar = new Car("Ford");
document.getElementById("demo").innerHTML = mycar.present();

//  ************ Static Methods
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello() {
    return "Hello!!";
  }
}

mycar = new Car("Ford");

//Call 'hello()' on the class Car:
document.getElementById("demo").innerHTML = Car.hello();

// ************ Inheritance
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show() ;
 
// *************** Getters and Setters
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = mycar.cnam;

// *************** Null Objects

var list = null ;

// ***************



