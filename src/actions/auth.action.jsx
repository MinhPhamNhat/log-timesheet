import { authConstants, exceptionConstants } from '../constants'
import { AuthService } from '../services'

const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = authConstants

const { CHANGE_PASSWORD_FIRST_TIME, VERIFY_USER_TOKEN } = userConstants
const { UNAUTHENTICATED, SUCCESS } = exceptionConstants

export const login = (credentials) => {
  return async function (dispatch) {
    const response = await AuthService.login(credentials)
    const { code, data } = response
    await dispatch(checkAuthentication(code))
    if (code === SUCCESS && data.user && data.access_token) {
      localStorage.setItem('token', data.access_token)
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