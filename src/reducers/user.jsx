import { authConstants, userConstants } from "../constants";

const { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = authConstants;

const { VERIFY_USER_TOKEN } = userConstants;

const userAuth = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

const initialState = token
  ? { loggedIn: true, user: userAuth }
  : { loggedIn: false, user: null };

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
      };
    case VERIFY_USER_TOKEN:
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default user;
