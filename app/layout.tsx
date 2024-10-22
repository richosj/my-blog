import type { Metadata } from "next";
import "./globals.css";

import Header from "./contains/Header";

export const metadata: Metadata = {
  title: "테스트",
  description: "디스크립션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main id="container">
          {children}
        </main>
      </body>
    </html>
  );
}
