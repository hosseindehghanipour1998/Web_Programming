
class MinjQuery {

	constructor (passedElement){
		this.element = passedElement ;
	}

	addClass(classes){
		let classesNames = classes.split(" ");
		classesNames.forEach( item => this.element.classList.add(item));
	}

    attr(name) {
    	return this.element.getAttribute(name);
    }

    children(){
    	return this.element.childNodes ;
    }

    click(handlerCallbackFunction){
    	this.element.addEventListener('click', handlerCallbackFunction);
    }


    empty(){
        var child = e.lastElementChild;  
        while (child) { 
            e.removeChild(child); 
            child = e.lastElementChild; 
        }
    }

    hover(callback){
        this.element.addEventListener("mouseover",callback);
    }

    removeAttr(name){
        this.element.removeAttribute(name);
    }

    fadeToggle() {
    	elementOpacity = this.element.style.opacity ;
	    if ( elementOpacity >  0) {
	        this.element.style.opacity = 0;
	    }
	    else if ( elementOpacity == 0 ) {
	        this.element.style.opacity = 1;
	    }
    }

    hasClass(class_name){
        return () status = this.element.classList.contains(class_name) ? true : false );
    }

    toggleClass(name){
	    if(this.hasClass(name)){
	        this.element.classList.remove(name);
	    }
	    else
	        this.addClass(name)
    }

}