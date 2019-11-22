import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Routes from './routes.js';
;
function App() {
  return (
    <div className="App">
     <Router>
        <Navigation />
        <hr /> 
        <Routes />
      </Router>
    </div>
  );
}

export default App;
