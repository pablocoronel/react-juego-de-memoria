import React, { Component } from 'react';
import './Tablero.css';
import Carta from './Carta';

export default class Tablero extends Component {
	render() {
		return (
			<div className="tablero">
				{this.props.baraja.map((carta, index) => (
					<Carta carta={carta.icono} key={index}/>
				))}
			</div>
		);
	}
}
