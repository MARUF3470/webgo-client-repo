import React, { useEffect, useState } from 'react';
import img from '../../../pictures/photo-1467232004584-a241de8bcf5d.webp'
import img2 from '../../../pictures/Maruf.jpg'
import { FaRegCheckCircle } from 'react-icons/fa'
import Service from '../Service/Service';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
const Home = () => {
    useTitle('Home')
    const [services, setServices] = useState(null)
    useEffect(() => {
        fetch('https://webgo-personal-developer-server.vercel.app/threeServices')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className='w-3/4 mx-auto relative my-4'>
                <img src={img} alt="" className='lg:w-3/4 lg:h-96 rounded-lg' />
                <div className='lg:absolute lg:-right-10 lg:top-1/3 lg:w-1/3 '>
                    <div className=" card bg-neutral text-neutral-content ">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title uppercase">Personal Web-Developer</h2>
                            <p className='text-xs mt-3 uppercase tracking-[.25em]'>If you want to build your professional website, hiring a personal web-developer can help you to build and maintain your website.</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-20 border-x-4 shadow-2xl my-4'>
                <h1 className='text-center text-5xl'>Sounds Like You?</h1>
                <div className='grid gap-6 grid-cols-2 mx-auto w-3/4 my-10'>
                    <p className='text-sm'><FaRegCheckCircle className='inline'></FaRegCheckCircle> Tired of Searching the best website design for your business</p>
                    <p className='text-sm'><FaRegCheckCircle className='inline'></FaRegCheckCircle> Wanted a professional support for your business</p>
                    <p className='text-sm'><FaRegCheckCircle className='inline'></FaRegCheckCircle> Searching for a trusted source build a website</p>
                    <p className='text-sm'><FaRegCheckCircle className='inline'></FaRegCheckCircle> Need someone to maintain your website well</p>
                </div>
            </div>
            <div>
                <h1 className='text-center text-4xl uppercase'>Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3'>
                    {
                        services?.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
                <div className='text-center'>
                    <Link to='/services'><button className="btn btn-wide btn-sm">All Services</button></Link>
                </div>
            </div>
            <div className='shadow-sm p-3 mt-10 '>
                <div className='w-3/4 mx-auto relative my-7'>
                    <img src={img2} alt="" className='lg:w-96 rounded-lg' />
                    <div className='lg:absolute lg:left-80 lg:top-1/4 lg:w-1/2 '>
                        <div className=" card bg-neutral text-neutral-content ">
                            <div className="card-body text-start">
                                <h2 className="uppercase font-mono">hi there!</h2>
                                <h1 className='text-4xl'>I'm Maruf</h1>
                                <p className='text-xs mt-3 uppercase tracking-[.25em]'>Full stack Web-developer</p>
                                <p>I'm working as a full stack web developer since 2020. I have expertise in mordern web development tools. You can also call me a MERN developer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;