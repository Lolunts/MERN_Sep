import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import EventCard from './components/EventCard';
import Form from './components/Form';

function App() {
  const [allEvents, setAllEvents] = useState([]);
  const [event, setEvent] = useState({
      name: '',
      date: '',
      guests: 0,
      description: ''
  });

  const formSubmit = () => {
    // Alternative/multi-step method to add to an array in state
    // let events = allEvents;
    // events.push(event);
    // setAllEvents(events);
    setAllEvents([...allEvents, event]);
    setEvent({
      name: '',
      date: '',
      guests: 0,
      description: ''
    });
  }

  const guestAdd = i => {
    const [...events] = allEvents;

    events[i].guests++;

    setAllEvents(events);
  }

  return (
    <>
      <ul>
        {
          allEvents.map((ev, i) => 
            <EventCard 
              key={ i }
              index={ i }
              event={ ev }
              guestAdd={ guestAdd }
            />
          )
        }
      </ul>

      <Form newEvent={ event } setNewEvent={ setEvent } formSubmit={ formSubmit }/>
    </>
  );
}

export default App;
