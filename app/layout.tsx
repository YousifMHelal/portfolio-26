import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yousifmamdouh.tech"),
  title: "Yousif Mamdouh | Full Stack Developer",
  description:
    "Yousif Mamdouh, Full Stack Developer at ElectroPi building AI-powered web platforms with React, Next.js, Node.js, TypeScript, and PostgreSQL.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Yousif Mamdouh",
    title: "Yousif Mamdouh | Full Stack Developer",
    description:
      "Full Stack Developer at ElectroPi building AI-powered web platforms with React, Next.js, Node.js, and TypeScript.",
    images: [{ url: "/assets/screenshot-demo.png", alt: "Yousif Mamdouh portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yousif Mamdouh | Full Stack Developer",
    description:
      "Full Stack Developer at ElectroPi building AI-powered web platforms with React, Next.js, Node.js, and TypeScript.",
    images: ["/assets/screenshot-demo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
