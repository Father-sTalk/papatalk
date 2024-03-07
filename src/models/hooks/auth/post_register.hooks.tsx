import { useMutation } from "@tanstack/react-query";

import authAPI from "@/models/api/authAPI";

const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (loginData: ApiRequest.AuthApiTypes.RegisterRequest) =>
      authAPI.register(loginData).then((res) => res.data),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => {},
  });
};

export default useRegisterMutation;
