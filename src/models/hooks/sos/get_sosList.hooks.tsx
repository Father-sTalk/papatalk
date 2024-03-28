import { useQuery } from "@tanstack/react-query";

import { queryKey } from "@/constants/queryKey";
import sosAPI from "@/models/api/sosAPI";

const useGetSosList = (query: ApiRequest.SosApiTypes.SosArticleListRequest) => {
  return useQuery({
    queryKey: [queryKey.SOS_LIST, query],
    queryFn: () => sosAPI.getSosList(query).then((res) => res.data),
  });
};

export default useGetSosList;
