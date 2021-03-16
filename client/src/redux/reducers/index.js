import { combineReducers } from 'redux';

import userReducer from './user';
import profilesReducer from './profiles';
import routeUserReducer from './routeUser';

const rootReducer = combineReducers({
    user: userReducer,
    profiles: profilesReducer,
    routeUser: routeUserReducer,
});

export default rootReducer;
