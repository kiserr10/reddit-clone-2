import React, { Component } from 'react';
import './App.css';
import samplePosts from './dummy-posts';
import AddPost from './components/AddPost';
import Posts from './components/Posts';
import Navigation from './components/Navigation';

class App extends Component {
	constructor(){
		super();
		this.addPost = this.addPost.bind(this);
		this.toggleHidden = this.toggleHidden.bind(this);
		this.loadPosts = this.loadPosts.bind(this);
		//Get initial state
		this.state = {
			posts: {},
			isHidden: false
		};
	}
	addPost(post){
		console.log(post);
		//update state
		const posts = this.state.posts;
		const timestamp = Date.now();
		posts[`post-${timestamp}`] = post;
		//set state
		this.setState({
			posts: posts,
			isHidden: true
		});
		console.log(this.state.posts);
	}
	loadPosts(){
		this.setState({
			posts: samplePosts
		});
	}

	toggleHidden(){
		this.setState({
			isHidden: !this.state.isHidden
		});
	}


	render() {
		return (
      <div>
				<Navigation tagline="Reddit Clone" toggleHidden={this.toggleHidden}/>
				{
					this.state.isHidden
					?  <AddPost addPost={this.addPost} loadPosts={this.loadPosts} />
				:null
				}
				<Posts />
      </div>
		);
	}
}

export default App;
