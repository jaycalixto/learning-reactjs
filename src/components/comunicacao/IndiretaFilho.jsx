import React from 'react';
import PropTypes from 'prop-types';

function IndiretaFilho ({ quandoClickar }) {
    const min = 10;
    const max = 60;
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
    const gerarNerd = () => Math.random() > 0.5;
    return (
        <div>
            <div>Filho</div>
            <button onClick={() => quandoClickar('João', gerarIdade(), gerarNerd())}>
                Fornecer informações
            </button>
        </div>
        
    );
}

IndiretaFilho.propTypes = {
    quandoClickar: PropTypes.func
};

export default IndiretaFilho;
