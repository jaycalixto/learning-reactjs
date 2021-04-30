import React from 'react';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export default function Aleatorio(p) {
    const aleatorio = getRandomArbitrary(p.minimo, p.maximo);
    return (
        <div>
            <p>O número aleatório é: {aleatorio}</p>
        </div>
    );
}