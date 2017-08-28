import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(){
		super();
		this.onInputChange = this.onInputChange.bind(this);
		this.handleSorts = this.handleSorts.bind(this);
		this.state = {
			term: ''
		};
	}

	onInputChange(term) {
		this.props.searchTerm(term);
	}

	handleSorts(event){
		this.setState({
			filterType: event.target.value
		});
		this.props.sortFilter(event.target.value);
	}

	render(){
		return (
			<div>
				<ul className="nav nav-pills">
					<li role="presentation" className="active">
						<input
							onChange={event => this.onInputChange(event.target.value)}
							type="search" className="form-control input-sm search-form" placeholder="Filter"/>
					</li>
					<div className="form-inline">
						<label for="sort">Sort By</label>
						<select className="form-control" id="sort" value={this.state.sortType} onChange={this.handleSorts}>
							<option value="title">Title</option>
							<option value="date">Date</option>
							<option value="votes">Votes</option>
						</select>
					</div>
				</ul>
			</div>
		);
	}
}

export default SearchBar;
