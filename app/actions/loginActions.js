import { INIT_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_LOADING } from "./types";

export const initLogin = () => {
  return { type: INIT_LOGIN };
};

const loginFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_FAIL,
    payload: error
  });
};

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });
};
