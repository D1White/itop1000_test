import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Header, UserCard } from '../../components'
import './users.scss';
import { fetchUsers } from '../../redux/actions/info'
import { setRouteUser } from '../../redux/actions/routeUser'

const Users = () => {
    const dispatch = useDispatch();

    const { users } = useSelector(({ info }) => info);

    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(setRouteUser(null))
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <Header />
            <div className="users">
                <div className="container">
                    <div className="users__content">
                        <h2 className="block__title">Users:</h2>
                        <div className="users__block">
                            { users && users.map((user) => (
                                <Link to={`/user/${user._id}`} key={user._id}>
                                    <UserCard
                                        username={user.username}
                                        email={user.email}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users
