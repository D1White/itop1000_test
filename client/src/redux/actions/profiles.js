import axios from 'axios'

export const setProfiles = (profiles) => ({
  type: 'SET_PROFILES',
  payload: profiles,
})

export const setProfilesLoading = (isLoading) => ({
  type: 'SET_PROFILES_LOADING',
  payload: isLoading,
})

export const fetchProfiles = (userId) => (dispatch) => {
  dispatch(setProfilesLoading(true))

  axios.get(`/profiles/${userId}`).then((profiles) => {
    dispatch(setProfiles(profiles.data.data))
  })
}

export const deleteProfile = (id, userId) => (dispatch) => {
  axios.delete(`/profiles/${id}`).then(() => {
    dispatch(fetchProfiles(userId))
  })
}

export const updateProfile = (id, profile, userId) => (dispatch) => {
  axios.patch(`/profiles/${id}`).then(() => {
    dispatch(fetchProfiles(userId))
  })
}

export const createProfile = (profile, userId) => (dispatch) => {
  axios.post('/profiles', profile).then(() => {
    dispatch(fetchProfiles(userId))
  })
}
