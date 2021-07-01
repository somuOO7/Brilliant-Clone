import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Puzzle from './pages/Puzzle';

import './App.css';

function App() {
	return (
		<div className='app'>
			<Header />

			<Switch>
				<Route path='/puzzle'>
					<Puzzle />
				</Route>

				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
