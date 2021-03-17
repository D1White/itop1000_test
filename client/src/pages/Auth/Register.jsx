import { useState, useEffect } from "react";
import { Redirect, Link } from 'react-router-dom'

import "./auth.scss";
import { Input, Checkbox } from "../../components";
import { register } from '../../redux/actions/user'

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [warnings, setWarnings] = useState({
        username: false,
        email: false,
        password: false,
    });
    const [redirect, setRedirect] = useState(false);

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
        const regexp = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;

        if (email) {
            if(email.length > 2 && email.length < 51 && regexp.test(email)) {
                setWarnings({ ...warnings, email: false });
            } else {
                setWarnings({ ...warnings, email: true });
            }
        }
    }, [email]);// eslint-disable-line react-hooks/exhaustive-deps

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
            email: false,
            password: false,
        }
        if (username.length === 0 || warnings.username) {
            empty.username = true;
        }

        if (email.length === 0 || warnings.email) {
            empty.email = true;
        }

        if (password.length === 0 || warnings.password) {
            empty.password = true;
        }

        setWarnings(empty);

        if (empty.username || empty.password || empty.email) {
            return false
        }
        return true
    }

    const Register = () => {
        if (checkRequiredField()) {
            register({
                username,
                email,
                password,
                isAdmin
            });
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Redirect to='/login'/>
    }

    return (
        <div className="auth">
            <h1 className="auth__header">Create your account</h1>
            <div className="auth__inputs">
                <Input
                    title="Username"
                    width={400}
                    error={warnings.username}
                    setValue={setUsername}
                />
                <Input
                    title="Email"
                    width={400}
                    error={warnings.email}
                    setValue={setEmail}
                />
                <Input
                    title="Password"
                    width={400}
                    error={warnings.password}
                    setValue={setPassword}
                    type={'password'}
                />
                <Checkbox
                    setChecked={setIsAdmin}
                    checked={isAdmin}
                    text='isAdmin'
                />
            </div>
            <button type='button' className='auth__button' onClick={Register}>
                Sign Up
            </button>
            <Link to='/login' className='auth__link'>
                already have an account
            </Link>
        </div>
    );
};

export default Register;
