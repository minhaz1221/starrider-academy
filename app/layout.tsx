import type { Metadata } from "next";
import "./globals.css";
import "./themes.css";

export const metadata: Metadata = {
  title: "ACDI — Australian College of Digital Innovation | Technology, Cyber Security, Telecom & Film Courses, Gold Coast",
  description:
    "A new era in vocational education & training, combined with industry certification training, industry placement and government-funded courses. ACDI, Gold Coast.",
  openGraph: { title: "ACDI — Australian College of Digital Innovation", description: "Your future in tech starts here.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/brand/acdi-icon.png" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
