import { instance } from ".";

// 요청 인터셉터 추가하기
instance.interceptors.request.use(
  function (config) {
    console.log("before요청전", config);
    return config;
  },
  function (error) {
    console.log("요청 오류가 있으면?");
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
instance.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);
