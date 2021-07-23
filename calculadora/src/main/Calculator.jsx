import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
};

export default class Calculator extends Component {
  state = { ...initialState };

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const clickedEquals = operation === '=';
      const currentOperation = this.state.operation;

      const values = [ ...this.state.values ];
      values[0] = this.applyOperator(currentOperation, values[0], values[1]);
      values[1] = 0

      this.setState({
        displayValue: values[0],
        operation: clickedEquals ? null : operation,
        current: clickedEquals ? 0 : 1,
        clearDisplay: !clickedEquals,
      })
    }
  }

  applyOperator(operator, leftOperand, rightOperand) {
    switch(operator){
      case '+': return leftOperand + rightOperand;
      case '-': return leftOperand - rightOperand;
      case '/': return leftOperand / rightOperand;
      case '*': return leftOperand * rightOperand;
      default: return 0;
    }
  }

  addDigit(n) {
    if (n === '.' && this.state.displayValue.includes('.')){
      return;
    }

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;

    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== '.') {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [ ...this.state.values ]
      values[i] = newValue;
      this.setState({ values })
    }
  }

  render() {
    const addDigit = n => this.addDigit(n);
    const setOperation = op => this.setOperation(op);
    const currentState = this.state;

    return (
      <div className="calculator">
        <Display value={currentState.displayValue} />
        <Button label="AC" click={() => this.clearMemory() } triple />
        <Button label="/" operation click={setOperation} />
        <Button label="7" click={addDigit} />
        <Button label="8" click={addDigit} />
        <Button label="9" click={addDigit} />
        <Button label="*" operation click={setOperation} />
        <Button label="4" click={addDigit} />
        <Button label="5" click={addDigit} />
        <Button label="6" click={addDigit} />
        <Button label="-" operation click={setOperation} />
        <Button label="1" click={addDigit} />
        <Button label="2" click={addDigit} />
        <Button label="3" click={addDigit} />
        <Button label="+" operation click={setOperation} />
        <Button label="0" click={addDigit} double />
        <Button label="." click={addDigit} />
        <Button label="=" operation click={setOperation} />
      </div>
    );
  }
}
