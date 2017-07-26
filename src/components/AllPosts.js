import React from 'react';
import '../App.css';
import SinglePost from './SinglePost';

const PostList = (props) => {
	const postItems = props.posts.map((post) => {
		return (
			<SinglePost key={post.id} post={post} />
		);
	});

	return (
		<ul>
			{postItems}
		</ul>
	);
};

export default PostList;
