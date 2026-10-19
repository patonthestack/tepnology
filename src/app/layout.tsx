import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { site } from "@/lib/site"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | SDVOSB Software & Technology Consulting`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "SDVOSB",
    "service-disabled veteran-owned small business",
    "minority-owned business",
    "government software development",
    "VA contractor",
    "DoD contractor",
    "federal IT modernization",
    "DevSecOps",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
