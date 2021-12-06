import {  exceptionConstants, userConstants, subtaskConstants } from '../constants'
import { SubtaskService } from '../services'

const { VERIFY_USER_TOKEN } = userConstants
const { GET_ALL_SUBTASK, GET_SUBTASK_BY_ID  } = subtaskConstants
const { UNAUTHENTICATED, SUCCESS } = exceptionConstants

export const getAllSubtask = () => {
  return async function (dispatch) {
    const response = await SubtaskService.getAll()
    const { code, data } = response
    await dispatch(checkAuthentication(code))
    if (code == SUCCESS)
    dispatch({
      type: GET_ALL_SUBTASK,
      payload: {
        code,
        subtasks: data.data
      }
    })
    return response
  }
}

export const addSubtask = (payload) => {
    return async function (dispatch) {
      const response = await SubtaskService.addSubtask(payload)
      const { code, data } = response
      await dispatch(checkAuthentication(code))
      return response
    }
}

export const editSubtask = (id, payload) => {
    return async function (dispatch) {
        const response = await SubtaskService.editSubtask(id, payload)
        const { code, data } = response
        await dispatch(checkAuthentication(code))
        return response
    }
}

export const deleteSubtask = (id) => {
    return async function (dispatch) {
        const response = await SubtaskService.deleteSubtask(id)
        const { code, data } = response
        await dispatch(checkAuthentication(code))
        return response
    }
}

export const getSubtaskById = (id) => {
    return async function (dispatch) {
        const response = await SubtaskService.getSubtaskById(id)
        const { code, data } = response
        await dispatch(checkAuthentication(code))
        if (code === SUCCESS){
            dispatch({
                type: GET_SUBTASK_BY_ID,
                payload: {
                    subtask: data.data,
                    code
                }
            })
        }else{
            dispatch({
                type: GET_SUBTASK_BY_ID,
                payload: {
                    subtask: null,
                    code
                }
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