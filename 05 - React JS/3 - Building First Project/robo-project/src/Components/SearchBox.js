import React from 'react'

/*function SearchBox() {
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<input type="search" placeholder="search robots" />
		</div>
		
	);
}*/

// in order to search the robot we have to send the data to searchBox parents to send them to CardList.
// we have something called STATE 
// STATE is an object that decribes our application.


function SearchBox({searchField , searchChange}) {
	return(
		<div className="pa2">
			<input 
				className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
				type="search" 
				placeholder="search robots"
				onChange={searchChange} // this is how we communicate with the parent by the passed event to the parent.

			 />
		</div>
		
	);
}
export default SearchBox ;