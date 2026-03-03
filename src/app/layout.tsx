import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Regent Park Residence | A Legacy of Distinguished Living",
  description:
    "Regent Park Residence — British colonial elegance luxury residence in the heart of Menteng, Jakarta. A legacy of distinguished living since 1928.",
  keywords:
    "luxury residence, Regent Park, colonial elegance, premium apartments, Jakarta, Menteng",
  openGraph: {
    title: "Regent Park Residence | A Legacy of Distinguished Living",
    description:
      "British colonial elegance luxury residence in the heart of Menteng, Jakarta.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
