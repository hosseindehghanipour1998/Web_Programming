var Status = {
	ON : 1 ,
	OFF : 0
}

class EventListener {
	constructor(eventName , listener , status = Status.ON ){
		this.eventName = eventName ;
		this.listener = listener ;
		this.status = status ;
	}

	showInfo(){
		let string = "[" + this.eventName + "]-[" + this.listener + "]-[" + this.status + "]";
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
		this.chain = new Array();
	}
	
	//1 
	addListener(eventType , callingFunction){
		let newEventListener = new EventListener(eventType , callingFunction) ;
		this.chain.push(newEventListener);
	}

	//2
	fire(){}


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
				item.setStatus(Status.OFF);
			}
		});
	}

	//5
	on(eventName){
		this.chain.forEach(item => {
			if(item.getEventName === eventName ) {
				item.setStatus(Status.ON);
			}
		});
	}

	//6
	removeEvent(eventName){
		for(let i = 0 ; i < this.chain.length ; i++){
			if (chain[i].getEventName === eventName ){
				this.chain.splice(i,1); // removes the item at index "i" from the list "chain"
			}
		}
	}

	//7
	removeListener(eventName , eventListener){
		for(let i = 0 ; i < this.chain.length ; i++ ){
			if( (chain[i].getEventName === eventName) && (chain[i].getEventListener() === eventListener ) ){
				this.chain.splice(i,1);
			}
		}
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

	showInfo(){
		this.chain.forEach(item => {
			item.getEventName ;
		});
	}



}



function main(){

	// Specimen Functions for testing : 
	const showLog = (string) => {console.log(string);};
	const clearWindow = () => {clear();};
	const sum = (a,b) => { return (a + b) ;};
	const sub = (a,b) => { return (a-b);};
	const multiply = (a,b) => { return (a*b);};
	const power = (a,b) => {return a**b ;};

	// Instantiation 
	let eventor = new Eventor();
	eventor.addListener("onclick" , showLog);
	eventor.addListener("hover" , clearWindow);
	eventor.addListener("hover" , sum);
	eventor.addListener("hover" , multiply);
	eventor.addListener("onclick" , sum);
	eventor.addListener("onclick" , clearWindow);
	eventor.addListener("hover" , power);
	eventor.addListener("dbclick" , multiply); 


	/* TESTING GROUND  */

	// Test addListener :
	eventor.chain.forEach(item =>{
		item.showInfo();
	});

	//Test : countListeners(eventName) &  countListeners()
	console.log("OnClink Listeners : " + eventor.countListeners("onclick") );
	console.log("OnClink Listeners : " + eventor.countListeners() );
	console.log("OnClink Listeners : " + eventor.countListeners("hover") );
}