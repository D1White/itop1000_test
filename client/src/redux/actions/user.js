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

export const login = (username, password) => (dispatch) => {
    dispatch(setUserLoaded(false))
    axios.post('/auth/login', {
        username: username,
        password: password,
    }).then( req => {
        if(req.data) {
            localStorage.setItem('token', req.data.token);
            dispatch(setUser(req.data))
        }
    });
}

export const fetchUser = () => (dispatch) => {
        axios.get('/users/me', {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then( user => {
            dispatch(setUser(user.data));
        })
}

export const updateUser = (id, user) => (dispatch) => {
    axios.patch(`/users/${id}` , user, {
        headers: { token: localStorage.getItem('token') }
    }).then( _ => {
        dispatch(fetchUser());
    })
}
