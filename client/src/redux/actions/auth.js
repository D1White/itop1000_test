import axios from 'axios';
import { setUser } from './user'

export const setLogin = (loggedIn) => ({
    type: "SET_LOGIN",
    payload: loggedIn,
});

export const login = (username, password) => (dispatch) => {
    // dispatch(setLogin(false))
    axios.post('/api/auth/login', {
        username,
        password,
    }).then( req => {
        if(req.data) {
            localStorage.setItem('token', req.data.token);
            dispatch(setUser(req.data));
            dispatch(setLogin(true));
        }
    });
}
