import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddPost = () => {
    useTitle('Add Service')
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    // console.log(user)
    const displayName = user?.displayName;
    const email = user?.email;
    const photoURL = user?.photoURL;

    const [service, setService] = useState([])
    const currentTime = new Date().toLocaleTimeString();
    const id = window.location.pathname.split('/')[2];
    console.log(id)
    useEffect(() => {
        fetch(`https://webgo-personal-developer-server.vercel.app/services/${id}`)
            .then(res => res.json())
            .then(serviceData => {
                //console.log(data)
                setService(serviceData)
            })

    }, [id])

    // console.log(service)
    const { name } = service
    const handleReview = event => {
        event.preventDefault()
        const review = event.target.review.value;
        const reviewDetails = {
            serviceName: name,
            userName: displayName,
            email: email,
            photo: photoURL,
            serviceId: id,
            review: review,
            time: currentTime
        }
        console.log(reviewDetails)



        fetch('https://webgo-personal-developer-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

                authorization: `Bearer ${localStorage.getItem('genius-token')}`

            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    event.target.reset()
                    toast.success('Review added')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <form className='w-3/4 mx-auto my-10' onSubmit={handleReview}>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <p>{currentTime}</p>
            <textarea name='review' className="textarea textarea-primary w-full h-80 mx-auto" placeholder="add review" required></textarea>
            <div className='text-center'>
                <input type="submit" className='btn btn-wide btn-sm' value="Submit" />
            </div>
        </form>
    );
};

export default AddPost;