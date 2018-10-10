import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Tablero from './Tablero';
import construirBaraja from './utils/construirBaraja';

// Estado
const getEstadoInicial = () => {
	const baraja = construirBaraja();

	return {
		baraja
	};
};

class App extends Component {
	constructor(props) {
		super();

		this.state = getEstadoInicial();
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Tablero baraja={this.state.baraja} />
			</div>
		);
	}
}

export default App;
