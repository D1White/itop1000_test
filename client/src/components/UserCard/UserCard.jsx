import React from 'react'

import './user_card.scss';

const UserCard = ({ username, email, }) => {
    return (
        <div className='userCard'>
            <span className="userCard__title">{username}</span>
            <span className="userCard__text">{email}</span>
        </div>
    )
}

export default UserCard
