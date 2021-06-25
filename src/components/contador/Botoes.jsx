import React from 'react';
import PropTypes from 'prop-types';

function Botoes({incrementar, decrementar}) {
    return (
        <p>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
        </p>
    );
}

Botoes.propTypes = {
    incrementar: PropTypes.function,
    decrementar: PropTypes.function
};

export default Botoes;
