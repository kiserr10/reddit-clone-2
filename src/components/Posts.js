import React, { Component } from 'react';
import '../App.css';
import AddPost from './AddPost';


export default class Posts extends Component {
	render(){
		return(

			<div className="posts-container container-fluid">
				<div className="row">
					<div className="col-md-12">

						<div className="well">
							<div className="media-left">
								<img className="media-object"/>
							</div>
							<div className="media-body">
								<h4 className="media-heading">
									{this.props.title}
									|
									<a><i className="glyphicon glyphicon-arrow-up"></i></a>
									<a><i className="glyphicon glyphicon-arrow-down"></i></a>
									10
								</h4>
								<div className="text-right">
									{this.props.author}
								</div>
								<p>
									{this.props.body}
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
	}
}
