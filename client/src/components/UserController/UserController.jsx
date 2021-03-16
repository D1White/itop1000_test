import React from 'react'
import { useSelector } from 'react-redux'

import './user_controller.scss';

const UserController = ({ popupVisible, propsUser }) => {
    const { user } = useSelector(({ user }) => user);

    const Edit = () => {
        popupVisible(true);
    }

    const Delete = () => {

    }

    return (
        <div className='userCtrl'>
            { propsUser ? (
                <>
                    <span className="userCtrl__username">{propsUser.username}</span>
                    <span className="userCtrl__username">{propsUser.email}</span>
                    <span className="userCtrl__role">{propsUser.isAdmin ? 'admin' : 'user'}</span>
                    { user.isAdmin && (
                        <div className="userCtrl__buttons">
                            <button
                                className='userCtrl__button edit'
                                aria-label='Edit'
                                onClick={Edit}
                            />
                            <button
                                className='userCtrl__button delete'
                                aria-label='Delete'
                                onClick={Delete}
                            />
                        </div>
                    )}
                </>
            ) : (
                <span>Loading</span>
            )}
        </div>
    )
}

export default UserController
