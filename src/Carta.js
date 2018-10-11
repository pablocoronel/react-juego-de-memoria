import React, { Component } from 'react';
import './Carta.css';
import FlipCard from 'react-flipcard-2';

export default class Carta extends Component {
	render() {
		return (
			<div className={	this.props.estaSiendoComparada || this.props.fueAdivinada ? "carta normal" : "carta" } onClick={this.props.seleccionarCarta} >
				<div
					// en true se queda volteada
					// flipped={
					// 	this.props.estaSiendoComparada ||
					// 	this.props.fueAdivinada
					// }
					// disabled={true}
				>
					 {/* <div className="portada" />  */}
					<div className="contenido" style={{position:'absolute',top:0,left:0 }}>
						<i className={'fa ' + this.props.icono + ' fa-5x'} />
					</div>
				</div>
			</div>
		);
	}
}
