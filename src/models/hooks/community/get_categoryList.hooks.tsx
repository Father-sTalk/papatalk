import { useQuery } from "@tanstack/react-query";

import { queryKey } from "@/constants/queryKey";
import communityAPI from "@/models/api/communityAPI";

const useGetCommunityList = (
  query: ApiRequest.CommunityApiTypes.CommunityArticleListRequest,
) => {
  return useQuery({
    queryKey: [queryKey.CATEGORY_LIST, query],
    queryFn: () => communityAPI.getCommunityList(query).then((res) => res.data),
  });
};

export default useGetCommunityList;
