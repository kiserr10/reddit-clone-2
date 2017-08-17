import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import NewPostFormActivate from './components/NewPostFormActivate';
import NewPostForm from './components/NewPostForm';
import Post from './components/SinglePost';
import DummyPosts from './dummy-posts';

class App extends Component{
	constructor(props){
		super(props);
		this.toggleNewPostForm = this.toggleNewPostForm.bind(this);
		this.addNewPost = this.addNewPost.bind(this);
		this.state = {
			term: '',
			newPostFormShow: false,
			sortValue: 'votes',
			posts: DummyPosts
		};
		console.log(this.state.posts);
	}

	toggleNewPostForm() {
		this.state.newPostFormShow === true ?
		this.setState({newPostFormShow: false}) :
		this.setState({newPostFormShow: true});
	}

	addNewPost(post) {
		this.setState({
			posts: this.state.posts.concat(post)
		});
	}
	render(){
		const newPostFormShow = this.state.newPostFormShow;
		return(
			<div>
				<Header />
				<div className="container">
					<NewPostFormActivate
						toggleNewPostForm={this.toggleNewPostForm}/>
					<SearchBar />
					<NewPostForm />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
