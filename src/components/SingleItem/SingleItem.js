import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleItem = () => {

    const { serviceId } = useParams()
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/items/${serviceId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    return (
        <div>
            <h1>item order : {serviceId}</h1>
            <h1>name : {serviceId.name}</h1>
            <h1>price: {item.price}</h1>

        </div>
    );
};

export default SingleItem;