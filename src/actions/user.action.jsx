import { authConstants, exceptionConstants, userConstants } from '../constants'
import { UserService } from '../services'

const { MANAGER_GOT } = userConstants
const { VERIFY_USER_TOKEN } = userConstants
const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = authConstants
const { UNAUTHENTICATED, SUCCESS } = exceptionConstants

export const getManager = () => {
  return async function (dispatch) {

    const response = await UserService.getManager()
    const { code, data } = response
    await dispatch(checkAuthentication(code))
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