import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sahilrajmalla.com.np"),
  title: "Sahil Raj Malla | HR Leader, People & Culture & Entrepreneur",
  description:
    "Sahil Raj Malla is an HR leader and entrepreneur specializing in talent acquisition, people operations, employee experience, organizational development and business leadership.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sahil Raj Malla | HR Leader, People & Culture & Entrepreneur",
    description:
      "Sahil Raj Malla is an HR leader and entrepreneur specializing in talent acquisition, people operations, employee experience, organizational development and business leadership.",
    url: "https://www.sahilrajmalla.com.np",
    siteName: "Sahil Raj Malla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Raj Malla | HR Leader, People & Culture & Entrepreneur",
    description:
      "HR leader and entrepreneur specializing in talent acquisition, people operations, employee experience, organizational development and business leadership.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#090909] text-zinc-100">{children}</body>
    </html>
  );
}
