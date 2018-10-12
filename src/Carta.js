import React, { Component } from 'react';
import './Carta.css';

export default class Carta extends Component {
	render() {
		let styleContenido = {
			display: 'none'
		};

		if (this.props.estaSiendoComparada || this.props.fueAdivinada) {
			styleContenido = {
				display: 'block'
			};
		}

		return (
			<div
				className={
					// en true se queda volteada
					this.props.estaSiendoComparada || this.props.fueAdivinada
						? 'carta carta-girada'
						: 'carta'
				}
				onClick={() => {
					this.props.seleccionarCarta();
				}}
			>
				<div className="contenido" style={styleContenido}>
					<i className={'fa ' + this.props.icono + ' fa-5x'} />
				</div>
			</div>
		);
	}
}
