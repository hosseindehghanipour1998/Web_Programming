import React from'react';

// every single object in React has the "props" property eventhough we pass nothing to it.
// each prop has a CardList function that with this function we gain the ability of wrapping other components.
const Scroll = (props) => {

	return (
		// we can get a CSS file stylee by putting the CSS code in double {{}}
		// this is the style of the scroll window.
		<div style={{overflowY:'scroll' , border:'5px solid black' ,height:'500px'}}>
			{props.children}
		</div>


		);
}



export default Scroll ;