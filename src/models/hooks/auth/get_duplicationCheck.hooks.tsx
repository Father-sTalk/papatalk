import { useMutation } from "@tanstack/react-query";

import authAPI from "@/models/api/authAPI";

const useGetDuplicationCheck = (
  query: ApiRequest.AuthApiTypes.DuplicationCheckRequest,
  onCheckResult: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  return useMutation({
    mutationFn: () => authAPI.duplicationCheck(query).then((res) => res.data),
    onSuccess: () => {
      onCheckResult(true);
    },
    onError: () => {
      onCheckResult(false);
    },
  });
};

export default useGetDuplicationCheck;
