import axiosInstance from '@src/app/setings/axiosConfig';

export const setNewPrompt = async (newPromt: string) => {
  const { data } = await axiosInstance.post(`/api/set-prompt`, {
    prompt: newPromt
  });

  return data;
};
