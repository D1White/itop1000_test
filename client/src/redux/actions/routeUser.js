import axios from 'axios';

export const setRouteUser = (routeUser) => ({
    type: "SET_ROTE_USER",
    payload: routeUser,
});

export const setUserLoading = (isLoading) => ({
    type: "SET_ROTE_USER_LOADING",
    payload: isLoading,
});

export const fetchRouteUser = (id) => (dispatch) => {
    dispatch(setUserLoading(true));
    axios.get(`/users/${id}`, {
        headers: {
            token: localStorage.getItem('token')
        }
    }).then( user => {
        dispatch(setRouteUser(user.data.data))
    })
}

export const updateRouteUser = (id, user) => (dispatch) => {
    axios.patch(`/users/${id}` , user, {
        headers: { token: localStorage.getItem('token') }
    }).then( _ => {
        dispatch(fetchRouteUser(id));
    })
}
