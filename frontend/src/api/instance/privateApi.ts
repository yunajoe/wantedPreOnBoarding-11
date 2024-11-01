//  인증 인가가 필요한 API
// 인증/인가를 위해 API 요청마다 headers에 조작이 필요한 Instance(private Instance)

import axios from "axios";
import { validToken } from "../../utils/auth";

export const privateAPI = axios.create({
  baseURL: "http://localhost:8080",
});

privateAPI.defaults.headers.get["Content-Type"] = "application/json";
privateAPI.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

// 인터셉터
privateAPI.interceptors.request.use(
  function (config) {
    // 요청 전에는 ㅁaccessToken을 가져와서 유효성 검사를 한다?
    const accessToken = localStorage.getItem("accessToken");

    // accessToken이 있는 경우 유효성 검사
    if (accessToken) {
      // token이 유효한가여?
      if (validToken(accessToken)) {
        // window.location.href = "/";
      } else {
        alert("토큰이 유효하지 않습니다. 다시 로그인해주세요");
        window.location.href = "/auth/login";
      }
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기

privateAPI.interceptors.response.use(
  async function (response) {
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

    if (statusCode <= 410) {
      alert(error.response.data.details);
      return error.response.data;
    }

    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);
