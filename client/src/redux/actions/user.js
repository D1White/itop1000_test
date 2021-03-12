import axios from 'axios';

export const setUser = (user) => ({
    type: "SET_USER",
    payload: user,
});

export const fetchUser = (username, password) => (dispatch) => {
    axios.post('http://localhost:4000/auth/login', {
        username: username,
        password: password,
    }).then( req => {
        console.log(req.data);
        // dispatch(setUser(req.data));
        if(req.data) {
            localStorage.setItem('token', req.data.token)
        }
    });
}
