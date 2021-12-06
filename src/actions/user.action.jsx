import { authConstants, exceptionConstants, userConstants } from '../constants'
import { UserService } from '../services'

const { GET_MANAGER } = userConstants
const { VERIFY_USER_TOKEN } = userConstants
const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = authConstants
const { UNAUTHENTICATED, SUCCESS } = exceptionConstants

export const getManager = () => {
  return async function (dispatch) {

    const response = await UserService.getManager()
    const { code, data } = response
    await dispatch(checkAuthentication(code))
    if (code === 200)
    dispatch({
        type: GET_MANAGER,
        payload: {
            code,
            managers: data.data
        }
    })
    return response
  }
}