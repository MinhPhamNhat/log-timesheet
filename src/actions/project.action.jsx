import {  exceptionConstants, userConstants, projectConstants } from '../constants'
import { ProjectService } from '../services'

const { VERIFY_USER_TOKEN } = userConstants
const { CURR_PROJECT, GET_ALL } = projectConstants
const { UNAUTHENTICATED, SUCCESS } = exceptionConstants

export const getAllProjects = () => {
  return async function (dispatch) {
    const response = await ProjectService.getAll()
    const { code, data } = response
    await dispatch(checkAuthentication(code))
    if (code == SUCCESS)
    dispatch({
      type: GET_ALL,
      payload: {
        code,
        projects: data.data
      }
    })
    return response
  }
}

export const getAllProjectsFilter = (limit, page) => {
  return async function (dispatch) {
    const response = await ProjectService.getAllFilter(limit, page)
    const { code, data } = response
    await dispatch(checkAuthentication(code))
    if (code == SUCCESS)
    dispatch({
      type: GET_ALL,
      payload: {
        code,
        projects: data.data
      }
    })
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

export const editProject = (id, payload) => {
    return async function (dispatch) {
        const response = await ProjectService.editProject(id, payload)
        const { code, data } = response
        await dispatch(checkAuthentication(code))
        return response
    }
}

export const deleteProject = (id) => {
    return async function (dispatch) {
        const response = await ProjectService.deleteProject(id)
        const { code, data } = response
        await dispatch(checkAuthentication(code))
        return response
    }
}

export const getProjectById = (id) => {
    return async function (dispatch) {
        const response = await ProjectService.getProjectById(id)
        const { code, data } = response
        await dispatch(checkAuthentication(code))
        if (code === SUCCESS){
            dispatch({
                type: CURR_PROJECT,
                payload: {
                    newProject: data.data,
                    code
                }
            })
        }else{
            dispatch({
                type: CURR_PROJECT,
                payload: {
                    newProject: null,
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
