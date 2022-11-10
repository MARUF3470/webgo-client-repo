import React from 'react';

const ReviewForService = ({ rev }) => {
    const { review, email, photo, userName, serviceName } = rev
    return (
        <tr>
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
                <span className='text-sm'>{email}</span>
            </td>
            <td>
                {serviceName}
            </td>
            <th>
                <p>{review}</p>
                {/* <button className="btn btn-ghost btn-xs">{review}</button> */}
            </th>
        </tr>
    );
};

export default ReviewForService;