import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/nav";
import Footer from "../components/shared/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YTDFY.com - Grow Your YouTube Automation Channel",
  description:
    "Completely automate your YouTube channel without relying on freelancers. Get access to top talent editors, voice actors, and more!",
  keywords: [
    "YouTube automation",
    "video editing",
    "YouTube growth",
    "channel automation",
    "content creation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
