// import type { Metadata } from "next";
"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LenisProvider from "@/components/LenisProvider";
import MatrixLoader from "./CyberPunk/components/MatrixLoader";
import { useEffect, useState } from "react";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate system boot delay (2.5 seconds)
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="preload" as="audio" href="/sounds/hover.wav" type="audio/wav" />
      <link rel="preload" as="audio" href="/sounds/click.wav" type="audio/wav" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {loading ? (
            <MatrixLoader />
          ) : (

            <LenisProvider>
              <main className="relative z-10">
                {children}
              </main>

            </LenisProvider>
          )}


        </ThemeProvider>
      </body>
    </html>
  );
}
