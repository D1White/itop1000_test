import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Header, UserController, UserPopup, Profiles, ProfilePopup } from '../components'
import { fetchUser } from '../redux/actions/user'

const Main = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(({ user }) => user);
    const [userPopupVisible, setUserPopupVisible] = useState(false);
    const [editableProfile, setEditableProfile] = useState('');

    useEffect(() => {
        dispatch(fetchUser())
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

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
                    userId={user._id}
                    isMainUser={true}
                />
            )}
            <Header />
            <UserController popupVisible={setUserPopupVisible} propsUser={user} />
            { user && <Profiles setEditableProfile={setEditableProfile} user_id={user._id} /> }
        </>
    )
}

export default Main
