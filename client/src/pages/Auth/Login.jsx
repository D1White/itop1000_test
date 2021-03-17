import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'

import "./auth.scss";
import { Input } from "../../components";
import { setUser } from '../../redux/actions/user'

const Login = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [warnings, setWarnings] = useState({
        username: false,
        password: false,
    });
    const [redirect, setRedirect] = useState(false)

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
        let empty = {
            username: false,
            password: false,
        }
        if (username.length === 0 || warnings.username) {
            empty.username = true;
        }

        if (password.length === 0 || warnings.password) {
            empty.password = true;
        }

        setWarnings(empty);

        if (empty.username || empty.password) {
            return false
        }
        return true
    }

    const Login = () => {
        if (checkRequiredField()) {
            axios.post('/api/auth/login', {
                username,
                password,
            }).then( req => {
                if(req.data) {
                    localStorage.setItem('token', req.data.token);
                    dispatch(setUser(req.data));
                    setRedirect(true);
                }
            });
        }
    }

    if (redirect) {
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
