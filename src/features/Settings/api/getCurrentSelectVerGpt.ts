import axiosInstance from '@src/app/setings/axiosConfig';

export const getCurrentSelectVerGpt = async () => {
  const { data } = await axiosInstance.get(`/api/get-version-gpt`);

  return data;
};
