import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import authAPI from "@/models/api/authAPI";
import useUserStore from "@/store/useUserStore";

const useRegisterMutation = () => {
  const { login } = useUserStore();
  const router = useRouter();
  return useMutation({
    mutationFn: (loginData: ApiRequest.AuthApiTypes.RegisterRequest) =>
      authAPI.register(loginData).then((res) => res.data),
    onSuccess: (data) => {
      login(
        data.accessToken,
        data.refreshToken,
        data.nickname,
        data.profileImage,
      );
      router.back();
    },
    onError: () => {},
  });
};

export default useRegisterMutation;
