import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Header, UserController, UserPopup } from '../components'
import { fetchUser } from '../redux/actions/user'

const Main = () => {
    const dispatch = useDispatch();
    const [userPopupVisible, setUserPopupVisible] = useState(true);

    useEffect(() => {
        dispatch(fetchUser(localStorage.getItem('token')))
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            { userPopupVisible && <UserPopup /> }
            <Header />
            <UserController popupVisible={setUserPopupVisible} />
        </>
    )
}

export default Main
