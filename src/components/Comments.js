import React, { Component } from 'react';
import Moment from 'react-moment';

class Comments extends Component {
	render() {
		return (
      <div>
        <div className="row">
          <div className="col-md-offset-1">
              <div>
                <hr/>
                <p>{this.props.comment.body}</p>
								<small>
									<Moment interval={50000}fromNow>{this.props.comment.date}</Moment>
								</small>
							</div>
						</div>
				</div>
		</div>
		);
	}
}
export default Comments;
