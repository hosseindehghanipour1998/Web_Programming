import React from 'react' ;

// we can pass the arguments in 3 forms

// 1 - Not neat
const Card = (props) => {
	// props is like args in C.
	// if we want to write/reference to  a js code/object we must put it in between two {} in the HTML body( see <h2> )
	return (
		<div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="Robots" src={`https://robohash.org/${props.id}?200x200`}/>
			<div>

				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card ;

//2
/*
const Card = (props) => {
	// props is like args in C.
	const id,name,email = props ;
	return (
		<div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="Robots" src={`https://robohash.org/${id}?200x200`}/>
			<div>

				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);


}
*/


//3
/*
const Card = ({id , name , email}) => {
	// props is like args in C.
	const id,name,email = props ;
	return (
		<div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="Robots" src={`https://robohash.org/${id}?200x200`}/>
			<div>

				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

*/

