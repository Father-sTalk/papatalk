import React from "react";

import CommunityDetail from "@/components/pages/community/communiity_detail";

interface Props {
  params: { id: string };
}

const CommunityDetailPage: React.FC<Props> = ({ params }) => {
  const articleId = params.id;

  return (
    <article className="w-full py-6">
      <CommunityDetail id={articleId} />
    </article>
  );
};

export default CommunityDetailPage;
