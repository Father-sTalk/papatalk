/* eslint-disable @typescript-eslint/no-unused-vars */

namespace ApiRequest {
  namespace AuthApiTypes {
    interface LoginRequest {
      email: string;
      password: string;
    }
    interface RegisterRequest {
      email: string;
      nick_name: string;
      password: string;
      passwordCheck: string;
      using_agree_yn: Enums.ConfirmType;
      private_info_agree_yn: Enums.ConfirmType;
    }
  }
}
