import { useEffect, useState } from 'react'
import axios from 'axios'

import { Header, UserCard } from '../../components'
import './users.scss';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/users', {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then( statistic => {
            setUsers(statistic.data.data);
        })
    }, [])

    return (
        <>
            <Header />
            <div className="users">
                <div className="container">
                    <div className="users__content">
                        <h2 className="block__title">Users:</h2>
                        <div className="users__block">
                            { users && users.map((user) => (
                                <UserCard
                                    key={user._id}
                                    username={user.username}
                                    email={user.email}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users
