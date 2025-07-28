import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "lucide-react"
import { Providers } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "짠짠북 💵",
  description: "나의 소비 습관을 관리하는 스마트한 가계부",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} text-gray-700`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
