import { apiInstance } from "../axios/axios";

const communityAPI = {
  getCommunityList: (
    query: ApiRequest.CommunityApiTypes.CommunityArticleListRequest,
  ) => {
    return apiInstance.get<ApiResponse.CommunityApiTypes.CommunityArticleListResponse>(
      "/community",
      { params: query },
    );
  },
};
export default communityAPI;
