import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import SettingProvider from "@/provider/settingProvider";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <SettingProvider>{children}</SettingProvider>
      </body>
    </html>
  );
}
