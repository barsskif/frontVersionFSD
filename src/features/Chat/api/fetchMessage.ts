import axiosInstance from '@src/app/setings/axiosConfig';

export const fetchMessage =  async (queryParams?: string) => {
    const { data } = await axiosInstance.get(`/api/messages?size_return_el=-20`, {
        params: queryParams,
      });
    
    return data
}