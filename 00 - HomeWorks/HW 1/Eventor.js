var Status = {
	ON : "on" ,
	OFF : "off"
}

class EventListener {
	// Each event has a Name and a Listener.
	constructor(eventName , listener , status = Status.ON ){
		this.eventName = eventName ;
		this.listener = listener ;
		this.status = status ;
	}

	showInfo(){
		//let string = "[" + this.eventName + "]-[" + this.listener + "]-[" + this.status + "]";
		let string = `Event Name : [${this.eventName}] - Status : [${this.listener}] - Function : [${this.status}]`;
		console.log(string);
		//return string ;
	}

	set setStatus(activationStatus){
		this.status = activationStatus ;
	}

	get getEventName(){
		return this.eventName ;
	}

	get getEventStatus(){
		return this.status ;
	}
	get getEventListener(){
		return this.listener ;
	}

}

class Eventor {

	//0
	constructor(){
		this.chain = new Array(); // creating an array of EventListener
	}
	
	//1 
	addListener(eventType , callingFunction){
		let newEventListener = new EventListener(eventType , callingFunction) ;
		this.chain.push(newEventListener);
	}

	//2
	fire(eventName,...rest){
		let passedArguments = [];
		for (let arg of rest) {
        	passedArguments.push(arg);
      	}
		let gatheredListeners  = this.listeners(eventName);
		for ( let i = 0 ; i < gatheredListeners.length ; i++){
			console.log(gatheredListeners[i](...passedArguments));
		}

	}


	//3 & 8
	countListeners(){
		if(arguments[0] === undefined ){
			// No arguments passed to the function.
			return this.chain.length ;
		}

		else if (  (arguments.length === 1) && (typeof(arguments[0]) === "string") ){
			let eventName = arguments[0] ;
			let chosenCounter =  0;
			this.chain.forEach(item => {
				if(item.getEventName === eventName ){
					chosenCounter++ ;
				}
			});
			return chosenCounter ;
		}

		else {
			console.log("arguments are not passed Correctly")
		}
	}

	//4
	off(eventName){
		this.chain.forEach(item => {
			if(item.getEventName === eventName ) {
				item.setStatus = Status.OFF ;
			}
		});
	}

	//5
	on(eventName){
		this.chain.forEach(item => {
			if(item.getEventName === eventName ) {
				item.setStatus = Status.ON ;
			}
		});
	}

	//6
	removeEvent(eventName){
		
		let newEventsArray = []
		this.chain.forEach(item => {
			
			if ( item.getEventName != eventName ) {
				newEventsArray.push(item);
			}
		});
		this.chain = newEventsArray ;
	}

	//7
	removeListener(eventName , eventListener){
		let newArray = [] ;

		this.chain.forEach(item => {

			if ( (item.getEventName != eventName) || (item.getEventListener != eventListener ) ){
				newArray.push(item);
			}
		})
		this.chain = newArray ;

	}



	//9
	listeners(eventName){
		let chosenListeners = new Array();
		this.chain.forEach(item => {
			if(item.getEventName === eventName ){
				chosenListeners.push(item.getEventListener);
			}
		});
		return chosenListeners ;
	}

	printAllEventsAndListeners(){
		this.chain.forEach(item =>{
			item.showInfo();
	});
	}
}


function printArray(arr){
	arr.forEach(item => {
		console.log(item);
	})
}


function main(){

	// Specimen Functions for testing : 
	const showLog = (string) => {console.log(string);};
	const clearWindow = () => {clear();console.log("clear() function called.")};
	const sum = (a,b) => { return (a + b) ;};
	const sub = (a,b) => { return (a-b);};
	const multiply = (a,b) => { return (a*b);};
	const power = (a,b) => {return a**b ;};

	// Instantiation 
	let eventor = new Eventor();
	eventor.addListener("onclick" , power);
	eventor.addListener("hover" , sub);
	eventor.addListener("hover" , sum);
	eventor.addListener("hover" , multiply);
	eventor.addListener("onclick" , sum);
	eventor.addListener("onclick" , sub);
	eventor.addListener("onclick" , clearWindow);
	eventor.addListener("hover" , clearWindow);
	eventor.addListener("hover" , power);
	eventor.addListener("dbclick" , multiply); 
	eventor.addListener("dbclick" , sum);
	eventor.addListener("dbclick" , clearWindow);
	eventor.addListener("dbclick" , showLog);

	eventor.addListener("onmouseover" , showLog); 
	eventor.addListener("onmouseover" , clearWindow);
	eventor.addListener("onmouseover" , sum);
	eventor.addListener("onmouseover" , sub);
	eventor.addListener("onmouseover" , multiply); 
	eventor.addListener("onmouseover" , power);



	/* TESTING GROUND  */

	// Test addListener : 
	eventor.printAllEventsAndListeners();
	console.log("=================================================");

	//Test : countListeners(eventName) &  countListeners()
	console.log("Test : countListeners(eventName) &  countListeners()");
	console.log("OnClick Listeners : " + eventor.countListeners("onclick") );
	console.log("All Listeners : " + eventor.countListeners() );
	console.log("hover Listeners : " + eventor.countListeners("hover") );
	console.log("=================================================");

	// Test : off(eventName) && on(eventName)
	console.log("Test : off(eventName) && on(eventName)");
	eventor.off("dbclick");
	eventor.off("onclick");
	eventor.on("dbclick");
	eventor.printAllEventsAndListeners();
	console.log("=================================================");

	// Test : removeEvent(eventName)
	console.log("Test : removeEvent(eventName)");
	eventor.printAllEventsAndListeners();
	eventor.removeEvent("dbclick");
	console.log("*****************************");
	eventor.printAllEventsAndListeners();
	console.log("=================================================");

	// Test : removeListener(eventName , eventListener)
	console.log("Test : removeListener(eventName , eventListener)");
	console.log("OnClick Listeners : " + eventor.countListeners("onclick") );
	eventor.removeListener("onclick",clearWindow); // exists in implementation
	console.log("OnClick Listeners : " + eventor.countListeners("onclick") );
	console.log("#############");

	console.log("dbclick Listeners : " + eventor.countListeners("dbclick") );
	eventor.removeListener("dbclick",clearWindow); // exists in implementation
	console.log("dbclick Listeners : " + eventor.countListeners("dbclick") );
	console.log("#############");


	console.log("hover Listeners : " + eventor.countListeners("hover") );
	eventor.removeListener("hover",clearWindow); // doesn't exist in implementation
	console.log("hover Listeners : " + eventor.countListeners("hover") );
	console.log("=================================================");


	// Test : Listeners(eventName)
	console.log("Test : Listeners(eventName)");
	console.log("onmouseover Listeners : ")
	let onmouseoverListeners = eventor.listeners("onmouseover");
	printArray(onmouseoverListeners);
	console.log("#############");

	console.log("OnClick Listeners : ")
	let onclickListeners = eventor.listeners("onclick");
	printArray(onclickListeners);
	console.log("=================================================");


	//Test : Fire(eventName , args )
	console.log("Testing Fire() ");
	console.log("OnClick Ouput : ");
	eventor.fire("onclick",2,3,4);
	console.log("Hover Ouput : ");
	eventor.fire("hover",5,2);
	console.log("=================================================");
}


//Run The Tests
main();