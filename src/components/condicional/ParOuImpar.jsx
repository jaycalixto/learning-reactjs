import React from 'react';

function ParOuImpar({ numero }) {
  const ehPar = numero % 2 === 0;
  return <div>{ehPar ? <span>Par</span> : <span>Impar</span>}</div>;
}

export default ParOuImpar;
