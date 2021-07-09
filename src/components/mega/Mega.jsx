import React, { useState } from 'react';
import gerarNumeros from './GerarNumeros';
import './Mega.css';

function Mega({ qtde }) {
  const [quantidade, setQuantidade] = useState(qtde || 6);
  const numerosIniciais = gerarNumeros(quantidade);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div>
      <h2>Mega</h2>
      <h3>{numeros.join(' ')}</h3>
      <div className="Mega">
        <label htmlFor="input">
          Quantidade de números:
          <input
            id="inputNumberMega"
            type="number"
            min="3"
            max="15"
            value={quantidade}
            onChange={(e) => {
              setQuantidade(+e.target.value);
              setNumeros(gerarNumeros(+e.target.value));
            }}
          />
        </label>
      </div>
      <button type="button" onClick={() => setNumeros(gerarNumeros(quantidade))}>
        Gerar números
      </button>
    </div>
  );
}

export default Mega;
