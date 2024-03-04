import { useMutation } from "@tanstack/react-query";
import { useResetRecoilState, useSetRecoilState } from "recoil";

import authAPI from "@/models/api/authAPI";
import { userInfo } from "@/recoil/user/user_info";

const useRegisterMutation = () => {
  const setUserInfo = useSetRecoilState(userInfo);
  const resetUserInfo = useResetRecoilState(userInfo);
  return useMutation({
    mutationFn: (loginData: ApiRequest.AuthApiTypes.RegisterRequest) =>
      authAPI.register(loginData).then((res) => res.data),
    onSuccess: (data) => {
      setUserInfo((prev) => ({ ...prev, email: data?.email }));
    },
    onError: () => {
      resetUserInfo();
    },
  });
};

export default useRegisterMutation;
