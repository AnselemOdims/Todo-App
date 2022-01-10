/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import './App.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
        <Route path='/' element={<TodoContainer/>} />
        <Route
					path='*'
					element={
						<main style={{ padding: '1rem' }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
