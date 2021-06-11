import React from 'react';
import PropTypes from 'prop-types';

function ParOuImpar ({ numero }) {
    const ehPar = numero % 2 === 0;
    return (
        <div>
            { ehPar 
                ? <span>Par</span> 
                : <span>Impar</span>
            }
        </div>
    );
}

ParOuImpar.propTypes = {
    numero: PropTypes.number
};

export default ParOuImpar;