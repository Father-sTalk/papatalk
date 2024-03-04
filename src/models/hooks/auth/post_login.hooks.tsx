import { useMutation } from "@tanstack/react-query";
import { useResetRecoilState, useSetRecoilState } from "recoil";

import authAPI from "@/models/api/authAPI";
import { userInfo } from "@/recoil/user/user_info";

const useLoginMutation = () => {
  const setUserInfo = useSetRecoilState(userInfo);
  const resetUserInfo = useResetRecoilState(userInfo);
  return useMutation({
    mutationFn: (loginData: ApiRequest.AuthApiTypes.LoginRequest) =>
      authAPI.login(loginData).then((res) => res.data),
    onSuccess: (data) => {
      setUserInfo((prev) => ({ ...prev, email: data?.email }));
    },
    onError: () => {
      resetUserInfo();
    },
  });
};

export default useLoginMutation;
