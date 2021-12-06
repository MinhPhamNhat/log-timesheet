import { authConstants, exceptionConstants, userConstants } from '../constants'
import { ProjectService } from '../services'

const { VERIFY_USER_TOKEN } = userConstants
const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = authConstants

const { UNAUTHENTICATED, SUCCESS } = exceptionConstants

export const getAllProjects = () => {
  return async function (dispatch) {
    const response = await ProjectService.getAll()
    const { code, data } = response
    await dispatch(checkAuthentication(code))
    return response
  }
}

export const addProject = (payload) => {
    return async function (dispatch) {
      const response = await ProjectService.addProject(payload)
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