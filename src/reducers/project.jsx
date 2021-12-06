import { projectConstants } from '../constants'

const { CURR_PROJECT } = projectConstants

const initialState = { newProject: null, code: null }

  const project = (state = initialState, action) => {
    switch (action.type) {
      case CURR_PROJECT:
        return {
          ...state,
          project: action.payload.newProject,
          code: action.payload.code
        }
      default:
        return state
    }
}

export default project