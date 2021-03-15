import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import "./auth.scss";
import { Input } from "../../components";
import { login } from '../../redux/actions/user'

const Login = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [warnings, setWarnings] = useState({
        username: false,
        password: false,
    });
    const [redirect, setRedirect] = useState(false)

    const { user } = useSelector(({ user }) => user);

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

    const Login = () => {
        if (username.length > 0 && password.length > 0) {
            dispatch(login(username, password));
            setRedirect(true);
        } else {
            alert('⚠ Not all fields are filled in!');
        }
    }

    return (
        <div className="login">
            { redirect && user && <Redirect to='/' />}
            <h1 className="login__header">Authorization</h1>
            <div className="login__inputs">
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
            <button type='button' className='login__button' onClick={Login}>
                Sign In
            </button>
        </div>
    );
};

export default Login;
