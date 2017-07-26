import React, { Component } from 'react';
import '../App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default class Navigation extends Component {
	formShow(event) {
		event.preventDefault();
		this.props.toggleHidden();
	}
	render(){
		return(
			<div className="navbar navbar-default column">
				<h1 className="title-header">{this.props.tagline} <small> Created By Ross Kiser </small></h1>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<button className="nav-link active btn btn-primary" href="/">Posts</button>
					</li>
					<li onClick={this.props.toggleHidden.bind(this)} className="nav-item">
						<button className="nav-link active btn btn-primary" href="">Add Post</button>
					</li>
				</ul>
			</div>
		);
	}
}
