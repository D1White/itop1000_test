import axios from 'axios';

export const setUsers = (users) => ({
    type: "SET_USERS",
    payload: users,
});

export const setStatistic = (statistic) => ({
    type: "SET_STATISTIC",
    payload: statistic,
});


export const fetchUsers = () => (dispatch) => {
    axios.get('/api/users', {
        headers: {
            token: localStorage.getItem('token')
        }
    }).then( users => {
        dispatch(setUsers(users.data.data));
    });
}

export const fetchStatistic = () => (dispatch) => {
    axios.get('/api/profiles/statistic', {
        headers: {
            token: localStorage.getItem('token')
        }
    }).then( statistic => {
        dispatch(setStatistic(statistic.data));
    })
}
