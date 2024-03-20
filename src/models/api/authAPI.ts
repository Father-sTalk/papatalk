import { apiInstance } from "../axios/axios";

const authAPI = {
  login: (data: ApiRequest.AuthApiTypes.LoginRequest) => {
    return apiInstance.post<ApiResponse.AuthApiTypes.LoginResponse>(
      "/auth/login",
      data,
    );
  },
  register: (data: ApiRequest.AuthApiTypes.RegisterRequest) => {
    return apiInstance.post<ApiResponse.AuthApiTypes.RegisterResponse>(
      "/auth/signup",
      data,
    );
  },
  duplicationCheck: (
    query: ApiRequest.AuthApiTypes.DuplicationCheckRequest,
  ) => {
    return apiInstance.get("/auth/duplication-check", { params: query });
  },
  refreshToken: () => {
    return apiInstance.get<ApiResponse.AuthApiTypes.RefreshTokenResponse>(
      "/auth/refresh",
    );
  },
};
export default authAPI;
