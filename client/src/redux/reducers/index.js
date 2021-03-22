import { combineReducers } from 'redux';

import userReducer from './user';
import profilesReducer from './profiles';
import routeUserReducer from './routeUser';
import authReducer from './auth';
import infoReducer from './info'

const rootReducer = combineReducers({
    user: userReducer,
    profiles: profilesReducer,
    routeUser: routeUserReducer,
    auth: authReducer,
    info: infoReducer,
});

export default rootReducer;
