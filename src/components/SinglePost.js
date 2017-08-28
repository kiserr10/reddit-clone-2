import React, { Component } from 'react';
import Moment from 'react-moment';
import Comments from './Comments';
import AddComment from './AddComment';
import Rating from './Rating';

class SinglePost extends Component {
	constructor(){
		super();
		this.toggleComments = this.toggleComments.bind(this);
		this.state = {
			showComments: false
		};
	}

	toggleComments(){
		this.state.showComments === true ?
		this.setState({ showComments: false }) :
		this.setState({ showComments: true });
	}

	render(){
		return (
		<div className="posts-container container-fluid">
			<div className="row">
				<div className="col-md-12">

					<div className="well">
						<div className="media-left">
							<img className="media-object" src={this.props.post.image_url} />
						</div>
						<div className="media-body">
							<h3 className="media-heading">
								{this.props.post.title}
								<Rating
									receiveRatingFromChild={this.props.receiveRatingFromChild}
									rating={this.props.rating}
									postId={this.props.postId} />
							</h3>
							<div className="text-right">
								<h4>{this.props.post.author}</h4>
							</div>
							<p>
								{this.props.post.body}
							</p>
							<div>
								<Moment fromNow>{this.props.post.created}</Moment>
								|
								<i className="glyphicon glyphicon-comment"></i>
								<a onClick={this.toggleComments}>
									{this.props.post.comments.length} Comments
								</a>
							</div>

							{this.state.showComments === true &&
								<div>
									{this.props.post.comments.map((comment, i) => {
										return(
											<Comments key={i} commentId={i} comment={comment} />
										);
									})}
								<div>
									<AddComment postId={this.props.postId} getComment={this.props.getComment}/>
								</div>
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

export default SinglePost;
