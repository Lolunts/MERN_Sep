import React, { useState } from 'react'
import { navigate } from '@reach/router';

const PageOne = () => {
    const [thing, setThing] = useState("");

    const submitHandler = e => {
        e.preventDefault();

        navigate(`/three/${thing}`)
    }

    return (
        <div>
            <h2>This is my first component</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quis odit magni dicta reiciendis totam neque hic id inventore enim, natus minus voluptates reprehenderit molestias dolorum similique necessitatibus consectetur harum.</p>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={e => setThing(e.target.value)}/>
                <br/>
                <input type="submit" value="Go!"/>
            </form>
        </div>
    )
}

export default PageOne
