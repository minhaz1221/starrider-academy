import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Star Rider Academy — Technology, Cyber Security, Telecom & Film Courses, Gold Coast",
  description:
    "A new era in vocational education & training, combined with industry certification training, industry placement and government-funded courses. Star Rider Academy, Gold Coast.",
  openGraph: { title: "Star Rider Academy", description: "Your future in tech starts here.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/brand/mark-colour.png" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
