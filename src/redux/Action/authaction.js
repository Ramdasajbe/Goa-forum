import { BASE_URL } from "../../utils/urls";

import { LOGIN_SUCCESS, LOGOUT } from "../constant/authconstant";

export const loginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

export const loginSuccess = (data) => {
  console.warn("data123344", data);
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailure = (error) => {
  return {
    type: "LOGIN_FAILURE",
    payload: error,
  };
};

export const sendOtpSuccess = (data) => {
  return {
    type: "SEND_OTP_SUCCESS",
    payload: data,
  };
};

export const sendOtpFailure = (error) => {
  return {
    type: "SEND_OTP_FAILURE",
    payload: error,
  };
};
export const verifySuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const verifyFailure = (error) => {
  return {
    type: "VERIFY_OTP_FAILURE",
    payload: error,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
export function login(data, dispatch) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  let urlencoded = new URLSearchParams();
  urlencoded.append("mobile", data.mobile);
  urlencoded.append("password", data.password);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };
  return fetch(BASE_URL + "/users/login", requestOptions)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.user) {
        dispatch(loginSuccess(response.user));
      }
      return response;
    })
    .catch((error) => {
      const errorMessage = error.response;
      dispatch(loginFailure(errorMessage));
    });
}
export function userLogout() {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
}
