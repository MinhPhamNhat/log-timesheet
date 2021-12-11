import { authConstants, userConstants } from "../constants";

const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = authConstants;

const { VERIFY_USER_TOKEN, GET_MANAGER, GET_ALL_USER, GET_USER_BY_ID, GET_STAFF } = userConstants;

const userAuth = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

const initialState = token
  ? { loggedIn: true, user: userAuth, code: 200, users: [] }
  : { loggedIn: false, user: null, code: 401, users: [] };

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        loggedIn: false,
        user: null,
      }
    case GET_MANAGER:
      return {
        ...state,
        code: action.payload.code,
        managers: action.payload.managers,
      }
    case GET_USER_BY_ID:
      return {
        ...state,
        code: action.payload.code,
        user: action.payload.user,
      }
    case VERIFY_USER_TOKEN:
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        user: action.payload.user,
      }
    case GET_ALL_USER:
      return {
        ...state,
        users: action.payload.users,
        code: action.payload.code,
      }
    case GET_STAFF:
      return {
        ...state,
        staff: action.payload.staff,
        code: action.payload.code,
      }
    default:
      return state
  }
}

export default user
