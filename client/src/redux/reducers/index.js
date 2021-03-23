import { combineReducers } from 'redux'

import userReducer from './user'
import profilesReducer from './profiles'
import routeUserReducer from './routeUser'
import infoReducer from './info'

const rootReducer = combineReducers({
  user: userReducer,
  profiles: profilesReducer,
  routeUser: routeUserReducer,
  info: infoReducer,
})

export default rootReducer
