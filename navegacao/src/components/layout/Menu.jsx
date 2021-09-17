import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/param/123">Param #01</Link>
          </li>
          <li>
            <Link to="/param/opa">Param #02</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/not-found">Não existe</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;
