import { exceptionConstants, logConstants } from "../constants";
import { LogService } from "../services";

const { GET_ALL_LOGS, CREATE_LOG, APPROVE_LOG, DISAPPROVE_LOG, DELETE_LOG } = logConstants;

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

export const approveLog = (id) => {
  return async function (dispatch) {
    const response = await LogService.approveLog(id);
    const { code, data } = response;
    if (code === SUCCESS) {
      dispatch({
        type: APPROVE_LOG,
        payload: {
          logApprove: data.data,
          code,
        },
      });
    } else {
      dispatch({
        type: APPROVE_LOG,
        payload: {
          logApprove: null,
          code,
        },
      });
    }
    return response;
  };
};

export const disapproveLog = (id) => {
  return async function (dispatch) {
    const response = await LogService.disapproveLog(id);
    const { code, data } = response;
    if (code === SUCCESS) {
      dispatch({
        type: DISAPPROVE_LOG,
        payload: {
          logApprove: data.data,
          code,
        },
      });
    } else {
      dispatch({
        type: DISAPPROVE_LOG,
        payload: {
          logApprove: null,
          code,
        },
      });
    }
    return response;
  };
};

export const deleteLog = (id) => {
  return async function (dispatch) {
    const response = await LogService.deleteLog(id);
    const { code, data } = response;
    return response;
  };
};