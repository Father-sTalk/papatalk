import { useMutation } from "@tanstack/react-query";

import { queryKey } from "@/constants/queryKey";
import commentAPI from "@/models/api/commentAPI";
import queryController from "@/utils/query/controller_query";

const useCreateCommentMutation = () => {
  return useMutation({
    mutationFn: (data: ApiRequest.CommentApiTypes.CreateCommentRequest) =>
      commentAPI.postComment(data),
    onSuccess: () => {
      queryController.invalidateQueries(queryKey.COMMENTLIST);
    },
    onError: () => {},
  });
};

export default useCreateCommentMutation;
