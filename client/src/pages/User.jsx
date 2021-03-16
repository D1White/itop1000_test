import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Header, UserController, UserPopup, Profiles, ProfilePopup } from '../components'
import { fetchRouteUser } from '../redux/actions/routeUser'

const User = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // const { user, routeUser } = useSelector(({ user }) => user);
    const { routeUser } = useSelector(({ routeUser }) => routeUser);
    const [userPopupVisible, setUserPopupVisible] = useState(false);
    const [editableProfile, setEditableProfile] = useState('');

    useEffect(() => {
        dispatch(fetchRouteUser(id))
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            { editableProfile && (
                <ProfilePopup
                    popupVisible={setEditableProfile}
                    profileId={editableProfile}
                    userId={id}
                />
            )}
            { userPopupVisible && (
                <UserPopup
                    popupVisible={setUserPopupVisible}
                    userId={routeUser._id}
                    isMainUser={false}
                />
            )}
            <Header />
            <UserController popupVisible={setUserPopupVisible} propsUser={routeUser} />
            { routeUser && <Profiles setEditableProfile={setEditableProfile} user_id={routeUser._id} /> }
        </>
    )
}

export default User

