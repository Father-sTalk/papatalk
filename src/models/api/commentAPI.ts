import { apiInstance } from "../axios/axios";

const commentAPI = {
  getCommentList: (path: ApiRequest.CommentApiTypes.GetCommentListRequest) => {
    const query = {
      sort: path.sort,
      page: path.page,
    };
    return apiInstance.get<ApiResponse.CommentApiTypes.CommentListResponse>(
      `${path.contentsType}/${path.contentsId}/comments`,
      { params: query },
    );
  },
  postComment: (path: ApiRequest.CommentApiTypes.CreateCommentRequest) => {
    return apiInstance.post(
      `${path.contentsType}/${path.contentsId}/comments`,
      { content: path.content },
    );
  },
  postCommentRecommend: (
    path: ApiRequest.CommentApiTypes.PostCommentRecommend,
  ) => {
    return apiInstance.post(
      `${path.contentsType}/${path.contentsId}/comments/${path.commentId}/like`,
    );
  },
};
export default commentAPI;
