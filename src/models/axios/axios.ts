import axios from "axios";

import useUserStore from "@/store/store_user";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const apiInstance = axios.create({
  baseURL,
});

// Function to get token from Zustand store
const getToken = () => {
  const { accessToken, refreshToken } = useUserStore.getState();
  return { accessToken, refreshToken };
};

//request interceptor
apiInstance.interceptors.request.use(
  (config) => {
    const { accessToken, refreshToken } = getToken();
    if (accessToken && refreshToken) {
      config.headers.Authorization = `Bearer ${accessToken}, ${refreshToken}`;
    }
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
