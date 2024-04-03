import { useQuery } from "@tanstack/react-query";

import { queryKey } from "@/constants/queryKey";
import commentAPI from "@/models/api/commentAPI";

const useGetCommentList = (
  path: ApiRequest.CommentApiTypes.GetCommentListRequest,
) => {
  return useQuery({
    queryKey: [queryKey.COMMENTLIST, path],
    queryFn: () => commentAPI.getCommentList(path).then((res) => res.data),
  });
};

export default useGetCommentList;
