import { authConstants, userConstants } from '../constants'
const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = authConstants
const { GET_MANAGER } = userConstants
const userAuth = JSON.parse(localStorage.getItem('user'))
const token = localStorage.getItem('token')

const initialState = token
  ? { loggedIn: true, user: userAuth }
  : { loggedIn: false, user: null }

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        user: null,
      }
    case LOGOUT:
      return {
        loggedIn: false,
        user: null,
      }
    case GET_MANAGER:
      return {
        ...state,
        code: action.payload.code,
        managers: action.payload.managers,
      }
    default:
      return state
  }
}

export default user