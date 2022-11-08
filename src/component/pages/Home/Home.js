import React, { useEffect } from 'react';
import img from '../../../pictures/photo-1467232004584-a241de8bcf5d.webp'
import { FaRegCheckCircle } from 'react-icons/fa'
const Home = () => {
    useEffect(() => {
        fetch('http://localhost:5000/threeServices')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [])
    return (
        <div>
            <div className='w-3/4 mx-auto relative my-4'>
                <img src={img} alt="" className='w-3/4 h-96 rounded-lg' />
                <div className='absolute -right-10 top-1/3 w-1/3 '>
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

            </div>
        </div>
    );
};

export default Home;