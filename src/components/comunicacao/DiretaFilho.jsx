import React from 'react';
import PropTypes from 'prop-types';

function DiretaFilho ({texto, numero, booleano}) {
    return (
        <div>
            <span> {texto} </span>
            <span> <strong>{numero}</strong> </span>
            <span> {booleano? 'Verdadeiro' : 'Falso'} </span>
        </div>
    );
}

DiretaFilho.propTypes = {
    texto: PropTypes.string,
    numero: PropTypes.number,
    booleano: PropTypes.bool
};

export default DiretaFilho;