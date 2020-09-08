import React, { useState } from 'react'

const EventCard = props => {
    const { index, event, guestAdd } = props;
    const { name, date, guests, description } = event;

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
    // const [description, setDescription] = useState(description);

    // no longer used once we incorporate lifting state
    // const [guests, setGuests] = useState(props.guests);


    return (
        <li>
            <ul>
                <li>Event Name: {name}</li>
                <li>Event Date: {date}</li>
                <li>Number of Guests: {guests}</li>
                <li>Event Description: {description}</li>
                <li><button onClick={ () => guestAdd(index) } >Add Guest</button></li>
                {/* THIS WON'T WORK                     
                <li><button onClick={ () => guests = guests+1 } >Add Guest</button></li> */}
            </ul>
        </li>
    )
}

export default EventCard
