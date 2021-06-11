import React from 'react';
import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';

export default function App() {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#10 - Comunicação indireta" color="#1AA12A">
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="#09 - Comunicação direta" color="#123475">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="#08 - Renderização condicional" color="#913204">
                    <ParOuImpar numero={13}></ParOuImpar>
                    <UsuarioInfo usuario={ { nome: 'UserName' } }></UsuarioInfo>
                    <UsuarioInfo usuario={ { email: 'a@a.com' } }></UsuarioInfo>
                </Card>

                <Card titulo="#07 - Desafio repetição" color="#A1A1D1">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com filhos" color="#E86981">
                    <Familia sobrenome="Gomez" >
                        <FamiliaMembro nome="Michelle"></FamiliaMembro>
                        <FamiliaMembro nome="Bergamota"></FamiliaMembro>
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
