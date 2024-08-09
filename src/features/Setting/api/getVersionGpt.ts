import axiosInstance from "@src/app/setings/axiosConfig";

export const getVersionGpt = async () => {
    const { data } = await axiosInstance.get(`/api/get-version-gpt`);
  
    return data;
  };
  