import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Delivery.css'

const Delivery = () => {



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/items', data)
            .then(res => {
                console.log(res);
            })

    }

    return (
        <div className="delivery-service">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea {...register("desscription")} placeholder="descripation" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="img" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Delivery;