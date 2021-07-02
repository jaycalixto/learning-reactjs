import React from 'react';

function DiretaFilho({ texto, numero, booleano }) {
  return (
    <div>
      <span> {texto} </span>
      <span>
        <strong>{numero}</strong>
      </span>
      <span> {booleano ? 'Verdadeiro' : 'Falso'} </span>
    </div>
  );
}

export default DiretaFilho;
