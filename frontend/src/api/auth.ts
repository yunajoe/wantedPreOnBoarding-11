import { AUTH } from ".";
import { privateAPI } from "./instance/privateApi";

type SIGNUP = {
  email: string;
  password: string;
};

type SIGNIN = {
  email: string;
  password: string;
};
export const authApi = {
  authSignup({ email, password }: SIGNUP) {
    return privateAPI.post(AUTH.SIGNUP, {
      email,
      password,
    });
  },
  authLogin({ email, password }: SIGNIN) {
    return privateAPI.post(AUTH.SIGNIN, {
      email,
      password,
    });
  },
};
