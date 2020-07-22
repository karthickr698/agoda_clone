import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE
  } from "./actionTypes";
  import axios from "axios";
  
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
    return dispatch => {
      dispatch(loginUserRequest());
      return axios
        .post("/login", {
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