import axiosInstance from '@src/app/setings/axiosConfig';

export const setNewPrompt = async (newPrompt: string) => {
  const { data } = await axiosInstance.post(`/api/set-prompt`, {
    prompt: newPrompt
  });

  return data;
};
