import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = ({ service }) => {
    const { about, balance, name, picture, _id } = service
    return (
        <div className='mx-auto'>
            <PhotoProvider>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><PhotoView src={picture}><img src={picture} alt="Shoes" className='w-96 h-40' /></PhotoView></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}!</h2>
                        <p className='truncate text-xs'>{about}</p>
                        <div className="card-actions justify-end">
                            <p>{balance}</p>
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </PhotoProvider>
        </div>
    );
};

export default Service;