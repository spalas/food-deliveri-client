import React from 'react';
import { useParams } from 'react-router';

const SingleItem = () => {

    const { serviceId } = useParams()

    return (
        <div>
            <h1>This single item order : {serviceId}</h1>

        </div>
    );
};

export default SingleItem;