import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default function App() {
    return (
        <div id="ap">
            <Fragmento />
            <Primeiro></Primeiro>
            <ComParametro
                titulo="sou um titulo com muitos caracteres"
                subtitulo="subtitulo maneiro com bastante caracteres"
            ></ComParametro>
        </div>
    );
}
