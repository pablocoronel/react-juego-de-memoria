import React, { Component } from 'react';
import './Carta.css';
import FlipCard from 'react-flipcard-2';

export default class Carta extends Component {
	render() {
		return (
			<div className="carta">
				<FlipCard>
					<div className="portada" />
					<div className="contenido">
						<i className={'fa ' + this.props.carta + ' fa-5x'} />
					</div>
				</FlipCard>
			</div>
		);
	}
}
