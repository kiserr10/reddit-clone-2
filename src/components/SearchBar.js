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
				<ul className="nav nav-pills">
					<li role="presentation" className="active">
						<input type="search" className="form-control input-sm search-form" placeholder="Filter"/>
					</li>
					<div className="form-inline">
						<label for="sort">  Sort by </label>
						<select className="form-control" id="sort">
							<option value="votes">Votes</option>
							<option value="date">Date</option>
							<option value="title">Title</option>
						</select>
					</div>
				</ul>
			</div>
		);
	}
}

export default SearchBar;
