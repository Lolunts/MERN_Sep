import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import AllData from './components/AllData';
import NewThing from './components/NewThing';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <AllData path="/all"/>
        <Details path="/thing/:id"/>
        <NewThing path="/new"/>
      </Router>
    </div>
  );
}

export default App;
