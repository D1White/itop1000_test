import axios from 'axios';

export const setUser = (user) => ({
    type: "SET_USER",
    payload: user,
});

export const setUserLoaded = (isLoaded) => ({
    type: "SET_USER_LOADED",
    payload: isLoaded,
});

export const setRouteUser = (routeUser) => ({
    type: "SET_ROTE_USER",
    payload: routeUser,
});

// export const login = (username, password) => (dispatch) => {
//     dispatch(setUserLoaded(false))
//     axios.post('/api/auth/login', {
//         username: username,
//         password: password,
//     }).then( req => {
//         if(req.data) {
//             localStorage.setItem('token', req.data.token);
//             dispatch(setUser(req.data))
//         }
//     });
// }

export const fetchUser = () => (dispatch) => {
        axios.get('/api/users/me', {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then( user => {
            dispatch(setUser(user.data));
        })
}

export const updateUser = (id, user) => (dispatch) => {
    axios.patch(`/api/users/${id}` , user, {
        headers: { token: localStorage.getItem('token') }
    }).then( _ => {
        dispatch(fetchUser());
    })
}

export const deleteUser = (user_id) => {
    axios.delete(`/api/users/${user_id}`, {
        headers: { token: localStorage.getItem('token') }
    });
}


export const register = (user) => {
    axios.post('/api/auth/register', user).then( req => {
    });
}
