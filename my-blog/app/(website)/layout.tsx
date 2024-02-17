import "./globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const epilog = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_SITENAME}`,
    default: `${process.env.NEXT_PUBLIC_SITENAME}`,
  },
  description: "write description here",
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_SITENAME}`,
    description: `Write description here`,
    url: `${process.env.NEXT_PUBLIC_URL}/categories`,
    siteName: `${process.env.NEXT_PUBLIC_SITENAME}`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${process.env.NEXT_PUBLIC_SITENAME}`,
    description: `Write description here`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${epilog.variable} font-sans min-h-screen flex flex-col text-gray-900 dark:text-white bg-white dark:bg-secondary transition-colors duration-300`}
      >
        <Header />
        <main className="container mx-auto max-w-5xl pb-8 pt-16 px-4 sm:px-8 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
