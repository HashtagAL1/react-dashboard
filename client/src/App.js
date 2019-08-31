import React from 'react';
import Navigation from './components/shared/navigation'
import logo from './logo.svg';
import './App.css';
import AppRouter from './components/other/app-router';

function App() {
  return (
    <div>
      <Navigation />

      <div>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
