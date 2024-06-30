import { axiosInstance, axiosInstanceImage } from "./Instance";

export const formatData = (data: any): { label: string; value: string }[] => {
    const newData = new Map(data.map((item: any) => [item.name, item]));
    return Array.from(newData.values()).map((item: any) => ({
        label: item.name,
        value: item.name,
    }));
};

export const getDataEmpresa = (data: any, name: string) => {
    return data
        .filter((item: any) => item.name === name.split("~")[0])
        .sort((a: any, b: any) => {
            const dateA = Number(a.date.split("-").join(""));
            const dateB = Number(b.date.split("-").join(""));
            return dateA - dateB;
        });
};

export const empresaService = {
    async getEmpresas() {
        const url = "/get-all-data";
        const response = axiosInstance.get(url);
        return (await response).data;
    },

    async getEmpresaImage(name: string) {
        const url = `/get-images?name=${name}`;
        const response = axiosInstanceImage.get(url);
    },

    async postEmpresa(data: any) {
        const url = "/create-data";
        const response = axiosInstance.post(url, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return (await response).data;
    },
};
