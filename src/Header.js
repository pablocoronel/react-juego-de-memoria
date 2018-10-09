import React, { Component } from "react";
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="titulo">React juego de memoria</div>

        <button className="boton-reiniciar">Reiniciar</button>

        <div className="titulo">Intentos:</div>
      </header>
    );
  }
}
