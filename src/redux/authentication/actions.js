import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE
} from "./actionTypes";
import axios from "axios";

export const signupUserRequest = () => ({
  type: SIGNUP_USER_REQUEST
});

export const signupUserSuccess = payload => ({
  type: SIGNUP_USER_SUCCESS,
  payload
});

export const signupUserFailure = payload => ({
  type: SIGNUP_USER_FAILURE,
  error: payload
});

export const signupUserEmail = payload => {
  console.log("register")
  return dispatch => {
    dispatch(signupUserRequest());
    return axios
      .post("https://87583a193985.ngrok.io/user/register", {
        email: payload.email,
        password: payload.password,
        firstName: payload.firstName,
        lastName: payload.lastName
      })
      .then(res => {
        dispatch(signupUserSuccess(res.data));
      })
      .catch(() => dispatch(signupUserFailure()));
  };
};

export const signupUserMobile = payload => {
  return dispatch => {
    dispatch(signupUserRequest());
    return axios
      .post("/signup", {
        mobile: payload.mobile
      })
      .then(res => {
        dispatch(signupUserSuccess(res.data));
      })
      .catch(() => dispatch(signupUserFailure()));
  };
};

export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

export const loginUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload
});

export const loginUserFailure = payload => ({
  type: LOGIN_USER_FAILURE,
  error: payload
});

export const loginUserEmail = payload => {
  console.log("login")

  return dispatch => {
    dispatch(loginUserRequest());
    return axios
      .post("https://87583a193985.ngrok.iouser/login", {
        email: payload.email,
        password: payload.password
      })
      .then(res => {
        dispatch(loginUserSuccess(res.data));
      })
      .catch(() => dispatch(loginUserFailure()));
  };
};

export const loginUserMobile = payload => {
  return dispatch => {
    dispatch(loginUserRequest());
    return axios
      .post("/login", {
        mobile: payload.mobile,
        password: payload.password
      })
      .then(res => {
        dispatch(loginUserSuccess(res.data));
      })
      .catch(() => dispatch(loginUserFailure()));
  };
};

export const logoutUserRequest = payload => ({
  type: LOGOUT_USER_REQUEST,
  payload
});

export const logoutUserSuccess = payload => ({
  type: LOGOUT_USER_SUCCESS,
  payload
});

export const logoutUserFailure = payload => ({
  type: LOGOUT_USER_FAILURE,
  error: payload
});

export const sendGoogleLoginData = (payload) => (dispatch) => {
  dispatch(loginUserSuccess(payload));
};

export const logoutUser = payload => {
  return dispatch => {
    dispatch(logoutUserRequest());
    return axios
      .post(
        "/logout",
        {},
        {
          headers: {
            Authorization: payload.token
          }
        }
      )
      .then(res => {
        dispatch(logoutUserSuccess(res));
      })
      .catch(err => dispatch(logoutUserFailure(err.message)));
  };
};

