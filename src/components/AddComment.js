import React, { Component } from 'react';

class AddComment extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.addComment = this.addComment.bind(this);
		this.state={
			comments:[{
				body: '',
				date: Date.now()
			}]
		};
	}

	render() {
		return (
      <div className="row">
        <div className="col-md-offset-1">
          <hr />
          <form className="form-inline">
            <div className="form-group">
              <input type="text" id="body" className="form-control" />
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
