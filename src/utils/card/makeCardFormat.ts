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
};
