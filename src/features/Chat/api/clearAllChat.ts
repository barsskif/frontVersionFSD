import axiosInstance from '@src/app/setings/axiosConfig';
import { resetContextGPT } from '@src/features/Chat/api/resetGptContext';

export const clearAllChat = async () => {
  try {
    const { data } = await axiosInstance.delete(`/api/delete-all-chat`);
    if (data.delete === true) {
      const { massage: statusMessageContext } = await resetContextGPT();
      
      if (statusMessageContext === 'succes') {
        return "succes";
      }
    }

  } catch (error) {
    console.error('Error clearing chat:', error);
    return 'error';
  }
};