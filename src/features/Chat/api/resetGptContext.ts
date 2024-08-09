import axiosInstance from "@src/app/setings/axiosConfig";

export const resetContextGPT = async () => {
    const { data } = await axiosInstance.get(`/api/reset-context`);
  
    return data;
  };