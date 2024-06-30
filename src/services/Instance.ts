import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_API;

export const axiosInstance = axios.create({
    baseURL: API_URL,
});
