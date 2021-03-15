import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Header, UserController } from '../components'
import { fetchUser } from '../redux/actions/user'

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser(localStorage.getItem('token')))
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <Header />
            <UserController />
        </>
    )
}

export default Main
