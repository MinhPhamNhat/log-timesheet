import { combineReducers } from 'redux'
import user from './user'
import project from './project'
import log from "./log"
import subtask from './subtask'
import dashboard from './dashboard'
import { authConstants } from '../constants'

const { LOGOUT } = authConstants;

const appReducer = combineReducers({
  user,
  log,
  project,
  subtask,
  dashboard
})

const rootReducer = (state, action) => {
  switch (action.type) {
    case LOGOUT:
      return appReducer(undefined, action);
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
