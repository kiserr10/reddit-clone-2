import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DummyPosts from './dummy-posts';


const dummyPosts = DummyPosts;
console.log(dummyPosts);

const App = () => {
	return (
		<div>
			<Header />
			<SearchBar />
		</div>
	);
};


ReactDOM.render(<App />, document.getElementById('root'));
