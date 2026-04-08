import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Prepace",
    template: "%s | Prepace",
  },
  description:
    "Prepace is an exam preparatory test platform for CBT (Computer-Based Test) exam preparation.",
  applicationName: "Prepace",
  authors: [{ name: "HiddenTreasureNexus" }],
  generator: "Prepace",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Prepace",
    description:
      "Prepace is an exam preparatory test platform for CBT (Computer-Based Test) exam preparation.",
    url: "https://prepaceapp.netlify.app/prep-ace-app",
    siteName: "Prepace",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Prepace Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prepace",
    description:
      "Prepace is an exam preparatory test platform for CBT (Computer-Based Test) exam preparation.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
