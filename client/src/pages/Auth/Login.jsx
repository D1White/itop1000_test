import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'

import "./auth.scss";
import { Input } from "../../components";
import { fetchUser, setUser } from '../../redux/actions/user'

const Login = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log(username, password);

    }, [username, password]);

    const Login = () => {
        dispatch(fetchUser(username, password));
    }

    return (
        <div className="login">
            <h1 className="login__header">Authorization</h1>
            <div className="login__inputs">
                <Input
                    title="Username/email"
                    width={400}
                    error={false}
                    setValue={setUsername}
                />
                <Input
                    title="Password"
                    width={400}
                    error={false}
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
