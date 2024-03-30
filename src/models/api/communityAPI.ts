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
  getPopularCommunityList: (
    query: ApiRequest.CommunityApiTypes.GetPopularCommunityListRequest,
  ) => {
    return apiInstance.get<ApiResponse.CommunityApiTypes.PopularCommunityArticleListResponse>(
      "/community/populars",
      { params: query },
    );
  },
  getCommunityArticle: (
    path: ApiRequest.CommunityApiTypes.GetArticleRequest,
  ) => {
    return apiInstance.get<ApiResponse.CommunityApiTypes.CommunityArticleResponse>(
      `/community/${path.id}`,
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
