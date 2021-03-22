import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import "./auth.scss";
import { Input } from "../../components";
import { login, setLoggedIn } from '../../redux/actions/user'

const Login = () => {
    const dispatch = useDispatch();

    const { loggedIn } = useSelector(({ user }) => user);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [warnings, setWarnings] = useState({
        username: false,
        password: false,
    });

    useEffect(() => {
        dispatch(setLoggedIn(false))
    }, [])

    useEffect(() => {
        if (username) {
            if(username.length > 2 && username.length < 51) {
                setWarnings({ ...warnings, username: false });
            } else {
                setWarnings({ ...warnings, username: true });
            }
        }
    }, [username]);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (password) {
            if(password.length > 2 && password.length < 51) {
                setWarnings({ ...warnings, password: false });
            } else {
                setWarnings({ ...warnings, password: true });
            }
        }
    }, [password]);// eslint-disable-line react-hooks/exhaustive-deps

    const checkRequiredField = () => {
        const empty = {
            username: !username.length || warnings.username,
            password: !password.length || warnings.password
       };

        setWarnings(empty);

        return !(empty.username || empty.password)
    }

    const Login = () => {
        if (checkRequiredField()) {
            dispatch(login(username, password))
        }
    }

    if (loggedIn) {
        return <Redirect to='/'/>
    }

    return (
        <div className="auth">
            <h1 className="auth__header">Authorization</h1>
            <div className="auth__inputs">
                <Input
                    title="Username/email"
                    width={400}
                    error={warnings.username}
                    setValue={setUsername}
                />
                <Input
                    title="Password"
                    width={400}
                    error={warnings.password}
                    setValue={setPassword}
                    type={'password'}
                />
            </div>
            <button type='button' className='auth__button' onClick={Login}>
                Sign In
            </button>
            <Link to='/registration' className='auth__link'>
                no account
            </Link>
        </div>
    );
};

export default Login;
