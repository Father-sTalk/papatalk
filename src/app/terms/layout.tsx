import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "파파야 약관페이지",
  description: "엄마와는 다른 아빠들만의 고민이야기",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full bg-primary-50 p-6">
      <div className="w-full bg-layout_white p-6 gap-6 rounded-xl">
        {children}
      </div>
    </section>
  );
}
