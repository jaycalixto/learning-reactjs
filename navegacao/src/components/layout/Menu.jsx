import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;
