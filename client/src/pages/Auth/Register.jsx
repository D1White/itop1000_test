import { useState, useEffect } from "react";
import "./auth.scss";
import { Input, Checkbox } from "../../components";

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
        if (email) {
            if(email.length > 2 && email.length < 51) {
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

    const Register = () => {
        if (username.length > 0 && password.length > 0 && email.length > 0) {
            // dispatch(login(username, password));
        } else {
            alert('⚠ Not all fields are filled in!');
        }
    }

    return (
        <div className="login">
            <h1 className="login__header">Create your account</h1>
            <div className="login__inputs">
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
            <button type='button' className='login__button' onClick={Register}>
                Sign Up
            </button>
        </div>
    );
};

export default Register;
