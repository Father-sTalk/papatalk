import React from "react";

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
  return <section className="w-[50rem] mx-auto">{children}</section>;
}
