import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './header.scss';
import avatar from '../../assets/img/avatar.png';
import person from '../../assets/ico/person.svg';
import dashboard from '../../assets/ico/dashboard.svg';
import users from '../../assets/ico/users.svg';

const Header = () => {
    const { user } = useSelector(({ user }) => user);

    const Logout = () => {
        localStorage.removeItem('token');
    }

    return (
        <header className='header'>
            <div className="container">
                <div className="header__content">
                    <div className="header__user">
                        <img
                            src={avatar}
                            alt="avatar"
                            className={`header__avatar ${user && user.isAdmin ? 'admin' : ''}`}
                        />
                        <span className="header__username">1White</span>
                    </div>
                    <nav className="header__navigation">
                        <Link to='/' className='header__link' >
                            <span className="header__link__text">Profiles</span>
                            <img src={person} alt="Profiles"/>
                        </Link>
                        <Link to='/dashboard' className='header__link' >
                            <span className="header__link__text">Dashboard</span>
                            <img src={dashboard} alt="Dashboard"/>
                        </Link>
                        <Link to='/users' className='header__link' >
                            <span className="header__link__text">Users</span>
                            <img src={users} alt="Users"/>
                        </Link>
                        <Link to='/login' className='header__link' onClick={Logout} >
                            <span className="header__link__text">Log out</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
