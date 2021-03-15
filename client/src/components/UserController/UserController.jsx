import React from 'react'
import { useSelector } from 'react-redux'

import './user_controller.scss';

const UserController = ({ popupVisible }) => {
    const { user } = useSelector(({ user }) => user);

    return (
        <div className='userCtrl'>
            { user ? (
                <>
                    <span className="userCtrl__username">{user.username}</span>
                    <span className="userCtrl__username">{user.email}</span>
                    <span className="userCtrl__role">{user.isAdmin ? 'admin' : 'user'}</span>
                    <div className="userCtrl__buttons">
                        <button className='userCtrl__button edit' aria-label='Edit' />
                        <button className='userCtrl__button delete' aria-label='Delete' />
                    </div>
                </>
            ) : (
                <span>Loading</span>
            )}
        </div>
    )
}

export default UserController
