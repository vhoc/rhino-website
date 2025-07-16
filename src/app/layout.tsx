import "@/styles/globals.css";

import { type Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/ui/Navbar/Navbar";
import type { ITextLink } from "@/util/types";

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
  variable: "--font-calsans",
});

export const NAVIGATION_LINKS: ITextLink[] = [
  {
    label: "About", href: "/about",
  },
  {
    label: "Networks", href: "/networks",
  },
  {
    label: "Investment", href: "/investment",
  },
  {
    label: "Resources", href: "/resources",
  },
]

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cal_sans.variable} ${geist.variable}`}>
      <body className="pt-[80px]">
        <Navbar
          links={NAVIGATION_LINKS}
          contact_us_link={{ label: "Contact Us", href: "/contact-us" }}
        />
        {children}
      </body>
    </html>
  );
}
