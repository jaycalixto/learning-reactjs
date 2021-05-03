import React from 'react';
import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';

export default function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#05 - Componente com filhos" color="#E86981">
                    <Familia sobrenome="Sobrenome 1" >
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio aleatório" color="#588">
                    <Aleatorio maximo={100} minimo={1} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#FA6900">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com parâmetro" color="#E8B71A">
                    <ComParametro
                        titulo="sou um titulo com muitos caracteres"
                        subtitulo="subtitulo maneiro com bastante caracteres"
                    />
                </Card>
                
                <Card titulo="#01 - Primeiro componente" color="#588C73">
                    <Primeiro />
                </Card>
            </div>
        </div>
    );
}
