// // https://axios-http.com/docs/config_defaults

import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8080",
});
