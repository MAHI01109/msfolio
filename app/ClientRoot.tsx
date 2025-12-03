"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import LenisProvider from "@/components/LenisProvider";
import MatrixLoader from "./CyberPunk/components/MatrixLoader";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
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
          <main className="relative z-10">{children}</main>
        </LenisProvider>
      )}
    </ThemeProvider>
  );
}
