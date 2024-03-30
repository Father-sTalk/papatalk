import React from "react";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "...",
//   description: "...",
// };

// const CommunityDetailLayout = () => {
//   return <div></div>;
// };

// export default CommunityDetailLayout;
import type { Metadata } from "next";

import communityAPI from "@/models/api/communityAPI";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const article = await communityAPI
    .getCommunityArticle({ id })
    .then((res) => res.data);
  return {
    title: article.title,
    description: article.content,
    openGraph: {
      images: [article.images[0]],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full">{children}</section>;
}
