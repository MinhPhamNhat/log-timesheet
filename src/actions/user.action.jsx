import { authConstants, exceptionConstants, userConstants } from '../constants'
import { UserService } from '../services'

const { GET_MANAGER, GET_ALL_USER, GET_USER_BY_ID, GET_STAFF } = userConstants
const { VERIFY_USER_TOKEN } = userConstants
const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = authConstants
const { UNAUTHENTICATED, SUCCESS } = exceptionConstants

export const getManager = () => {
  return async function (dispatch) {

    const response = await UserService.getManager()
    const { code, data } = response
    if (code === SUCCESS)
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

export const getUserById = (id) => {
  return async function (dispatch) {
    const response = await UserService.getUserById(id);
    const { code, data } = response;
    if (code === SUCCESS) {
      dispatch({
        type: GET_USER_BY_ID,
        payload: {
          user: data.data,
          code: code,
        },
      });
    } else {
      dispatch({
        type: GET_USER_BY_ID,
        payload: {
          user: null,
          code: code,
        },
      });
    }
    return response;
  };
};

export const getStaff = () => {
  return async function (dispatch) {
    const response = await UserService.getStaff();
    const { code, data } = response;
    if (code === SUCCESS) {
      dispatch({
        type: GET_STAFF,
        payload: {
          staff: data.data,
          code: code,
        },
      });
    } 
    return response;
  };
};