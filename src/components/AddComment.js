import React, { Component } from 'react';

class AddComment extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.addComment = this.addComment.bind(this);
		this.state={
			comments:[{
				body: '',
				date: Date.now()
			}]
		};
	}
	addComment(event){
		event.preventDefault();
		this.props.getComment(this.state.comments, this.props.postId);
		this.setState({
			comments: {
				body: ''
			}
		});
	}

	handleChange(event){
		this.setState({
			comments: {
				[event.target.id]: event.target.value,
				date: Date.now()
			}
		});
	}

	render() {
		return (
      <div className="row">
        <div className="col-md-offset-1">
          <hr />
          <form onSubmit={this.addComment} className="form-inline">
            <div className="form-group">
              <input type="text" onChange={this.handleChange} value={this.state.comments.body} id="body" className="form-control" />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
		);
	}
}

export default AddComment;
