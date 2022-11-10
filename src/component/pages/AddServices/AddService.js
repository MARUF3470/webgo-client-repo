import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {
    const handleServiseSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const money = form.money.value;
        const description = form.description.value
        // console.log(money, photo, name, description)
        const service = {
            balance: money,
            picture: photo,
            name: name,
            about: description
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service added')
                    event.target.reset()
                }
            })
    }
    return (
        <form onSubmit={handleServiseSubmit}>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='w-3/4 mx-auto p-10'>
                <h1 className='text-4xl uppercase font-semibold'>To add a service, please fillup the form carefully.</h1>
                <input type="text" name='name' placeholder="name" className="input input-bordered input-accent w-full max-w-lg my-4 block" required />
                <input type="text" name='photo' placeholder="photoUrl" className="input input-bordered input-accent w-full max-w-lg mb-4 block" required />
                <input type="text" name='money' placeholder="enrollment money" className="input input-bordered input-accent w-full max-w-lg mb-4 block" required />
                <textarea className="textarea textarea-accent w-full max-w-2xl mb-4 block" name='description' placeholder="description" required></textarea>
                <input type="submit" className='btn btn-outline btn-wide' value="Submit" />
            </div>
        </form>
    );
};

export default AddService;