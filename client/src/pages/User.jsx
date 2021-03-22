import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Header, UserController, UserPopup, Profiles, ProfilePopup } from '../components'
import { fetchRouteUser } from '../redux/actions/routeUser'
import { fetchUser } from '../redux/actions/user'

const User = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { user } = useSelector(({ user }) => user);
    const { routeUser } = useSelector(({ routeUser }) => routeUser);

    const [userPopupVisible, setUserPopupVisible] = useState(false);
    const [editableProfile, setEditableProfile] = useState('');

    useEffect(() => {
        if (id) {
            dispatch(fetchRouteUser(id))
        } else {
            dispatch(fetchUser())
        }
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            { editableProfile && (
                <ProfilePopup
                    popupVisible={setEditableProfile}
                    profileId={editableProfile}
                    userId={id || user._id}
                />
            )}
            { userPopupVisible && (
                <UserPopup
                    popupVisible={setUserPopupVisible}
                    userId={id ? routeUser._id : user._id}
                    isMainUser={id ? false : true}
                />
            )}
            <Header />
            <UserController popupVisible={setUserPopupVisible} propsUser={id ? routeUser : user} />
            { id ? (
                <>
                    { routeUser && <Profiles setEditableProfile={setEditableProfile} user_id={routeUser._id} /> }
                </>
            ) : (
                <>
                    { user && <Profiles setEditableProfile={setEditableProfile} user_id={user._id} /> }
                </>
            )}
        </>
    )
}

export default User
