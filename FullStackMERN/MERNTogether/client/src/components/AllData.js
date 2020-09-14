import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const AllData = () => {
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dataRetrieval();
    }, []);

    const dataRetrieval = () => {
        axios.get('http://localhost:8000/api/test')
            .then(response => {
                setAllData(response.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }

    const deleteHandler = i => {
        axios.delete(`http://localhost:8000/api/test/${allData[i]._id}`)
            .then(response => {
                console.log(response);
                const [...curData] = allData;
                curData.splice(i, 1);
                setAllData(curData);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Link to="/new">Add New Thing</Link>
            {
                loading ?
                <p>loading, please wait...</p>
                :
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData.map((item, i) => 
                            <tr key={i}>
                                <td><Link to={ `/thing/${item._id}` }>{item.name}</Link></td>
                                <td>{item.email}</td>
                                <td><button onClick={ () => deleteHandler(i) }>Delete</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default AllData
