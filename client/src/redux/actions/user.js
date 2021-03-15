import axios from 'axios';

export const setUser = (user) => ({
    type: "SET_USER",
    payload: user,
});

export const login = (username, password) => (dispatch) => {
    axios.post('/auth/login', {
        username: username,
        password: password,
    }).then( req => {
        // dispatch(setUser(req.data));
        if(req.data) {
            localStorage.setItem('token', req.data.token)
        }
    });
}

export const fetchUser = (token) => (dispatch) => {
    axios.get('/users/me', {
        headers: { token }
    }).then( user => {
        dispatch(setUser(user.data));
    })
}
