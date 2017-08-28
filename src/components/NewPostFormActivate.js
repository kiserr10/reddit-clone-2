import React, { Component } from 'react';

class NewPostFormActivate extends Component {
	render(){
		return(
			<div className="pull-right">
				<p><a onClick={this.props.toggleNewPostForm} className="btn btn-info">New Post</a></p>
			</div>
		);
	}
}

export default NewPostFormActivate;
