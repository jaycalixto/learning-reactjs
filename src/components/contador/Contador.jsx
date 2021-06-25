import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Contador.css';

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo || 1
    };

    inc() {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        });
    }

    render() {
        return (
            <div className="Contador">
                <h3>Contador</h3>
                <span>{ this.state.numero }</span>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input
                        id="passoInput"
                        type="number"
                        value={this.state.passo}
                        onChange={this.setPasso}
                    ></input>
                </div>
                <p>
                    <button onClick={() => this.inc()}>+</button>
                    <button onClick={this.dec}>-</button>
                </p>
            </div>
        );
    }
    
}

Contador.propTypes = {
    numeroInicial: PropTypes.number,
    passo: PropTypes.number
};

export default Contador;
