import { AUTH_PROCESS, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from "../constant/loginType";
import Cookies from "js-cookie";
const accessToken = Cookies.get("accessToken");
const user = Cookies.get("user");

const loginInitialState = {
  accessToken: accessToken ? JSON.parse(accessToken) : null,
  user: user ? JSON.parse(user) : [],
  loading: false,
  success: false,
  error: false,
};

export const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case AUTH_PROCESS:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case LOGIN_SUCCESS:
      const token = action.payload.token;
      const user = action.payload;
      Cookies.set("accessToken", JSON.stringify(token), { expires: 7 });
      Cookies.set("user", JSON.stringify(user), { expires: 7 });
      return {
        ...state,
        loading: false,
        success: true,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case LOGOUT_SUCCESS:
      Cookies.remove("user");
      Cookies.remove("accessToken");
      return {
        ...state,
        user: [],
        loading: false,
        success: true,
      };

    default:
      return state;
  }
};
