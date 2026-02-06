import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calypso One IT LLC",
  description:
    "Reliable IT Solutions with 20+ Years of IT Experience. Security-Focused. Business Ready.",
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
