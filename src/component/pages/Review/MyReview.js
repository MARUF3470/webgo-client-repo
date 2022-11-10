import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Review from './Review';

const MyReview = () => {
    useTitle('Review')
    const { user } = useContext(AuthContext)
    // console.log(user?.email)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://webgo-personal-developer-server.vercel.app/review/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setReviews(data)
            })
    }, [user?.email])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://webgo-personal-developer-server.vercel.app/review/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.error('Review Deleted')
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <div className='my-2'>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <h4 className='text-md'>Update</h4>
                                    </label>
                                </th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Service Name</th>
                                <th>Review</th>
                                <th>
                                    Delete
                                </th>

                            </tr>
                        </thead>
                        {
                            reviews?.map(rev => <Review key={rev._id} rev={rev} handleDelete={handleDelete} reviews={reviews}></Review>)
                        }
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyReview;