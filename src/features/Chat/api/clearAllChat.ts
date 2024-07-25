import axiosInstance from '@src/app/setings/axiosConfig';

export const clearAllChat =  async () => {
    const data = await axiosInstance.delete(`/api/delete-all-chat`);
    
    return data
}