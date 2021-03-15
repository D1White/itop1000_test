import { combineReducers } from 'redux';

import userReducer from './user';
import profilesReducer from './profiles';

const rootReducer = combineReducers({
    user: userReducer,
    profiles: profilesReducer,
});

export default rootReducer;
