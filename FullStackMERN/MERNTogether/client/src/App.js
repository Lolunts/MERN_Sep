import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import AllData from './components/AllData';
import NewThing from './components/NewThing';

function App() {
  return (
    <div className="App">
      <Router>
        <AllData path="/all"/>
        <NewThing path="/new"/>
      </Router>
    </div>
  );
}

export default App;
