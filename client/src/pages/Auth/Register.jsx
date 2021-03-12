import { useState, useEffect } from "react";
import "./auth.scss";
import { Input, Checkbox } from "../../components";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        console.log(username);
    }, [username]);

    return (
        <div className="login">
            <h1 className="login__header">Create your account</h1>
            <div className="login__inputs">
                <Input
                    title="Username"
                    width={400}
                    error={false}
                    setValue={setUsername}
                />
                <Input
                    title="Email"
                    width={400}
                    error={false}
                    setValue={setEmail}
                />
                <Input
                    title="Password"
                    width={400}
                    error={false}
                    setValue={setPassword}
                    type={'password'}
                />
                <Checkbox
                    setChecked={setIsAdmin}
                    checked={isAdmin}
                    text='isAdmin'
                />
            </div>
            <button type='button' className='login__button'>
                Sign Up
            </button>
        </div>
    );
};

export default Register;
