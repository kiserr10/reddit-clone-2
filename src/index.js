import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  BrowserRouter as Router,
  Route,
  Link,
	Switch
} from 'react-router-dom';

import Navigation from './components/Navigation';
import AddPost from './components/AddPost';
import Posts from './components/Posts';


ReactDOM.render(
	<Router>
		<div>
			<Switch>
				<Route path="/" component={App} />
			</Switch>
		</div>
	</Router>

,
	document.getElementById('root'));
