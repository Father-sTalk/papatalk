import { useMutation } from "@tanstack/react-query";

import authAPI from "@/models/api/authAPI";

const useLoginMutation = () => {
  return useMutation({
    mutationFn: (loginData: ApiRequest.AuthApiTypes.LoginRequest) =>
      authAPI.login(loginData).then((res) => res.data),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => {},
  });
};

export default useLoginMutation;
