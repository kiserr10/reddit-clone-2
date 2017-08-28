import React, { Component } from 'react';
import '../App.css';

class NewPostForm extends Component {
	constructor(){
		super();
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
	}

	handleChange(event) {
		this.setState({
			[event.target.id]: event.target.value,
		});
	}

	render(){
		const {title, body, author, image} = this.state;
		if (this.props.newPostFormShow === true){
			return (
				<div className="row">
					<div className="col-md-8">

						<form className="post-edit" onSubmit={this.addPost}>
							<div>
								<label htmlFor="title">Title</label>
								<input onChange={this.handleChange} defaultValue={title} placeholder="Post Title" id="title" className="form-control"/>
							</div>
							<div>
								<label htmlFor="body">Body</label>
								<textarea onChange={this.handleChange} defaultValue={body} placeholder="Description" id="body" className="form-control"></textarea>
							</div>
							<div>
								<label htmlFor="author">Author</label>
								<input onChange={this.handleChange} defaultValue={author} placeholder="Author" id="author" className="form-control"/>
							</div>
							<div>
								<label htmlFor="image-url">ImageURL</label>
								<input onChange={this.handleChange} defaultValue={image} placeholder="Image URL" id="image_url" className="form-control"/>
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
