import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Header, UserController, UserPopup, Profiles, ProfilePopup } from '../components'
import { fetchRouteUser } from '../redux/actions/routeUser'
import { fetchUser } from '../redux/actions/user'

const User = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const { user } = useSelector(({ user }) => user)
  const { routeUser } = useSelector(({ routeUser }) => routeUser)

  const [userPopupVisible, setUserPopupVisible] = useState(false)
  const [editableProfile, setEditableProfile] = useState('')

  useEffect(() => {
    if (id) {
      dispatch(fetchRouteUser(id))
    } else {
      dispatch(fetchUser())
    }
  }, [])

  return (
    <>
      {editableProfile && (
        <ProfilePopup
          popupVisible={setEditableProfile}
          profileId={editableProfile}
          userId={id || user._id}
        />
      )}
      {userPopupVisible && (
        <UserPopup
          popupVisible={setUserPopupVisible}
          userId={id ? routeUser._id : user._id}
          isMainUser={!id}
        />
      )}
      <Header />
      <UserController popupVisible={setUserPopupVisible} propsUser={id ? routeUser : user} />
      {id ? (
        <>
          {routeUser && <Profiles setEditableProfile={setEditableProfile} userId={routeUser._id} />}
        </>
      ) : (
        <>{user && <Profiles setEditableProfile={setEditableProfile} userId={user._id} />}</>
      )}
    </>
  )
}

export default User
