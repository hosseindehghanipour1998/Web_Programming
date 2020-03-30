class EventListener {
	constructor(eventName , listener){
		this.eventName = eventName ;
		this.listener = listener ;
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
	countListeners(){}

	//4
	off(){}

	//5
	on(){}

	//6
	removeEvent(){}

	//7
	removeListener(){}

	//8
	countListeners(){}

	//9
	listeners(){}


}

class EventListener {
	constructor(eventName , listener){
		this.eventName = eventName ;
		this.listener = listener ;
	}
}