import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anubhav Budek — Portfolio",
  description:
    "Portfolio of Anubhav Budek, a CSE undergrad at GIET University building for the web with HTML, CSS and JavaScript.",
  keywords: ["Anubhav Budek", "portfolio", "CSE", "GIET University", "web developer"],
  authors: [{ name: "Anubhav Budek" }],
  openGraph: {
    title: "Anubhav Budek — Portfolio",
    description:
      "CSE undergrad at GIET University, Gunupur. Building for the web.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
