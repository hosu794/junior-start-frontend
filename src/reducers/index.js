import { combineReducers } from 'redux'
import { authentication } from './authentication.reducer'
import { alert } from './alert.reducer'
import { user } from './user.reducer'
import { registering } from './registration.reducer'
import { oauth2 } from './oauth2.reducers'

const rootReducer = combineReducers({
    authentication,
    alert,
    user,
    registering,
    oauth2
});

export default rootReducer;