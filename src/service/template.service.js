import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:4000/auth",
  withCredentials: true,
});

export const getTemplate = (getTemplate) => authApi.get("/:type/:days", getTemplate);


