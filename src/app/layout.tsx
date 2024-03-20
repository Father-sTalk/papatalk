import React from "react";

import type { Metadata } from "next";

import SettingProvider from "@/provider/setting_provider";

export const metadata: Metadata = {
  title: "아빠들만의 이야기",
  description: "엄마와는 다른 아빠들만의 고민이야기",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full">
        <SettingProvider>{children}</SettingProvider>
      </body>
    </html>
  );
}
