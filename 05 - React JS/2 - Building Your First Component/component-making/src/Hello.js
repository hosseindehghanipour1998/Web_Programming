import React, {Component} from 'react';
import './Hello.css' // import the css file relating to this js file 

class Hello extends Component {
	render(){
		return (
			<div class="f1 tc" >
				<h1>Hello World! </h1>
				<p>	Welcome to React </p>
			</div>
		);



	}

}

export default Hello; // default means only this classs is being exported.