import React from 'react';
import { Link } from 'react-router-dom';

const ServiceContent = ({ item }) => {
    const { id, name, details, photourl } = item
    return (
        <div className="col-12 col-md-6 col-lg-3 my-3 ">


            <div class="col">
                <div class="card">
                    <img src={photourl} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{details}</p>
                        <Link to={`/singleitem/${id}`}>
                            <button type="button" class="btn btn-primary">BUY NOW</button>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ServiceContent;