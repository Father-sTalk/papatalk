import { useQuery } from "@tanstack/react-query";

import { queryKey } from "@/constants/queryKey";
import userAPI from "@/models/api/userAPI";

const useGetProfile = () => {
  return useQuery({
    queryKey: [queryKey.PROFILE],
    queryFn: () => userAPI.getProfile().then((res) => res.data),
    staleTime: 0,
  });
};

export default useGetProfile;
