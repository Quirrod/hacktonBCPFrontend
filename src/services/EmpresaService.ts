import { axiosInstance } from "./Instance";

export const empresaService = {
    async getEmpresas() {
        const url = "get-all-data";
        const response = axiosInstance.get(url);
        console.log(response);
        return (await response).data;
    },
};
