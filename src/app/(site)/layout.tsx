import type { Metadata } from "next";
import "./globals.scss";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Millie Dow",
  description: "Millie Dow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body>{children}</body>
      </html>
      <Analytics />
    </>
  );
}
