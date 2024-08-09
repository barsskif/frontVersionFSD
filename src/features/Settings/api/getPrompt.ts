import axiosInstance from '@src/app/setings/axiosConfig';

export const getPrompt = async () => {
  const { data } = await axiosInstance.get(`/api/get-prompt`);

  return data;
};
