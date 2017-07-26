import React, { Component } from 'react';
import '../App.css';


export default class AddPost extends Component {
	constructor(){
		super();
		this.createPost = this.createPost.bind(this);
		this.state = {
			post:{},
		};

	}
	createPost(event){
		event.preventDefault();
		// console.log('making posts');
		const newPost = {
			title: this.title.value,
			body: this.body.value,
			author: this.author.value,
			image: this.image_url.value,
		};
		this.setState({post:newPost});
		this.props.addPost(newPost);
		this.postForm.reset();
		// console.log(this.props);
		// console.log(this.state);
		// console.log(newPost);
	}


	render(){
		return(
			<div className="add-post-form container-fluid">
				<ul className="nav nav-pills">
						<li role="presentation" className="active">
							<input type="search" className="form-control input-sm search-form" placeholder="Filter"/>
						</li>
						<div className="form-inline">
							<label for="sort">  Sort by </label>
							<select className="form-control" id="sort">
								<option>Some text</option>
								<option>Some text</option>
							</select>
						</div>
					</ul>

					<div className="row">
						<div className="col-md-8">

							<form ref={(input) => this.postForm = input} className="post-edit" onSubmit={(e) => this.createPost(e)}>
								<div>
									<label for="title">Title</label>
									<input ref={(input) => this.title = input} type="text" placeholder="Post Title" id="title" className="form-control"/>
								</div>
								<div>
									<label for="body">Body</label>
									<textarea ref={(input) => this.body = input} type="text" placeholder="Description" id="body" className="form-control"></textarea>
								</div>
								<div>
									<label for="author">Author</label>
									<input ref={(input) => this.author = input} type="text" placeholder="Author" id="author" className="form-control"/>
								</div>
								<div>
									<label for="image-url">Image URL</label>
									<input ref={(input) => this.image_url = input} type="text" placeholder="Image URL" id="image-url" className="form-control"/>
								</div>
								<div className="form-group">
									<button type="submit" className="btn btn-primary">
										Create Post
									</button>
								</div>
							</form>

						</div>
					</div>
			</div>
		);
	}
}
