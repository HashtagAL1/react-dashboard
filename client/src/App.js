import React from 'react';
import Navigation from './components/shared/navigation'
import logo from './logo.svg';
import './App.css';
import AppRouter from './components/other/app-router';
import VerticalSidebar from './components/newDashboard/horizontalSidebar';

function App() {
  return (
    <div>
      <div className="float-left">
        <VerticalSidebar /></div>
      <div className="w-100">
        <AppRouter />
      </div>
      {/* <Navigation />

      <div>
        <AppRouter />
      </div> */}
    </div>
  );
}

export default App;
