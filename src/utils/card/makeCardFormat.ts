export const makeCardFormat = {
  One: (data?: CommunityArticle[]) => {
    return data?.map((article) => {
      return {
        imgSrc: "",
        title: article.title,
        authorNickname: article.authorNickname,
        view: article.views,
        likes: article.likes,
        id: article.id,
      };
    });
  },
  Two: (data?: SosArticle[]) => {
    return data?.map((article) => {
      return {
        title: article.title,
        content: article.content,
        views: article.views,
        likes: article.likes,
        commentsCount: article.commentsCount,
        createdAt: article.createdAt,
        id: article.id,
      };
    });
  },
};
