import { apiInstance } from "../axios/axios";

const userAPI = {
  getProfile: () => {
    return apiInstance.get<ApiResponse.UsersApiTypes.ProfileResponse>(
      "/users/profile",
    );
  },
};
export default userAPI;
