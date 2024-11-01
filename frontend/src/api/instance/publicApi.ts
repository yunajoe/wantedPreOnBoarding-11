//  인증 인가가 필요없는 API

import axios from "axios";

export const publicAPI = axios.create({
  baseURL: "http://localhost:8080",
});

publicAPI.defaults.headers.get["Content-Type"] = "application/json";
publicAPI.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
