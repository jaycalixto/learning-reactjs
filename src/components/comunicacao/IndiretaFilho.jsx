import React from 'react';
import PropTypes from 'prop-types';

function IndiretaFilho ({ quandoClickar }) {
    return (
        <div>
            <div>Filho</div>
            <button onClick={() => quandoClickar('João', 44, true)}>Fornecer informações</button>
        </div>
        
    );
}

IndiretaFilho.propTypes = {
    quandoClickar: PropTypes.func
};

export default IndiretaFilho;