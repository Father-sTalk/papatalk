import { useMutation } from "@tanstack/react-query";

import communityAPI from "@/models/api/communityAPI";

const useCommunityArticleMutation = () => {
  return useMutation({
    mutationFn: (data: ApiRequest.CommunityApiTypes.CreateArticleRequest) =>
      communityAPI.postCommunityArticle(data).then((res) => res.data),
    // onSuccess: (data) => {},
    onError: () => {},
  });
};

export default useCommunityArticleMutation;
