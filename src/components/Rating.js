import React, { Component } from 'react';

class Rating extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
				<a><i className="glyphicon glyphicon-arrow-up"></i></a>
				<a><i className="glyphicon glyphicon-arrow-down"></i></a>
			</div>
		);
	}
}
export default Rating;
