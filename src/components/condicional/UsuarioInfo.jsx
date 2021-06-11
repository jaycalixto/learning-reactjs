import React from 'react';
import PropTypes from 'prop-types';
import MyIf from './If';


function UsuarioInfo ({ usuario }) {
    usuario = usuario || {};
    return (
        <div>
            <MyIf test={usuario && usuario.nome}>
                Seja bem vindo <strong>{ usuario.nome }</strong>!
            </MyIf>
            <MyIf test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Anon</strong>!
            </MyIf>
        </div>
    );
}

UsuarioInfo.propTypes = {
    usuario: PropTypes.any
};

export default UsuarioInfo;