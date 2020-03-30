class EventListener {
	constructor(eventName , listener , status = "on"){
		this.eventName = eventName ;
		this.listener = listener ;
		this.status = status ;
	}

	set status(activationStatus){
		this.status = activationStatus ;
	}

	get eventName(){
		return this.eventName ;
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
		let chosenEvents = new Array();
		this.chain.forEach(item => {
			if(item.getEventName() === eventName ){
				chosenEvents.add(item);
			}
		});
	}

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