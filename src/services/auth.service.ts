import axios from "axios";
import { Console } from "console";

const API_URL = "https://localhost:7014/api/Authenticate/";

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Header": true,
};

export const register = (username: string, password: string, firstName: string, lastName: string, email: string) => {
  return axios.post(API_URL + "register", {
    username,
    password,
    firstName,
    lastName,
    email,
  },headers,)
  .then((response) => {
    return response;
  });
};

export const login = (username: string, password: string) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    },headers,)
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));

      return response;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  let test: any = localStorage.getItem("user")
  const userStr: any = JSON.parse(test);

  return userStr;
};