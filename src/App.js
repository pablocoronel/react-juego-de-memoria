import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Tablero from "./Tablero";

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
