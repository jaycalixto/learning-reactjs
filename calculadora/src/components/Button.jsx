import React from 'react';
import './Button.css'

function Button({ label, operation, double, triple, click }) {
  let classes = 'button ';
  classes += operation ? 'operation' : '';
  classes += double ? 'double' : '';
  classes += triple ? 'triple' : '';

  return (<button
    type="button"
    onClick={e => click && click(label)}
    className={classes}>
    {label}
    </button>);
}

export default Button;
