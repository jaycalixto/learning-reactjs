import React, { cloneElement } from 'react';

export default function Familia(p) {
    return(
        <div>
            {
                p.children.map((el, i) => cloneElement(el, { ...p, key: i}))
            }
        </div>
    );
}