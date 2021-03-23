import axios from 'axios'

export const setUsers = (users) => ({
  type: 'SET_USERS',
  payload: users,
})

export const setStatistic = (statistic) => ({
  type: 'SET_STATISTIC',
  payload: statistic,
})

export const fetchUsers = () => (dispatch) => {
  axios.get('/users').then((users) => {
    dispatch(setUsers(users.data.data))
  })
}

export const fetchStatistic = () => (dispatch) => {
  axios.get('/profiles/statistic').then((statistic) => {
    dispatch(setStatistic(statistic.data))
  })
}
