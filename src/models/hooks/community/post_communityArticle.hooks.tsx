import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { queryKey } from "@/constants/queryKey";
import communityAPI from "@/models/api/communityAPI";
import queryController from "@/utils/query/controller_query";

const useCommunityArticleMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: ApiRequest.CommunityApiTypes.CreateArticleRequest) =>
      communityAPI.postCommunityArticle(data),
    onSuccess: () => {
      queryController.invalidateQueries(queryKey.COMMUNITY_LIST);
      router.back();
    },
    onError: () => {},
  });
};

export default useCommunityArticleMutation;
