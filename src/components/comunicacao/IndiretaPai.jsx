import React from 'react';
import IndiretaFilho from './IndiretaFilho';

function IndiretaPai () {
    let nome = '';
    let idade = 0;
    let nerd = false;

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        console.log(nomeParam, idadeParam, nerdParam);
    }

    return (
        <div>
            <div>Pai</div>
            <div>
                <span>{nome} </span>
                <span> <strong>{idade}</strong> </span>
                <span>{nerd? 'É nerd': 'não nerd'}</span>
            </div>
            <IndiretaFilho quandoClickar={fornecerInformacoes}>
            </IndiretaFilho>
        </div>
    );
}

export default IndiretaPai;