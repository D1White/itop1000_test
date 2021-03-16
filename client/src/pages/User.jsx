import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Header, UserController, UserPopup, Profiles, ProfilePopup } from '../components'
import { fetchUser } from '../redux/actions/user'

const User = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { user, routeUser } = useSelector(({ user }) => user);
    const [userPopupVisible, setUserPopupVisible] = useState(false);
    const [editableProfile, setEditableProfile] = useState('');

    useEffect(() => {
        dispatch(fetchUser(id))
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        console.log(id);
    }, [id])

    return (
        <>
            { editableProfile && (
                <ProfilePopup
                    popupVisible={setEditableProfile}
                    profileId={editableProfile}
                    userId={user._id}
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
            { user && <Profiles setEditableProfile={setEditableProfile} user_id={user._id} /> }
        </>
    )
}

export default User

