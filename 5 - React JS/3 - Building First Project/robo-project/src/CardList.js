import React from 'react';
import { robots } from './robots';
import Card from './Card' ;

// Recutrn Components Statically
/*const CardList = () => {
	return(
		<div>
		    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
		    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
		    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
		    <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} />
	    </div>

	);
}*/


/*
// Return Components Dynamically
const CardList = () => {
	const cardComponent = robots.map( (user,i) => {
		// "i" stands for index in looping.
		return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
	})
	return(
		<div>
			{cardComponent}
	    </div>

	);
}
*/

/*
How Virtual DOM works is that if you don't assign a key to each element in the page , when you are going to delete
a component from the page , React deletes that component from the array an re-renders the whole page again which is
not efficient so we have to assign a key property to each element to be able to keep track of our elements and delete only tht specific element.

*/

// Return Components Dynamically with key prop
const CardList = ({robots}) => {
	const cardComponent = robots.map( (user,i) => {
		// "i" stands for index in looping.
		return (
			<Card 
				key={i} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}
			/>
		);
	})
	return(
		<div>
			{cardComponent}
	    </div>

	);
}


export default CardList ;