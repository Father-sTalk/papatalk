import React from "react";

import CardlistComment from "@/components/bootstrap/card_list/ comment/cardlist_comment";
import CommunityDetail from "@/components/pages/community/community_detail";

interface Props {
  params: { id: string };
}

const CommunityDetailPage: React.FC<Props> = ({ params }) => {
  const articleId = params.id;

  return (
    <article className="w-full py-6">
      <CommunityDetail id={articleId} />
      <CardlistComment
        contentsType="community"
        contentsId={Number(articleId)}
      />
    </article>
  );
};

export default CommunityDetailPage;
