import React, {useEffect} from 'react'
import { navigate } from '@reach/router';

const PageThree = props => {
    const { thingnum } = props;
    
    useEffect(() => {
        if(isNaN(thingnum)){
            navigate('/');
        }
    }, [])

    return (
        <div>
            <h2>{thingnum}</h2>
        </div>
    )
}

export default PageThree
