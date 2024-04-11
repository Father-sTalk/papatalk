import React from "react";

import type { Metadata } from "next";

import MypageSidebar from "@/components/pages/mypage/mypage_sidebar";

export const metadata: Metadata = {
  title: "파파야 | 내 정보 보기",
  description: "엄마와는 다른 아빠들만의 고민이야기",
};

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-row w-full max-w-content mx-auto">
      <MypageSidebar />
      <div className="min-h-body w-excludeSidebar bg-primary-50">
        {children}
      </div>
    </section>
  );
}
