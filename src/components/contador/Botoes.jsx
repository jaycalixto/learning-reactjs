import React from 'react';

function Botoes({ incrementar, decrementar }) {
  return (
    <p>
      <button onClick={incrementar} type="button">
        +
      </button>
      <button onClick={decrementar} type="button">
        -
      </button>
    </p>
  );
}

export default Botoes;
