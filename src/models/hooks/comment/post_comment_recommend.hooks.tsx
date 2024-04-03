import { useMutation } from "@tanstack/react-query";

import { queryKey } from "@/constants/queryKey";
import commentAPI from "@/models/api/commentAPI";
import queryController from "@/utils/query/controller_query";

const useCommentRecommendMutation = () => {
  return useMutation({
    mutationFn: (data: ApiRequest.CommentApiTypes.PostCommentRecommend) =>
      commentAPI.postCommentRecommend(data),
    onSuccess: () => {
      queryController.invalidateQueries(queryKey.COMMENTLIST);
    },
    onError: () => {},
  });
};

export default useCommentRecommendMutation;
