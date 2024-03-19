/* eslint-disable @typescript-eslint/no-unused-vars */

namespace ApiRequest {
  namespace AuthApiTypes {
    interface LoginRequest {
      email: string;
      password: string;
    }
    interface RegisterRequest {
      email: string;
      nickname: string;
      password: string;
      termsAgreed: boolean;
      privacyPolicyAgreed: boolean;
    }
    interface DuplicationCheckRequest {
      email?: string;
      nickname?: string;
    }
  }
}
namespace ApiResponse {
  namespace AuthApiTypes {
    interface LoginResponse {
      nickname: string;
      profileImage: string;
      accessToken: string;
      refreshToken: string;
    }
    interface RegisterResponse {
      nickname: string;
      profileImage: string;
      accessToken: string;
      refreshToken: string;
    }
    interface RefreshTokenResponse {
      nickname: string;
      profileImage: string;
      accessToken: string;
      refreshToken: string;
    }
  }
}
