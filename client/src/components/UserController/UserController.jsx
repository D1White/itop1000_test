import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import './user_controller.scss'
import { deleteUser } from '../../redux/actions/user'

const UserController = ({ popupVisible, propsUser }) => {
  const { user } = useSelector(({ user }) => user)
  const [deleted, setDeleted] = useState(false)

  const edit = () => {
    popupVisible(true)
  }

  const deleteClick = () => {
    if (window.confirm('You definitely want to delete the user?')) {
      deleteUser(propsUser._id)
      setDeleted(true)
    }
  }

  if (deleted) {
    if (user._id === propsUser._id) {
      localStorage.removeItem('token')
      localStorage.removeItem('persist:root')
      return <Redirect to="/login" />
    }
    return <Redirect to="/" />
  }

  return (
    <div className="userCtrl">
      {propsUser ? (
        <>
          <span className="userCtrl__username">{propsUser.username}</span>
          <span className="userCtrl__username">{propsUser.email}</span>
          <span className="userCtrl__role">{propsUser.isAdmin ? 'admin' : 'user'}</span>
          {user.isAdmin && (
            <div className="userCtrl__buttons">
              <button
                className="userCtrl__button edit"
                aria-label="Edit"
                onClick={edit}
                type="button"
              />
              <button
                className="userCtrl__button delete"
                aria-label="Delete"
                onClick={deleteClick}
                type="button"
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
