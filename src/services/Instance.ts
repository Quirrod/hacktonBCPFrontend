import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_API;
console.log(API_URL, "lol");
export const axiosInstance = axios.create({
    baseURL: API_URL + "/api/",
});
