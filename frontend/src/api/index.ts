import axios from "axios";
import { validToken } from "../utils/auth";

export const instance = axios.create({
  baseURL: "http://localhost:8080",
});

// 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
// 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
// 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요
// 요청 인터셉터 추가하기
// https://leeseong010.tistory.com/133
// https://velog.io/@xmun74/axios-interceptors-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

instance.defaults.headers.get["Content-Type"] = "application/json";
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

// 인터셉터
instance.interceptors.request.use(
  function (config) {
    // 요청 전에는 ㅁaccessToken을 가져와서 유효성 검사를 한다?
    const accessToken = localStorage.getItem("accessToken");
    console.log("나는야 인터셉터 request");

    // accessToken이 있는 경우 유효성 검사
    if (accessToken) {
      // token이 유효한가여?
      if (validToken(accessToken)) {
        window.location.href = "/";
      } else {
        alert("토큰이 유효하지 않습니다. 다시 로그인해주세요");
        window.location.href = "/auth/login";
      }
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    console.log("요청 오류가 있으면?");
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기

instance.interceptors.response.use(
  async function (response) {
    console.log("response", response);
    const { token, message } = response.data;
    if (token) {
      localStorage.setItem("accessToken", token);
      alert(message);
      window.location.href = "/";
    }

    return response.data;
  },
  function (error) {
    const statusCode = error.status;
    console.log("error", error);
    if (statusCode <= 410) {
      alert(error.response.data.details);
      return error.response.data;
    }

    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);
