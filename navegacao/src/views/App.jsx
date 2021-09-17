import React from 'react';
import Menu from '../components/layout/Menu.jsx';
import Content from '../components/layout/Content.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
}

export default App;
