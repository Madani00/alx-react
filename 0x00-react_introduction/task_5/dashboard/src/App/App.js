import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input id='email' type='email' />
        <label htmlFor='password'>Password:</label>
        <input id='password' type='password' />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
