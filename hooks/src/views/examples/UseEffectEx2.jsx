import React from 'react';

export const ehPar = (num) => num %2 === 0? 'Par' : 'Impar';

function UseEffectEx2({ number }) {


  return (<>
    <div>
      <span className="text">Par ou impar:</span>
      <span className="text red">{ehPar(number)}</span>
    </div>
  </>);
};

export default UseEffectEx2;

