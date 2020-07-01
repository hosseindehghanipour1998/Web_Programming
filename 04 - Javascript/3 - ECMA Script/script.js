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

// =================== Advanced Arrays ==================
// Filtering
const array = [ 1 , 2 , 10 , 16 ];
const doubleValues = [] ;
const newArray = array.forEach( (num => { doubleValues.push(num * 2 ) ;}))
console.log(doubleValues);

// *********************************
// Map
 const mapArray = array.map((num) => {
 	return (num * 2) ;
 })
 console.log(mapArray);
 // foreach only iterates on the elements but map expects to return sth.
// *********************************
// Filter
const filterArray = array.filter( num => num < 5 && num > 3 );
console.log(filterArray);
// *********************************
//reduce
const reduceArray = array.reduce((accumulator,num) => {
	// accumulator is sth that can store the info that happens in the function.
	return ( accumulator + num );

},0); // this "0" is the initial amount of accumulator


// ======================= Advanced Objects ==================
// reference Type ,  instantiation

[] === [] ; // false -> 2 different pointers are being compared.

// References :
var obj1 = {value : 10 };
var obj2 = obj1 ;
obj2.value = 15 ;
console.log(obj1.value);

// ***** instantiation *****
class Player {

	constructor(firstName , lastName , age , height){
		this.firstName = firstName ;
		this.lastName = lastName ;
		this.age = age ;
		this.height = height ;
	}
	introduce(){
		console.log(`Name : ${firstName} - ${lastName} | Age : ${age} | Height : ${height} `);
	}
}

class Wizard extends Player {
	constructor(power , firstName , lastName , age , height){
		super(firstName , lastName , age , height);
		this.power = power ;
	}
	play(){
		console.log("Weeeeeeeeeee");
	}
}

const wizard1 = new Wizard ( "Guns","John" , "Wick" , 25 , 180 );
const wizard2 = new Wizard ( "Knives","James" , "Bond" , 40 , 165 );

// ================================================
// Padding
'Turtle'.padStart(10); // '          Tutrtle' -> 10 spaces.
'Turtle'.padEnd(5); // 'Turtle     ' -> 5 spaces.

// Objects
let newObj = {
	username0 : 'santa',
	username1 : 'Rudolf',
	username2 : 'Mr.Grinch'
};
// Sometimes working with servers we may receive these unwilling objects

Object.keys(newObj).forEach( (key,index ) => {
	console.log(key , newObj[key]);
});


Object.values(newObj).forEach( value => {
	console.log(value);
});

Object.entries(newObj).forEach( value => {
	console.log(value);
});

Object.entries(newObj).map(value => {
	return ( value[1] + value[0].replace('username',''));
	// [ "santa0" , "Rudolf1" , "Mr.Grinch2"]
})

// ======= Now Jump To excercises at the end of this section ======

// ======= Debugger =======
const flattened = [ [0,1] , [2,3] , [4,5]].reduce(
	(accumulator,array) => {
		debugger ;
		return [].concat([0,1]);
	}
	);

	// when we run the code, the execution would be stopped at the code we have "debugger" and by 
	//pushing the <enter> key we can run the code step by step after that line of code.

// ==========================
// JS is a Single Threaded Language that can be non-blocking.

/* 
Search for these :
	call stack
	web API
	Callback Queue
	Event Loop
in JS.
	# Timeout block provided by API
*/

/*
	Synchronous : Request & Wait
	Asynchronous : Request & Do your work. -> wait for CallBack() by API.

*/
/*
	When does Asynch become neede ?
		# Requesting to DB 
		# Image Processing
		# Reading Files
		# Try to talk to Machines

*/

