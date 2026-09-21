import { Montserrat } from "next/font/google"

import type { Metadata } from "next"
import "./globals.css"

const geistRoboto = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '700']
})

export const metadata: Metadata = {
    title: "ЮНИТ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html className={geistRoboto.variable}>
            <body className="bg-[#151515]">{children}</body>
        </html>
    );
}
