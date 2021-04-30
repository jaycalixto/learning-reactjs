import React from 'react';
import './Card.css';

export default function Card(p) {
    return (
        <div className="Card">
            <div className="Title">{p.titulo}</div>
            <div className="Content">{p.children}</div>
        </div>
    );
}