import { apiInstance } from "../axios/axios";

const authAPI = {
  login: (data: ApiRequest.AuthApiTypes.LoginRequest) => {
    return apiInstance.post("/login", data);
  },
  register: (data: ApiRequest.AuthApiTypes.RegisterRequest) => {
    return apiInstance.post("/signup", data);
  },
  logout: () => {
    return apiInstance.post("/logout");
  },
  me: () => {
    return apiInstance.get("/me");
  },
};
export default authAPI;
