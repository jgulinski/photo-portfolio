import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Photo Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-black">
      <body className={`${poppins.className} dark:bg-black dark:text-white`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
