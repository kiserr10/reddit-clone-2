import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DummyPosts from './dummy-posts';
import PostList from './components/AllPosts';


const dummyPosts = DummyPosts;

class App extends Component {
	constructor(props){
		super(props);
		this.state = { posts: dummyPosts };
	}


	render(){
		return (
			<div>
				<Header />
				<SearchBar />
				<PostList posts={this.state.posts} />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
