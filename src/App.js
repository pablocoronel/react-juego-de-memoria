import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Tablero from './Tablero';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Tablero />
			</div>
		);
	}
}

export default App;
