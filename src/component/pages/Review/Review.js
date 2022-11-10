import React from 'react';

const Review = ({ rev, handleDelete }) => {
    const { review, email, photo, userName, serviceName, _id } = rev

    return (
        <tr>
            <th>
                <label>
                    <button className="btn">
                        Update
                    </button>
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