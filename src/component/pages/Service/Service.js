import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { about, balance, name, picture, _id } = service
    return (
        <div className='mx-auto h-96'>
            <PhotoProvider>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><PhotoView src={picture}><img src={picture} alt="Shoes" className='w-96 h-40' /></PhotoView></figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-sm">{name}!</h2>
                        <p className='truncate text-xs'>{about}</p>
                        <div className="card-actions justify-end">
                            <p>{balance}</p>
                            <Link to={`/services/${_id}`} className="btn btn-primary">Details</Link>
                        </div>
                    </div>
                </div>
            </PhotoProvider>
        </div>
    );
};

export default Service;