import { dashboardConstants } from '../constants'

const { DASHBOARD_DATA  } = dashboardConstants

const initialState = { dashboard: null, code: null }

  const dashboard = (state = initialState, action) => {
    switch (action.type) {
      case DASHBOARD_DATA:
        return {
          ...state,
          dashboard: action.payload.dashboard,
          code: action.payload.code
        }
      default:
        return state
    }
}

export default dashboard