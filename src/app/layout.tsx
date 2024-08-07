import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Quick & easy car rental",
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
