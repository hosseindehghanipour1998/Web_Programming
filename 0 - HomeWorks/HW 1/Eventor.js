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

	//3
	countListeners(eventName){
		let chosenCounter =  0;
		this.chain.forEach(item => {
			if(item.getEventName() === eventName ){
				chosenCounter++ ;
			}
		});
		return chosenCounter ;
	}

	//4
	off(eventName){
		this.chain.forEach(item => {
			if(item.getEventName() === eventName ) {
				item.setStatus(Status.OFF);
			}
		});
	}

	//5
	on(eventName){
		this.chain.forEach(item => {
			if(item.getEventName() === eventName ) {
				item.setStatus(Status.ON);
			}
		});
	}

	//6
	removeEvent(eventName){
		for(let i = 0 ; i < this.chain.length ; i++){
			if (chain[i].getEventName() === eventName ){
				this.chain.splice(i,1); // removes the item at index "i" from the list "chain"
			}
		}
	}

	//7
	removeListener(eventName , eventListener){
		for(let i = 0 ; i < this.chain.length ; i++ ){
			if( (chain[i].getEventName() === eventName) && (chain[i].getEventListener() === eventListener ) ){
				this.chain.splice(i,1);
			}
		}
	}

	//8
	countListeners(){}

	//9
	listeners(){}


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



}