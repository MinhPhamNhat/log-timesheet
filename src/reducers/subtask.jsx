import { subtaskConstants } from '../constants'

const { GET_ALL_SUBTASK, GET_SUBTASK_BY_ID } = subtaskConstants

const initialState = { subtask: null, code: null, subtasks: [] }

  const subtask = (state = initialState, action) => {
    switch (action.type) {
      case GET_SUBTASK_BY_ID:
        return {
          ...state,
          subtask: action.payload.subtask,
          code: action.payload.code
        }
      case GET_ALL_SUBTASK:
        return {
          ...state,
          subtasks: action.payload.subtasks,
          code: action.payload.code
        }
      default:
        return state
    }
}

export default subtask