//  인증 인가가 필요없는 API

import axios from "axios";

// // 인증/인가를 위해 API 요청마다 headers에 조작이 필요없느 Instance(private Instance)
export const publicAPI = axios.create({
  baseURL: "http://localhost:8080",
});
