import { Roboto } from "next/font/google"

import type { Metadata } from "next"
import "./globals.css"

const geistRoboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700']
})

export const metadata: Metadata = {
  title: "ЮНИТ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className={geistRoboto.variable}>
      <body className="font-">{children}</body>
    </html>
  );
}
