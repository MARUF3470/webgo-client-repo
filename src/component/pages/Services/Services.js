import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Service from '../Service/Service';

const Services = () => {
    useTitle('Services')
    const services = useLoaderData()
    return (
        <div className='my-10 grid grid-cols-3'>
            {
                services?.map(service => <Service key={service._id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;