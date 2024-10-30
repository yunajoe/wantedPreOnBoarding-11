//  인증 인가가 필요한 API
// 인증/인가를 위해 API 요청마다 headers에 조작이 필요한 Instance(private Instance)

import axios from "axios";

export const privateAPI = axios.create({
  baseURL: "http://localhost:8080",
});
