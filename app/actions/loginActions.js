import { INIT_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";

export const initLogin = () => {
  return { type: INIT_LOGIN };
};
