import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareConnect | Healthcare Assistant",
  description: "A helpful guide for healthcare concerns and appointments.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
