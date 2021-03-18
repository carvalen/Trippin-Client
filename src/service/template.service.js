import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:4000/api/template",
  withCredentials: true,
});

export const getTemplate = (type, days) => authApi.get(`/${type}/${days}`);


