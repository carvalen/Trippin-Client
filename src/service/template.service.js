import axios from "axios";

const authApi = axios.create({
  baseURL: `${process.env.REACT_APP_API}/api/template`,
  withCredentials: true,
});

export const getTemplate = (type, days) => authApi.get(`/${type}/${days}`);


