import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';

export default function App() {
    return (
        <div id="ap">
            <Card titulo="Desafio aleatório">
                <Aleatorio maximo={100} minimo={1} />
            </Card>
            <Card />
            <Fragmento />
            <Primeiro></Primeiro>
            <ComParametro
                titulo="sou um titulo com muitos caracteres"
                subtitulo="subtitulo maneiro com bastante caracteres"
            ></ComParametro>
        </div>
    );
}
