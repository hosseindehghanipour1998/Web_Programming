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



 





