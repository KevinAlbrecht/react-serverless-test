import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routes';

import AppContext from './contexts/app-context';
import AccountCard from './components/account-card';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <AppContext>
        <Router>
          <header className='App-header'>
            <AccountCard></AccountCard>
            {/* <div id='links'>
              <ul>
                <li>
                  <Link>
                    <span></span>
                  </Link>
                </li>
              </ul>
            </div> */}
            <img src={logo} className='App-logo' alt='logo' />
          </header>
          <div>
            <Routes></Routes>
          </div>
        </Router>
      </AppContext>
    </div>
  );
}

export default App;
