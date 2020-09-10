import React, { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router'
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

function App() {
  const [pokemon, setPokemon] = useState({})
  const [success, setSuccess] = useState(true);
  useEffect(() => {
    // fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    //   .then(response => response.json())
    //   .then(response => {
    //     setPokemon(response);
    //   })
    //   .catch(err => setSuccess(false));

    axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then(response => setPokemon(response.data))
      .catch(err => setSuccess(false));
  },[])

  const changePlaces = () => {
    // run logic to determine whether or not i should go somewhere else

    navigate('/second');
  }

  return (
    <div className="App">
      {
        success ? 
          <h1>You got the data for { pokemon.name }</h1>
          :
          <h1>An unexpected error occurred.</h1>
      }
      <Link to="/">Page One</Link> | <Link to="/second">Page Two</Link>
      <Router>
        <PageOne path="/"/>
        <PageTwo path="/second"/>
        <PageThree path="/three/:thingnum"/>
      </Router>
      <button onClick={ changePlaces }>Change Places</button>
    </div>
  );
}

export default App;
