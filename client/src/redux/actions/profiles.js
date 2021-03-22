import axios from 'axios';

export const setProfiles = (profiles) => ({
    type: "SET_PROFILES",
    payload: profiles,
});

export const setProfilesLoading = (isLoading) => ({
    type: "SET_PROFILES_LOADING",
    payload: isLoading,
});

export const fetchProfiles = (user_id) => (dispatch) => {
    dispatch(setProfilesLoading(true));

    axios.get(`/profiles/${user_id}`).then( profiles => {
        dispatch(setProfiles(profiles.data.data));
    })
}

export const deleteProfile = (id, user_id) => (dispatch) => {
    axios.delete(`/profiles/${id}`).then( _ => {
        dispatch(fetchProfiles(user_id));
    });
}

export const updateProfile = (id, profile, userId) => (dispatch) => {
    axios.patch(`/profiles/${id}`).then( _ => {
        dispatch(fetchProfiles(userId));
    });
}

export const createProfile = (profile, userId) => (dispatch) => {
    axios.post(`/profiles`, profile).then( _ => {
        dispatch(fetchProfiles(userId));
    });
}
