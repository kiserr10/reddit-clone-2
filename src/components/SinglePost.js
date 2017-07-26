import React from 'react';
import '../App.css';

const SinglePost = ({ post }) => {
	const imageUrl = post.image_url;
	console.log(post);

	return (

		<div className="posts-container container-fluid">
			<div className="row">
				<div className="col-md-12">

					<div className="well">
						<div className="media-left">
							<img className="media-object" src={imageUrl} />
						</div>
						<div className="media-body">
							<h4 className="media-heading">
								{post.title}
								|
								<a><i className="glyphicon glyphicon-arrow-up"></i></a>
								<a><i className="glyphicon glyphicon-arrow-down"></i></a>
								10
							</h4>
							<div className="text-right">
								{post.author}
							</div>
							<p>
								{post.body}
							</p>
							<div>
								Some time ago
								|
								<i className="glyphicon glyphicon-comment"></i>
								<a>
									Some comments
								</a>
							</div>
							<div className="row">
								<div className="col-md-offset-1">
									<hr/>
									<p>
										Comment text
									</p>
									<form className="form-inline">
										<div className="form-group">
											<input className="form-control"/>
										</div>
										<div className="form-group">
											<input type="submit" className="btn btn-primary"/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SinglePost;
