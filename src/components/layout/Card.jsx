import React from 'react';
import './Card.css';

export default function Card(p) {

    const cardStyle = {
        backgroundColor: p.color || '#500',
        borderColor: p.color || '#500'
    };

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{p.titulo}</div>
            <div className="Content">{p.children}</div>
        </div>
    );
}