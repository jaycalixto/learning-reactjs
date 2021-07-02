import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

function IndiretaPai() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nomePar, idadePar, nerdPar) {
    setNome(nomePar);
    setIdade(idadePar);
    setNerd(nerdPar);
  }

  return (
    <div>
      <div>Pai</div>
      <div>
        <span>{nome} </span>
        <span>
          <strong>{idade}</strong>
        </span>
        <span>{nerd ? 'É nerd' : 'não nerd'}</span>
      </div>
      <IndiretaFilho quandoClickar={fornecerInformacoes} />
    </div>
  );
}

export default IndiretaPai;
