import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import Thing from '../models/thing';

const NewThing = () => {
    // const [thing, setThing] = useState(new Thing());
    const [thing, setThing] = useState({
        name: '',
        email: ''
    });
    const [errors, setErrors] =  useState({
        name: '',
        email: ''
    })

    const submitHandler = e => {
        e.preventDefault();


        // Step 1: Fire off the post request
        axios.post('http://localhost:8000/api/test', thing)
            .then(response => {
                if(response.data.errors){
                    setErrors(response.data.errors);
                } else {
                    navigate('/all');
                }
            })
            .catch(err => console.log(err));
    }

    const changeHandler = e => {
        setThing({
            ...thing,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <Link to="/all">Go Back to All Things</Link>
            <form onSubmit={ submitHandler }>
                {
                    errors.name ? 
                    <p>{ errors.name.message }</p>
                    : ''
                }
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={ changeHandler }/>
                <br/>
                {
                    errors.email ? 
                    <p>{ errors.email.message }</p>
                    : ''
                }
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={ changeHandler }/>
                <br/>
                <input type="submit" value="Add Thing!"/>
            </form>
        </div>
    )
}

export default NewThing
