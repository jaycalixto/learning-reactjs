import React from 'react';
import MyIf, { MyElse } from './If';

function UsuarioInfo({ usuario }) {
  usuario = usuario || {};
  return (
    <div>
      <MyIf test={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong>!
        <MyElse>
          Seja bem vindo <strong>Anon do Else</strong>
        </MyElse>
      </MyIf>
    </div>
  );
}

export default UsuarioInfo;
