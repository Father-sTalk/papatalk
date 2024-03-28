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
  namespace CommunityApiTypes {
    interface GetArticleListRequest {
      search?: string;
      page: number;
      sort?: string;
    }
    interface GetPopularCommunityListRequest {
      category?: string;
    }
    interface CreateArticleRequest {
      title: string;
      content: string;
      category: string;
    }
  }
  namespace SosApiTypes {
    interface SosArticleListRequest {
      search?: string;
      page: number;
      sort?: string;
    }
  }
}
interface CommunityArticle {
  id: number;
  title: string;
  views: number;
  likes: number;
  createdAt: string;
  category: string;
  authorNickname: string;
}
interface PopularCommunityArticle extends CommunityArticle {
  thumbnail: string;
}
interface SosArticle {
  id: number;
  title: string;
  content: string;
  views: number;
  likes: number;
  commentsCount: number;
  createdAt: string;
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
  namespace CommunityApiTypes {
    interface CommunityArticleListResponse {
      communityList: CommunityArticle[];
      totalCount: number;
      totalPage: number;
      currentPage: number;
    }
    interface PopularCommunityArticleListResponse {
      communityList: PopularCommunityArticle[];
    }
  }
  namespace SosApiTypes {
    interface SosArticleListResponse {
      sosList: SosArticle[];
      totalCount: number;
      totalPage: number;
      currentPage: number;
    }
  }
}
