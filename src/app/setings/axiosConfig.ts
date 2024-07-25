import axios, { AxiosResponse } from 'axios';

const API_URl = import.meta.env.VITE_API_URL;

// Создаем экземпляр axios
const axiosInstance = axios.create({
  baseURL: API_URl,
});

// Добавляем интерсептор запроса
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log('Получен error', error);
    return Promise.reject(error);
  }
);

// Добавляем интерсептор ответа
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
  
    return response;
  },
  (error) => {
    console.log('Получен error', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;