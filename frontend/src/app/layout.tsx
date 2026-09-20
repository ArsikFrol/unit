import { Montserrat } from "next/font/google"

import type { Metadata } from "next"
import "./globals.css"
import Container from "@/components/Container";

const geistRoboto = Montserrat ({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '700']
})

export const metadata: Metadata = {
  title: "ЮНИТ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html className={geistRoboto.variable}>
        <body className="bg-black">
          <Container>
            {children}
          </Container>
        </body>
    </html>
  );
}
