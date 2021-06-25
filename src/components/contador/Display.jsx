import React from 'react';
import PropTypes from 'prop-types';

function Display({ numero }) {
    return (
        <span>{ numero }</span>
    );
}

Display.propTypes = {
    numero: PropTypes.number
};

export default Display;
