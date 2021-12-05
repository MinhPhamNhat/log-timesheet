import { authConstants } from '../constants'

const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = authConstants

const user = JSON.parse(localStorage.getItem('user'))
const token = localStorage.getItem('token')

const initialState = token
  ? { loggedIn: true, user }
  : { loggedIn: false, user: null }

  const auth = (state = initialState, action) => {
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
      default:
        return state
    }
}

export default auth