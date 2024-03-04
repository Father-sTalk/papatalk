import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const apiInstance = axios.create({
  baseURL,
});

//request interceptor
apiInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
//response interceptor
apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
