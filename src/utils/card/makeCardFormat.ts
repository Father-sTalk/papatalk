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
        content: article.authorNickname,
        view: article.views,
        likes: article.likes,
        replies: article.replies,
        createdAt: article.createdAt,
        id: article.id,
      };
    });
  },
};
