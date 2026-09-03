import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// components
import Header from "@/components/Header";
import LinesBackground from "@/components/LinesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://github.com/sadath1913"),
  manifest: "/manifest.json",
  title: "Sadath Khan | Computer Science Engineering Student",
  description:
    "Computer Science Engineering student with experience in Python backend development, AWS Lambda serverless architecture, REST API design, and AI/ML integration.",
  author: "Sadath Khan",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Sadath Khan | Computer Science Engineering Student",
    description:
      "Java · Spring Boot · Python · SQL. " +
      "Building systems that process data into decisions.",
    url: "https://github.com/sadath1913",
    images: [{ url: "/preview.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadath Khan | Computer Science Engineering Student",
    description:
      "Java · Spring Boot · Python · SQL. " +
      "Building systems that process data into decisions.",
    images: ["/preview.png"],
  },
  keywords: [
    "Sadath Khan",
    "Python Developer",
    "AWS Lambda",
    "REST APIs",
    "AI/ML Integration",
    "Computer Science Engineering",
  ].join(", "),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased pt-[80px] md:pt-[120px] xl:pt-[150px]`}
      >
        <LinesBackground />
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}