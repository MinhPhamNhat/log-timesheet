import { combineReducers } from 'redux'
import user from './user'
import { authConstants } from '../constants'

const { LOGOUT } = authConstants

const appReducer = combineReducers({
  user,
})

const rootReducer = (state, action) => {
  switch (action.type) {
    case LOGOUT:
      return appReducer(undefined, action)
    default:
      return appReducer(state, action)
  }
}

export default rootReducer