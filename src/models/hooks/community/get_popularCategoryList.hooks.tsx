import { useQuery } from "@tanstack/react-query";

import { queryKey } from "@/constants/queryKey";
import communityAPI from "@/models/api/communityAPI";

const useGetPopularCommunityList = (
  query: ApiRequest.CommunityApiTypes.GetPopularCommunityListRequest,
) => {
  return useQuery({
    queryKey: [queryKey.POPULAR_CATEGORY_LIST, query],
    queryFn: () =>
      communityAPI.getPopularCommunityList(query).then((res) => res.data),
  });
};

export default useGetPopularCommunityList;
