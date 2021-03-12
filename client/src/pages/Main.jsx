import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchUser } from '../redux/actions/user'

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser(localStorage.getItem('token')))
    }, [])

    return (
        <div>

        </div>
    )
}

export default Main
