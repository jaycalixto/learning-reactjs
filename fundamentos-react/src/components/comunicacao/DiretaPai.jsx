import React from 'react';
import DiretaFilho from './DiretaFilho';

function DiretaPai() {
  return (
    <div>
      <DiretaFilho texto="Filho1" numero={1} />
      <DiretaFilho texto="Filho2" numero={91} booleano={false} />
    </div>
  );
}

export default DiretaPai;
