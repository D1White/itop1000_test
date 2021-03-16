import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Header, UserController, UserPopup, Profiles, ProfilePopup } from '../components'
import { fetchUser } from '../redux/actions/user'

const Main = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { user } = useSelector(({ user }) => user);
    const [userPopupVisible, setUserPopupVisible] = useState(false);
    const [editableProfile, setEditableProfile] = useState('');

    useEffect(() => {
        if (!user) {
            dispatch(fetchUser())
        }
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
            { userPopupVisible && <UserPopup popupVisible={setUserPopupVisible} /> }
            <Header />
            <UserController popupVisible={setUserPopupVisible} user={user} />
            { user && <Profiles setEditableProfile={setEditableProfile} user_id={user._id} /> }
        </>
    )
}

export default Main
