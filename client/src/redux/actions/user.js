import axios from 'axios';

export const setUser = (user) => ({
    type: "SET_USER",
    payload: user,
});

export const login = (username, password) => (dispatch) => {
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

export const fetchUser = (token) => (dispatch) => {
    axios.get('http://localhost:4000/users/me', {
        headers: { token }
    }).then( user => {
        console.log(user.data);
        dispatch(setUser(user.data));
    })
}
