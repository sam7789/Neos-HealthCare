import { actionType } from "./actionType";

const init = {
  isUserLoggedIn: false,
  userData: [],
  isError: false,
  isLoading: false,
};

export const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case actionType.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        userData: payload,
        isError: false,
        isLoading: false,
      };
    case actionType.USER_LOGIN_FAILURE:
      return {
        ...state,
        isError: payload,
        isLoading: false,
      };
    case actionType.USER_LOGIN_RESET:
      return {
        ...state,
        isUserLoggedIn: false,
        userData: [],
        isError: false,
        isLoading: false,
      };
    case actionType.USER_LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.USER_LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
        userData: [],
        isError: false,
        isLoading: false,
      };
    case actionType.USER_REGISTER_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        userData: payload,
        isError: false,
        isLoading: false,
      };
    case actionType.USER_REGISTER_FAILURE:
      return {
        ...state,
        isError: payload,
        isLoading: false,
      };
    case actionType.USER_REGISTER_RESET:
      return {
        ...state,
        isUserLoggedIn: false,
        userData: [],
        isError: false,
        isLoading: false,
      };
    case actionType.USER_REGISTER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.USER_TOKEN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        userData: payload,
        isError: false,
        isLoading: false,
      };
    case actionType.USER_TOKEN_FAILURE:
      return {
        ...state,
        isError: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
