import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_API;
const API_IMAGE_URL = import.meta.env.VITE_BACKEND_API_IMAGE;
console.log(API_URL, "lol");
export const axiosInstance = axios.create({
    baseURL: API_URL + "/api/",
});

export const axiosInstanceImage = axios.create({
    baseURL: API_IMAGE_URL + "/api/",
});
