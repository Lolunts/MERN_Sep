import React, { useState, useEffect } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Details = props => {
    const [thing, setThing] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/test/${props.id}`)
            .then(response => {
                if(response.data != null){
                    setThing(response.data)
                    setLoading(false);
                } else {
                    alert("That shit doesn't exist, yo")
                    navigate('/all');
                }
            })
            .catch(err => console.log(err));
    },[])

    return (
        <div>
            <Link to="/all">Go Home</Link>
        {
            loading ? 
            <p>loading data...</p>
            :
            <>
                <h2>{ thing.name }</h2>
                <p>{ thing.email }</p>
            </>
        }
        </div>
    )
}

export default Details
