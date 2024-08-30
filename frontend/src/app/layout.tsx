import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gohoot Ed",
  description: "Learn and have fun with Gohoot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
