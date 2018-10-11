import React, { Component } from 'react';
import './Tablero.css';
import Carta from './Carta';

export default class Tablero extends Component {
	render() {
		return (
			<div className="tablero">
				{/* para cada carta.. */}
				{this.props.baraja.map((carta, index) => {
					// Boolean de cada carta para saber si la carta esta en el array de comparaciones
					const estaSiendoComparada =
						this.props.parejaSeleccionada.indexOf(carta) > -1;

					return (
						<Carta
							// lo pide react
							key={index}
							// icono para mostrar
							icono={carta.icono}
							// boolean para saber si esta siendo comparada
							estaSiendoComparada={estaSiendoComparada}
							// funcion que usa la carta
							seleccionarCarta={() =>
								this.props.seleccionarCarta(carta)
							}
							// boolean si fue adivinada
							fueAdivinada={carta.fueAdivinada}
						/>
					);
				})}
			</div>
		);
	}
}
