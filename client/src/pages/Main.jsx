import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Header, UserController, UserPopup, Profiles } from '../components'
import { fetchUser } from '../redux/actions/user'

const Main = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(({ user }) => user);
    const [userPopupVisible, setUserPopupVisible] = useState(false);

    useEffect(() => {
        if (!user) {
            dispatch(fetchUser())
        }
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            { userPopupVisible && <UserPopup popupVisible={setUserPopupVisible} /> }
            <Header />
            <UserController popupVisible={setUserPopupVisible} />
            <Profiles />
        </>
    )
}

export default Main
