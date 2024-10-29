import type { Metadata } from "next";
import "./common.scss";
import Header from './contains/Header';
import "./globals.css";

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