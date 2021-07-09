import React, { Component } from 'react';
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';
import './Contador.css';

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: this.props.numeroInicial || 0,
      passo: this.props.passo || 1,
    };
  }

  inc = () => {
    this.setState((prevState) => ({
      numero: prevState.numero + prevState.passo,
    }));
  };

  dec = () => {
    this.setState((prevState) => ({
      numero: prevState.numero - prevState.passo,
    }));
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h3>Contador</h3>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Botoes incrementar={this.inc} decrementar={this.dec} />
      </div>
    );
  }
}

export default Contador;
