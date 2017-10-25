import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {
			term: ''
		};
	}


	render(){
		return (
			<div>
				<div className="pull-right">
					<p><a className="btn btn-info">New Post</a></p>
				</div>
				<ul className="nav nav-pills">
					<li role="presentation" className="active">
						<input
							value={this.state.term}
							onChange= { event => this.setState({ term: event.target.value})}
							type="search" className="form-control input-sm search-form" placeholder="Filter"/>
					</li>
					<div className="form-inline">
						<label for="sort">  Sort by </label>
						<select className="form-control" id="sort">
							<option>Some text</option>
							<option>Some text</option>
						</select>
					</div>
				</ul>
			</div>
		);
	}
}

export default SearchBar;
