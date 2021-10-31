import React from 'react';
import { Link } from 'react-router-dom';

const ServiceContent = ({ item }) => {
    const { _id, name, price, descripation, img } = item
    return (
        <div className="col-12 col-md-6 col-lg-3 my-3 ">


            <div class="col">
                <div class="card">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <h6 class="card-title">price:{price}</h6>
                        <p class="card-text">{descripation}</p>
                        <Link to={`/singleitem/${_id}`}>
                            <button type="button" class="btn btn-primary">BUY NOW</button>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ServiceContent;