import { axiosInstance, axiosInstanceImage } from "./Instance";

export const formatData = (data: any): { label: string; value: string }[] => {
    const newData = new Map(data.map((item: any) => [item.name, item]));
    return Array.from(newData.values()).map((item: any) => ({
        label: item.name,
        value: item.name,
    }));
};

export const empresaService = {
    async getEmpresas() {
        const url = "/get-all-data";
        const response = axiosInstance.get(url);
        return (await response).data;
    },

    async getEmpresaImage( name: string ) {
        const url = `/get-images?name=${name}`;
        const response = axiosInstanceImage.get(url);
        return (await response).data;
    },
};
