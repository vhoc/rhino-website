import "@/styles/globals.css";

import { type Metadata } from "next";
import { Manrope } from "next/font/google";
// import { Cal_Sans } from "next/font/google";
import localFont from "next/font/local";


export const metadata: Metadata = {
  title: "Rhino",
  description: "An active, independent and secure blockchain validator",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const cal_sans = localFont({
  src: "../../public/fonts/CalSans-Regular.ttf",
  display: "swap",
  variable: "--font-calsans"
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cal_sans.variable} ${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
