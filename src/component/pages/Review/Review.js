import React from 'react';

const Review = ({ rev }) => {
    const { review, email, photo, userName } = rev
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
                <button className="btn btn-ghost btn-xs">{review}</button>
            </th>
        </tr>

    );
};

export default Review;