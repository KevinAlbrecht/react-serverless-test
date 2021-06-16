import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import Shell from './components/shell';
import AccountCard from './components/account-card/account-card';
import logo from './logo.svg';
import './App.css';
import CampainList from './components/campain-list/campain-list';

function App() {
  return (
    <div className='App'>
      <Shell>
        <Router>
          <header className='App-header'>
            <AccountCard></AccountCard>
            <CampainList type={2}></CampainList>
            <img src={logo} className='App-logo' alt='logo' />
          </header>
          <div>
            <Routes></Routes>
          </div>
        </Router>
      </Shell>
    </div>
  );
}

export default App;
