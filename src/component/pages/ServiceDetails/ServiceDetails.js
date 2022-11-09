import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { balance, picture, name, about, _id } = useLoaderData()
    return (
        <div className='bg-base-200 pb-5'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{about}</p>
                        <button className="btn btn-primary">{balance}</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-center'>
                    <Link to={`/addReview/${_id}`}><button className="btn btn-wide btn-sm">Add your Review</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;