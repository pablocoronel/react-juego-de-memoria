import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Tablero from './Tablero';
import construirBaraja from './utils/construirBaraja';

const getEstadoInicial = () => {
	const baraja = construirBaraja();

	return {
		baraja,
		parejaSeleccionada: [],
		estaComparando: false
	};
};

class App extends Component {
	constructor(props) {
		super();

		this.state = getEstadoInicial();
	}

	// Estado inicial
	render() {
		return (
			<div className="App">
				<Header />

				{/* Tablero recibe: la baraja con todas las cartas disponibles, el estado actual del contenedor de cartas a comparar, la funcion para seleccionar una carta (la va a usar el coponente Carta) */}
				<Tablero
					baraja={this.state.baraja}
					parejaSeleccionada={this.state.parejaSeleccionada}
					seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
				/>
			</div>
		);
	}

	//Selecciona la carta clickeada
	seleccionarCarta(carta) {
		// NO selecciona la carta si: el usuario esta comparando, la carta clickeada YA EXISTE en las seleccionadas, la carta fue adivinada
		if (
			this.state.estaComparando ||
			this.state.parejaSeleccionada.indexOf(carta) > -1 ||
			carta.fueAdivinada
		) {
			return;
		}

		// Agregar la carta clickeada al array que guarda las cartas a comparar:
		const parejaActual = [...this.state.parejaSeleccionada, carta];
		
		// actualiza el array de comparacion en  el state:
		this.setState({
			parejaSeleccionada: parejaActual
		});
		
		// console.log(parejaActual)
		// si hay 2 cartas para comparar
		if (parejaActual.length === 2) {
			this.compararPareja(parejaActual);
		}
	}

	// compara las cartas del array de comparacion
	compararPareja(pareja) {
		// en el estado actualiza el estaComparando
		this.setState({
			estaComparando: true
		});

		setTimeout(() => {
			// esparse las cartas a comparar
			const [primeraCarta, segundaCarta] = pareja;
			// la baraja
			let barajaNueva = this.state.baraja;

			// si las dos cartas son iguales
			if (primeraCarta.icono === segundaCarta.icono) {
				barajaNueva = barajaNueva.map((cadaCarta, index) => {
					if (cadaCarta.icono !== primeraCarta.icono) {
						return cadaCarta;
					} else {
						return { ...cadaCarta, fueAdivinada: true };
					}
				});
			}

			// actualizar el state con la baraja nueva
			this.setState({
				baraja: barajaNueva,
				parejaSeleccionada: [],
				estaComparando: false
			});
		}, 1000);
	}
}

export default App;
