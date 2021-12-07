import { authConstants, exceptionConstants, userConstants } from '../constants'
import { UserService } from '../services'

const { GET_MANAGER, GET_ALL_USER } = userConstants
const { VERIFY_USER_TOKEN } = userConstants
const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = authConstants
const { UNAUTHENTICATED, SUCCESS } = exceptionConstants

export const getManager = () => {
  return async function (dispatch) {

    const response = await UserService.getManager()
    const { code, data } = response
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

export const getAllUsers = () => {
  return async function (dispatch) {
    const response = await UserService.getAllUsers();
    const { code, data } = response;
    if (code === SUCCESS) {
      dispatch({
        type: GET_ALL_USER,
        payload: {
          users: data.data,
          code: code,
        },
      });
    } else {
      dispatch({
        type: GET_ALL_USER,
        payload: {
          users: [],
          code: code,
        },
      });
    }
    return response;
  };
};