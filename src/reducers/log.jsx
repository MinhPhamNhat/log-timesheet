import { logConstants } from "../constants";

const { GET_ALL_LOGS, CREATE_LOG } = logConstants;

const initialState = {
  logList: [],
  newCreateLog: null,
  code: null,
};

const log = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LOGS:
      return {
        ...state,
        logList: action.payload.logList,
        code: action.payload.code,
      };
    case CREATE_LOG:
      return {
        ...state,
        newCreateLog: action.payload.newCreateLog,
        code: action.payload.code,
      };
    default:
      return state;
  }
};

export default log;
