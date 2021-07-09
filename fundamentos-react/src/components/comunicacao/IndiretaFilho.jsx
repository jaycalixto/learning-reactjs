import React from 'react';

function IndiretaFilho({ quandoClickar }) {
  const min = 10;
  const max = 60;
  const gerarIdade = () => parseInt(Math.random() * (max - min), 10) + min;
  const gerarNerd = () => Math.random() > 0.5;
  return (
    <div>
      <div>Filho</div>
      <button type="button" onClick={() => quandoClickar('João', gerarIdade(), gerarNerd())}>
        Fornecer informações
      </button>
    </div>
  );
}

export default IndiretaFilho;
