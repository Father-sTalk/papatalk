import { apiInstance } from "../axios/axios";

const communityAPI = {
  getCommunityList: (
    query: ApiRequest.CommunityApiTypes.GetArticleListRequest,
  ) => {
    return apiInstance.get<ApiResponse.CommunityApiTypes.CommunityArticleListResponse>(
      "/community",
      { params: query },
    );
  },
  postCommunityArticle: (
    data: ApiRequest.CommunityApiTypes.CreateArticleRequest,
  ) => {
    return apiInstance.post("/community", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
export default communityAPI;
