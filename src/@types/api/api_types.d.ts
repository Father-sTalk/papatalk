/* eslint-disable @typescript-eslint/no-unused-vars */
enum ButtonTypeEnum {
  default = "default",
  hover = "hover",
  disabled = "disabled",
}
enum GenderTypeEnum {
  male = "male",
  female = "female",
}
enum ConfirmTypeEnum {
  agree = 1,
  disagree = 0,
}
enum CommunityTabsEnum {
  all = "all",
  free = "free",
  pregnancy = "pregnancy",
  childcare = "childcare",
}
enum MypageSideMenuEnum {
  profile = "profile",
  article = "article",
  myarticle = "myarticle",
  otherarticle = "otherarticle",
  baby = "baby",
}
enum ContentsTypeEnum {
  all = "all",
  community = "community",
  sos = "sos",
}
enum SosTabsEnum {
  all = "all",
  wait = "wait",
  solved = "solved",
}
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
    interface ResetPasswordRequest {
      email: string;
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
    interface GetArticleRequest {
      id: string;
    }
    interface CreateArticleRequest {
      title: string;
      content: string;
      category: string;
      images: File[];
    }
  }
  namespace SosApiTypes {
    interface SosArticleListRequest {
      search?: string;
      page: number;
      sort?: string;
    }
  }
  namespace CommentApiTypes {
    interface GetCommentListRequest {
      contentsType: ContentsTypeEnum;
      contentsId: number;
      sort?: string;
      page?: number;
    }
    interface CreateCommentRequest {
      contentsType: ContentsTypeEnum;
      contentsId: number;
      content: string;
    }
    interface PostCommentRecommend {
      contentsType: ContentsTypeEnum;
      contentsId: number;
      commentId: number;
    }
  }
}
interface Article {
  id: number;
  title: string;
  views: number;
  likes: number;
  createdAt: string;
  authorNickname: string;
}
interface CommunityArticle extends Article {
  category: string;
}
interface PopularCommunityArticle extends CommunityArticle {
  thumbnail: string;
}
interface SosArticle extends Article {
  content: string;
  commentsCount: number;
}
interface CommentItem {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  liked: boolean;
  authorId: number;
  authorNickname: string;
}

interface MyContents extends Article {
  contentsType: ContentsTypeEnum;
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
    interface CommunityArticleResponse {
      id: number;
      title: string;
      content: string;
      category: string;
      images: string[];
      views: number;
      likes: number;
      liked: boolean;
      authorId: number;
      authorNickname: string;
      authorProfileImage: string;
      createdAt: string;
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
  namespace CommentApiTypes {
    interface CommentListResponse {
      commentList: CommentItem[];
      totalCount: number;
      totalPage: number;
      currentPage: number;
    }
  }
  namespace UsersApiTypes {
    interface ProfileResponse {
      email: string;
      nickname: string;
      profileImage: string;
    }
    interface MyArticleResponse {
      contentsList: MyContents[];
      totalCount: number;
      totalPage: number;
      currentPage: number;
    }
  }
}
