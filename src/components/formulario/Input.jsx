import React, {useState} from 'react';
import './Input.css';

function Input() {
    const [valor, setValor] = useState('Inicial');
    function quandoMudar(e) {
        setValor(e.target.value);
    }
    return (
        <div className='Input'>
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar}></input>
                <input value={valor} readOnly></input>
                <input value={undefined} ></input>
            </div>
        </div>
    );
}

export default Input;
