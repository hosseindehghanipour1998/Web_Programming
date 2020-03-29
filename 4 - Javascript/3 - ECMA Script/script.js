// ECMA : An International Standard that everyone believe in.
// ***************************************
// New way of Deifining a Variable :

const player = "bobby"; // constant
let experience = 100; 
let wizardLevel = false ;
if ( experience > 90){
	let wizardLevel = true ;
}

// creating an Object
const obj = {
	player : 'bobby',
	experience:100,
	wizardLevel:false
}

// We don't use "var" that much because it some times gets confusing.

// ******************************
// Object Properties :
const sentence = "" ;

const object {
	[name]:'hello',
	[1,2]:'jiji'
}


const fname = "John" ;
const lName = "Snow";
const warrior {
		fname,lName
}
// ******************************

// Template Strings :
const name = "Sally" ;
const age = 34 ;
const peg = "dog";

const greetingString = `Hello ${name}; You Seem to be ${age} years old. What a lovely ${pet} you have.`;
// ******************************
// Default Arguments :
function greet(name = "" , age = 18 , pet = "cat"){
	const sentenceInput = `Name : ${name} | Age : ${age} | Pet : ${pet}`;
	console.log(sentenceInput);
}

// *******************************
// Symbols -> Like Enums in Java
let sym1 = Symbol();
let sym2 = Symbol('foo'); 
let sym3 = Symbol('foo');

const Color = {
	BLUE : Symbol("blue"),
	GREEN: Symbol("green"),
	RED: Symbol("red")
};

// *******************************
//Lambda
function add(a,b) {
	return a + b ;
}

const add2 = (a,b) => {a + b ; }
// const <function_name> = (<arguments>) => {<stateMents>} 

// In 2018 the "function" keyword is gone ! we define functions in Lambda Form.

//  *****************************
// Closure
const first = () => { 
	const greet = "hi";
	const second = () => {
		alert(greet);
	}
	
	return second ; // returning a function as output.
}

const newFunc = first();
newFunc();

// Currying Functions
const curriedMultiply = (a) => (b) => a * b ;
const multiply5 = curriedMultiply(5);
console.log(multiply5(2)); // 5 * 2 = 10
 
// ***************
// Composite Functions
const compose = (f,g) => (a) => f(g(a)) ;
 
