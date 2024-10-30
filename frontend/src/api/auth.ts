import { instance } from ".";

type SignUpProps = {
  email: string;
  password: string;
};
type SignInProps = {
  email: string;
  password: string;
};

type VerifyResponseType = {
  message: string;
  result: string;
};
export const signUp = async ({ email, password }: SignUpProps) => {
  console.log("사인업API를 호출하였습니다");
  const response = await instance.post("/users/create", {
    email,
    password,
  });
  return response;
};

export const signIn = async ({ email, password }: SignInProps) => {
  console.log("로그인API를 호출하였습닏나");
  const response = await instance.post("/users/login", {
    email,
    password,
  });

  return response;
};

// export const verifyAccesToken = async (token: string) => {
//   const response = await instance.post("/users/token/verify", {
//     token,
//   });
//   return response;
// };
