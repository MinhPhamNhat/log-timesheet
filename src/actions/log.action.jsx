import { exceptionConstants, logConstants } from "../constants";
import { LogService } from "../services";

const { GET_ALL_LOGS, CREATE_LOG } = logConstants;

const { UNAUTHENTICATED, SUCCESS, CREATED } = exceptionConstants;

export const getAllLogs = () => {
  return async function (dispatch) {
    const response = await LogService.getAllLogs();
    const { code, data } = response;
    if (code === SUCCESS) {
      dispatch({
        type: GET_ALL_LOGS,
        payload: {
          logList: data.data,
          code: code,
        },
      });
    } else {
      dispatch({
        type: GET_ALL_LOGS,
        payload: {
          logList: [],
          code: code,
        },
      });
    }
    return response;
  };
};

export const createLogs = (credentials) => {
  return async function (dispatch) {
    const response = await LogService.createLogs(credentials);
    const { code, data } = response;
    if (code === CREATED) {
      dispatch({
        type: CREATE_LOG,
        payload: {
          newCreateLog: data.data,
          code: code,
        },
      });
    } else {
      dispatch({
        type: CREATE_LOG,
        payload: {
          newCreateLog: null,
          code: code,
        },
      });
    }
    return response;
  };
};