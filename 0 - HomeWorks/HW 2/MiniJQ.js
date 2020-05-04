
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


    hasClass(class_name){
        return (status = this.element.classList.contains(class_name) ? true : false );
    }

    removeAttr(name){
        this.element.removeAttribute(name);
    }


    click(handlerCallbackFunction){
    	this.element.addEventListener('click', handlerCallbackFunction);
    }


    hover(callback){
        this.element.addEventListener("mouseover",callback);
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


    toggleClass(name){
	    if(this.hasClass(name)){
	        this.element.classList.remove(name);
	    }
	    else
	        this.addClass(name)
    }

    empty(){
    	var child = this.element.lastElementChild;  
        while (child) { 
             this.element.removeChild(child); 
            child = e.lastElementChild; 
        }
    }
    get getClasses(){
    	return this.element.classList ;
    }

}


function main() {
	
	// ==================== Obtain an Element =====================
	let element = document.getElementById('img_wrapper');
	console.log(element);
	

	// ==================== Create The Class ======================
	let jQueryClass = new MinjQuery(element);
	

	// ==================== Add A bunch of Classes ================
	jQueryClass.addClass("Vampire old-guy great-blood");
	let classList = jQueryClass.element.classList
	//classList.forEach(item => console.log(`${item} \n`));
	console.log("====================== Testing AddClass Function ==========================")
	console.log(`Class List :  ${classList}`);

	// ==================== Attribute Value =======================
	let attrValue = jQueryClass.attr('src');
	console.log("====================== Testing ATTR Function ==========================")
	console.log(`attrValue :  ${attrValue}`);

	// ==================== Children ==============================
	let children = jQueryClass.children();

	console.log("====================== Testing Children Function ==========================")
	console.log(`Children : ${children}`);
	printArr(children);


	// ==================== HasClass() ==============================
	console.log("====================== Testing hasClass Function ==========================");
	let hasClass = jQueryClass.hasClass('Vampire');
	console.log(`Has Class Vampire ? ${hasClass}`);
	hasClass = jQueryClass.hasClass('sheep');
	console.log(`Has Class Sheep ? ${hasClass}`);


	// ==================== removeAttr ==============================
	jQueryClass.removeAttr('class');
	hasClass = jQueryClass.hasClass('Vampire');
	console.log("====================== Testing removeAttr Function ==========================");
	console.log(`Has "Class" Attribute ? ${hasClass}`);


	// ==================== click()  ==============================
	const clickCB = () => {
		console.log(`Clicked on the ${jQueryClass.element}`); 
		window.alert(`You Just Clicked on ${jQueryClass.element}`);
	};
	console.log("====================== Testing click() Function ==========================");
	jQueryClass.click(clickCB);


	// ===================== hover() ===============================
	const onHover = () => {
		console.log("====================== Testing hover() Function ==========================");
		jQueryClass.element.style.cursor  = "not-allowed";
		console.log(`hovered over ${jQueryClass.element}`);
	};
	jQueryClass.hover(onHover);
	
	// ===================== fadeToggle() ===============================
	//jQueryClass.fadeToggle();


	// ===================== ToggleClass() ===============================
	console.log("====================== Testing ToggleClass Function ==========================");
	jQueryClass.addClass("Vampire old-guy great-blood");
	console.log(`Classes : ${jQueryClass.element.classList}`);
	console.log("Toggling...");
	jQueryClass.toggleClass('Vampire');
	console.log(`Classes : ${jQueryClass.getClasses}`);
	console.log("Toggling...");
	jQueryClass.toggleClass('Seyyed');
	console.log(`Classes : ${jQueryClass.getClasses}`);


	// ===================== Empty() ===============================
	console.log("====================== Testing Empty() Function ==========================");
	console.log("changed the elemenet of jQuery Class ");
	jQueryClass.elemenet = document.getElementById('points-of-sale');
	console.log(`Children : ${jQueryClass.children().length}`);
	console.log("Calling empty() function");
	jQueryClass.empty();
	console.log(`Children : ${jQueryClass.children().length}`);


}

function printArr(arr) {
	arr.forEach(item => console.log(item));
}

main();