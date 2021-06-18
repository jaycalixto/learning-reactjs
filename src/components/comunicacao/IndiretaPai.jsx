import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

function IndiretaPai () {
    const [nome,setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
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
