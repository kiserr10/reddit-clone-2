import React, { Component } from 'react';
import Moment from 'react-moment';
import Comments from './Comments';
import AddComment from './AddComment';
import Rating from './Rating';

class Post extends Component {
	constructor(props){
		super(props);
		this.state= {
			showComments: false
		};
	}

	render(){
		return (
		<div className="posts-container container-fluid">
			<div className="row">
				<div className="col-md-12">

					<div className="well">
						<div className="media-left">
							<img className="media-object"/>
						</div>
						<div className="media-body">
							<h4 className="media-heading">

							</h4>
							<div className="text-right">
							</div>
							<p>

							</p>
							<div>
								|
								<i className="glyphicon glyphicon-comment"></i>
								<a>
									Comments
								</a>
							</div>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default Post;
