import React, { Component } from 'react';
import '../App.css';

class NewPostForm extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.addPost = this.addPost.bind(this);
		this.state = {
			title: '',
			body: '',
			author: '',
			image: '',
			comments: [],
			newPostFormShow: true,
			rating: 0
		};
	}

	addPost(event){
		event.preventDefault();
		this.props.toggleNewPostForm();
		this.props.addNewPost(this.state);
		this.setState({
			title: '',
			body: '',
			author: '',
			image: ''
		});
	}

	handleChange(e) {
		this.setState({
			[e.target.id]: e.target.value
		});
	}

	render(){
		const {title, body, author, image} = this.state;
		if (this.props.newPostFormShow === true){
			return (
		<div className="row">
			<div className="col-md-8">

				<form className="post-edit">
					<div>
						<label htmlFor="title">Title</label>
						<input placeholder="Post Title" id="title" className="form-control"/>
					</div>
					<div>
						<label htmlFor="body">Body</label>
						<textarea placeholder="Description" id="body" className="form-control"></textarea>
					</div>
					<div>
						<label htmlFor="author">Author</label>
						<input placeholder="Author" id="author" className="form-control"/>
					</div>
					<div>
						<label htmlFor="image-url">ImageURL</label>
						<input placeholder="Image URL" id="image_url" className="form-control"/>
					</div>

					<div className="form-group">
						<button type="submit" className="btn btn-primary">
							Add Your New Post
						</button>
					</div>
				</form>

			</div>
		</div>
			);
		} else {
			return null;
		}
	}
}

export default NewPostForm;
