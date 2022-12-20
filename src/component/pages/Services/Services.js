import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Service from '../Service/Service';

const Services = () => {
    useTitle('Services')
    const { loading } = useContext(AuthContext)
    const services = useLoaderData()
    if (loading) {
        return <div className='text-center my-72'><button className="btn loading btn-wide">loading</button></div>
    }
    return (
        <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services?.map(service => <Service key={service._id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;