import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default function Familia(p) {
    return(
        <div>
            <FamiliaMembro nome="Nome Nome" sobrenome={p.sobrenome} >{p.children}</FamiliaMembro>
            <FamiliaMembro nome="Nome bacana" {...p} >{p.children}</FamiliaMembro>
            <FamiliaMembro nome="Nome nomeado" sobrenome={p.sobrenome} >{p.children}</FamiliaMembro>
        </div>
    );
}