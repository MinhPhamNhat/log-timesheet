import { authConstants, exceptionConstants, userConstants } from '../constants'
import { UserService } from '../services'

const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = authConstants
const { VERIFY_USER_TOKEN } = userConstants

const { UNAUTHENTICATED, SUCCESS } = exceptionConstants

export const login = (credentials) => {
  return async function (dispatch) {
    const response = await UserService.login(credentials)
    const { code, data } = response
    await dispatch(checkAuthentication(code))
    if (code === SUCCESS && data.user && data.token) {
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user: response.data.user,
        },
      })
    } else if (code === UNAUTHENTICATED) {
      dispatch({
        type: LOGIN_FAILURE,
      })
    }
    return response
  }
}

export const checkAuthentication = (code) => {
  return function (dispatch) {
    if (code === UNAUTHENTICATED) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      dispatch({
        type: VERIFY_USER_TOKEN,
        payload: {
          loggedIn: false,
          user: null,
        },
      })
    }
  }
}