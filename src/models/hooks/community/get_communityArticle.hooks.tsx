import { useQuery } from "@tanstack/react-query";

import { queryKey } from "@/constants/queryKey";
import communityAPI from "@/models/api/communityAPI";

const useGetCommunityArticle = (
  path: ApiRequest.CommunityApiTypes.GetArticleRequest,
) => {
  return useQuery({
    queryKey: [queryKey.CATEGORY_ARTICLE, path],
    queryFn: () =>
      communityAPI.getCommunityArticle(path).then((res) => res.data),
  });
};

export default useGetCommunityArticle;
