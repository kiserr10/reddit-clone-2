import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import NewPostFormActivate from './components/NewPostFormActivate';
import NewPostForm from './components/NewPostForm';
import SinglePost from './components/SinglePost';
import DummyPosts from './dummy-posts';

class App extends Component{
	constructor(){
		super();
		this.toggleNewPostForm = this.toggleNewPostForm.bind(this);
		this.addNewPost = this.addNewPost.bind(this);
		this.searchTerm = this.searchTerm.bind(this);
		this.searchFilter =this.searchFilter.bind(this);
		this.getComment = this.getComment.bind(this);
		this.sortFilter = this.sortFilter.bind(this);
		this.sortData = this.sortData.bind(this);
		this.state = {
			term: '',
			filterType: 'title',
			newPostFormShow: false,
			posts: DummyPosts
		};
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

	sortLetters() {
		return (a, b) => {
			let nameA = a.title.toUpperCase();
			let nameB = b.title.toUpperCase();
			if (nameA < nameB) return -1;
			if (nameA > nameB) return 1;
			return 0;
		};
	}

	compareTraits(prop){
		return (a, b) =>  b[prop] - a[prop];
	}

	getComment(comment, index) {
		this.setState({
			posts: this.state.posts.map((post, i) => {
				if (i === index) {
					post.comments = post.comments.concat(comment);
				}
				return post;
			})
		});
	}

	searchTerm(term) {
		this.setState({
			term: term
		});
	}

	sortFilter(sort){
		this.setState({
			filterType: sort
		});
	}

	searchFilter(term){
		return (x) => {
			return x.title.toLowerCase().includes(term.toLowerCase());
		};
	}

	sortData(filterType){
		if (filterType === 'votes') {
			return this.state.posts.sort(this.compareTraits('rating'));
		} else if (filterType === 'date') {
			return this.state.posts.sort(this.compareTraits('created'));
		}
		return this.state.posts.sort(this.sortLetters());
	}

	render(){
		return(
			<div>
				<Header />
				<div className="container">
					<NewPostFormActivate
						toggleNewPostForm={this.toggleNewPostForm}/>
					<SearchBar
						sortFilter={this.sortFilter}
						searchTerm={this.searchTerm} />
					<NewPostForm
						toggleNewPostForm={this.toggleNewPostForm}
						addNewPost={this.addNewPost}
						newPostFormShow={this.state.newPostFormShow} />

					{this.sortData(this.state.filterType).filter(this.searchFilter(this.state.term)).map((post, i) => {
						return(
						<SinglePost
							getComment={this.getComment}
							rating={post.rating}
							postId={i}
							key={i}
							post={post} />
						);
					})
				}
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
