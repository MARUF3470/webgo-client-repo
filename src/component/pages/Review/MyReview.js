import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Review from './Review';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    // const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])
    return (
        <div>
            <div className='my-2'>
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
                                <th>Review</th>

                            </tr>
                        </thead>
                        {
                            reviews?.map(rev => <Review key={rev._id} rev={rev}></Review>)
                        }
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyReview;