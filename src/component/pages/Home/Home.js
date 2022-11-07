import React from 'react';
import img from '../../../pictures/photo-1467232004584-a241de8bcf5d.webp'
const Home = () => {
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
            <div>

            </div>
        </div>
    );
};

export default Home;