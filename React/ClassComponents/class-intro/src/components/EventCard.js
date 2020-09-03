import React, { Component } from 'react';

export default class EventCard extends Component {
    constructor(props){
        super(props);
        const { name, date, guests, description } = props;

        this.state = {
            name: name,
            date: date,
            guests: guests,
            description: description
        }
    }

    render(){
        // let { guests } = this.props;
        
        // We can deconstruct state like we deconstructed props!
        const { name, date, guests, description } = this.state;


        // const name = this.props.name;
        // const date = this.props.date;
        // const description = this.props.description;
        return(
            <li>
                <ul>
                    <li>Event Name: {name}</li>
                    <li>Event Date: {date}</li>
                    <li>Number of Guests: {guests}</li>
                    <li>Event Description: {description}</li>
                    <li><button onClick={ () => this.setState({ guests: guests + 1}) } >Add Guest</button></li>
                    {/* THIS WON'T WORK                     
                    <li><button onClick={ () => guests = guests+1 } >Add Guest</button></li> */}
                </ul>
            </li>
        )
    }
}
