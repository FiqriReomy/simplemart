import { AUTH_PROCESS, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from "../constant/loginType";
import axios from "axios";

export const login = (formData) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_PROCESS });
    const { data } = await axios.post("https://dummyjson.com/auth/login", {
      username: formData.username,
      password: formData.password,
    });
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAIL, payload: { error: error.response.data.message } });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: AUTH_PROCESS });
  dispatch({ type: LOGOUT_SUCCESS });
};
