import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Review = ({ rev, handleDelete }) => {
    const { review, email, photo, userName, serviceName, _id } = rev
    const [updateR, setUpdateR] = useState(review)
    const handleModal = event => {
        event.preventDefault()
        const newReview = event.target.review.value;
        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: newReview })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    rev.review = newReview
                    setUpdateR(rev.review)
                    toast.success("SuccessFully Updated")
                }
            })

    }

    return (
        <tr>
            <th>
                <label>
                    {/* The button to open modal */}
                    <label htmlFor="my-modal-5" className="btn">open modal</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <form onSubmit={handleModal} className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <h3 className=" text-lg">Type your new review!</h3>
                            <input type="text" placeholder="Update review" name='review' className="input input-bordered input-primary w-full max-w-xs" />
                            <div className="modal-action">
                                <input htmlFor="my-modal-5" type="submit" className='btn' value="Submit" />
                            </div>
                        </div>
                    </form>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {userName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <th>
                {serviceName}
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">{review}</button>
            </th>
            <th>
                <button className="btn btn-circle btn-outline" onClick={() => handleDelete(_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>

    );
};

export default Review;