import axios from 'axios';

export const setProfiles = (profiles) => ({
    type: "SET_PROFILES",
    payload: profiles,
});

export const setProfilesLoading = (isLoading) => ({
    type: "SET_PROFILES_LOADING",
    payload: isLoading,
});

export const fetchProfiles = () => (dispatch) => {
    dispatch(setProfilesLoading(true));

    axios.get('/profiles', {
        headers: {
            token: localStorage.getItem('token')
        }
    }).then( profiles => {
        dispatch(setProfiles(profiles.data.data));
    })
}

export const deleteProfile = (id) => (dispatch) => {
    axios.delete(`/profiles/${id}`, {
        headers: {
            token: localStorage.getItem('token')
        }
    }).then( _ => {
        dispatch(fetchProfiles());
    });
}

export const updateProfile = (id, profile) => (dispatch) => {
    axios.patch(`/profiles/${id}`, profile, {
        headers: {
            token: localStorage.getItem('token')
        }
    }).then( _ => {
        dispatch(fetchProfiles());
    });
}
