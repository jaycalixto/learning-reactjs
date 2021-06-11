import React from 'react';
import PropTypes from 'prop-types';
import MyIf, { MyElse } from './If';


function UsuarioInfo ({ usuario }) {
    usuario = usuario || {};
    return (
        <div>
            <MyIf test={usuario && usuario.nome}>
                Seja bem vindo <strong>{ usuario.nome }</strong>!
                <MyElse>
                    Seja bem vindo <strong>Anon do Else</strong>
                </MyElse>
            </MyIf>
        </div>
    );
}

UsuarioInfo.propTypes = {
    usuario: PropTypes.any
};

export default UsuarioInfo;