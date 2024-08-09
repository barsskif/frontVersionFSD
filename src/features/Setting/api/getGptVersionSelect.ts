import axiosInstance from "@src/app/setings/axiosConfig";

export const getGptVersionSelect = async () => {
    const { data } = await axiosInstance.get(`/api/settings`);
  
    return data;
  };
  