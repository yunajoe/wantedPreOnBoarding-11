// localStorage

// 토큰이 유효한지 check

//
export const validToken = (token: string) => {
  console.log("split", token.split(".")[1]);

  //   const payload = JSON.parse(atob(token.split(".")[1])); // payload 디코드
  return token;
};
