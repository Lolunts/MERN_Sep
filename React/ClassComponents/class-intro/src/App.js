import React from 'react';
import logo from './logo.svg';
import EventCard from './components/EventCard';
import './App.css';

function App() {
  return (
    <ul>
      <EventCard 
        name={"Awesome Sauce Extravaganza"}
        date={"9/3/2020"} 
        guests={10}
        description={"The awesomest of sauce and extravagant"}
      />
      <EventCard
        name="Class components demo"
        date="9/3/2020"
        guests={10}
        description="Learnin' all about dem components"
      />
      <EventCard
        name="Functional Components Demo"
        date="9/4/2020"
        guests={2}
        description="Same as before, but functional"
      />
    </ul>
  );
}

export default App;
