import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';
import './Contador.css';

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo || 1
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        });
    }

    render() {
        return (
            <div className="Contador">
                <h3>Contador</h3>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes incrementar={this.inc} decrementar={this.dec}></Botoes>
            </div>
        );
    }
    
}

Contador.propTypes = {
    numeroInicial: PropTypes.number,
    passo: PropTypes.number
};

export default Contador;
