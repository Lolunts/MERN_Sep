import React, { useState } from 'react'
import EventCard from './EventCard';

const Form = props => {
    // const [event, setEvent] = 
    // const [name, setName] = useState('');
    // const [date, setDate] = useState('');
    // const [guests, setGuests] = useState(0);
    // const [description, setDescription] = useState('');
    
    const [submitted, setSubmitted] = useState(false);
    const [event, setEvent] = useState({
        name: '',
        date: '',
        guests: 0,
        description: ''
    });

    const changeHandler = e => {
        setSubmitted(false);

        setEvent({
            ...event,
            [e.target.name]: e.target.value
        })

        
    }

    const submitHandler = e => {
        e.preventDefault();
        setEvent({
            name: '',
            date: '',
            guests: 0,
            description: ''
        });

        setSubmitted(true);
    }


    return (
        <>
            {
                // if(subMess != ''){
                //     <p>Thank you for your submission!</p>
                // }
                // Condition followed by ?
                submitted ?
                    // thing you want to do when the condition IS met
                    <p>Thank you for your submission!</p>
                    // don't forget the colon
                    :
                    // thing you want to do when the condition is NOT met
                    ''
            }
            {/* <EventCard name={event.name} date={event.date} guests={event.guests} description={event.description} /> */}
            <form onSubmit={ submitHandler }>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={ changeHandler } value={event.name}/>
                <br/>
                <label htmlFor="name">Date: </label>
                <input type="text" name="date" onChange={ changeHandler } value={event.date}/>
                <br/>
                <label htmlFor="name">Guests: </label>
                <input type="number" name="guests" onChange={ changeHandler } value={event.guests}/>
                <br/>
                <label htmlFor="name">Description: </label>
                <input type="text" name="description" onChange={ changeHandler } value={event.description}/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}

export default Form
