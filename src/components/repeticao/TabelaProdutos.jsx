import React from 'react';
import './TabelaProdutos.css';
import produtos from '../../data/produtos';

function TabelaProdutos () {
    
    function getLinhas () {
        return produtos.map((produto, i) => {
            return (
                <tr 
                    key={'produtos#' + i} 
                    style={{ textAlign: 'left' }} 
                    className={i % 2 === 0? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            );
        });
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaProdutos;