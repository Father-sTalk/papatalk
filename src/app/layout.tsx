import React from "react";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
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
      <head>
        <meta
          name="google-site-verification"
          content="ObW5z7SD512TBloxZhUEI0RSaWXGHuc0ddESAQZ59hA"
        />
      </head>
      <body className="w-full">
        <SettingProvider>{children}</SettingProvider>
        <GoogleAnalytics gaId="G-1SV9RGHV5R" />
        <GoogleTagManager gtmId="GTM-PGG9KH6L" />
      </body>
    </html>
  );
}
