import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test with ali — Rotation Button",
  description: "A cool button with a rotation effect when clicked",
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
