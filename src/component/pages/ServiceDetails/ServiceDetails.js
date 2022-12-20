import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewForService from '../Review/ReviewForService';

const ServiceDetails = () => {
    const { balance, picture, name, about, _id } = useLoaderData()
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://webgo-personal-developer-server.vercel.app/serviceReview/${_id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setReviews(data)
            })
    }, [])
    console.log(reviews)
    return (
        <div className='bg-base-200 pb-5'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={picture} className="lg:max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{about}</p>
                        <button className="btn btn-primary">{balance}</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='my-2'>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>

                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Service Name</th>
                                    <th>Review</th>
                                    <th>Time</th>

                                </tr>
                            </thead>
                            {
                                reviews?.map(rev => <ReviewForService key={rev._id} rev={rev}></ReviewForService>)
                            }
                        </table>
                    </div>
                </div>




                <div className='text-center'>
                    <Link to={`/addReview/${_id}`}><button className="btn btn-wide btn-sm">Add your Review</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;