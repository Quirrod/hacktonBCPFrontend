import { axiosInstance } from "./Instance";

export const formatData = (data: any) => {
    return data.map((item: any) => {
        return {
            value: item.id,
            label: item.name,
        };
    });
};

export const empresaService = {
    async getEmpresas() {
        const url = "/get-all-data";
        const response = axiosInstance.get(url);
        return (await response).data;
    },
};
