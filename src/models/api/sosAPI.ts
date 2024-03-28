import { apiInstance } from "../axios/axios";

const sosAPI = {
  getSosList: (query: ApiRequest.SosApiTypes.SosArticleListRequest) => {
    return apiInstance.get<ApiResponse.SosApiTypes.SosArticleListResponse>(
      "/sos",
      {
        params: query,
      },
    );
  },
};
export default sosAPI;
