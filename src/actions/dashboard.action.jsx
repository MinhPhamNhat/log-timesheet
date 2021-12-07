import { exceptionConstants, dashboardConstants, userConstants } from '../constants'
import { DashboardService } from '../services'

const { DASHBOARD_DATA } = dashboardConstants
const { UNAUTHENTICATED, SUCCESS } = exceptionConstants
const { VERIFY_USER_TOKEN } = userConstants

export const getStatistic = () => {
  return async function (dispatch) {
    const response = await DashboardService.satistic()
    const { code, data } = response
    await dispatch(checkAuthentication(code))
    if (code === SUCCESS)
    dispatch({
        type: DASHBOARD_DATA,
        payload: {
            code,
            dashboard: data.data
        }
    })
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