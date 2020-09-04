import React, { useState } from 'react'

const EventCard = props => {
    const { name, date, description } = props;


    // let {...newObj} = props;
    // console.log(`New object:`);
    // console.log(newObj)
    // console.log(`Props:`);
    // console.log(props)
    // newObj.name="My new thing";
    // console.log(newObj);
    // console.log(props);
    // const [name, setName] = useState(name);
    // const [date, setDate] = useState(date);
    const [guests, setGuests] = useState(props.guests);
    // const [description, setDescription] = useState(description);

    return (
        <li>
            <ul>
                <li>Event Name: {name}</li>
                <li>Event Date: {date}</li>
                <li>Number of Guests: {guests}</li>
                <li>Event Description: {description}</li>
                <li><button onClick={ () => setGuests(guests+1) } >Add Guest</button></li>
                {/* THIS WON'T WORK                     
                <li><button onClick={ () => guests = guests+1 } >Add Guest</button></li> */}
            </ul>
        </li>
    )
}

export default EventCard
