import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddPost = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    const id = window.location.pathname.split('/')[2];
    console.log(id)
    const { displayName, email, photoURL } = user
    const handleReview = event => {
        event.preventDefault()
        const review = event.target.review.value;
        const reviewDetails = {
            userName: displayName,
            email: email,
            photo: photoURL,
            serviceId: id,
            review: review
        }
        fetch()
    }
    return (
        <form className='w-3/4 mx-auto my-10' onSubmit={handleReview}>
            <textarea name='review' className="textarea textarea-primary w-full h-80 mx-auto" placeholder="add review" required></textarea>
            <div className='text-center'>
                <input type="submit" className='btn btn-wide btn-sm' value="Submit" />
            </div>
        </form>
    );
};

export default AddPost;