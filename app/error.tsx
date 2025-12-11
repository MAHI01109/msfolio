"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiAlertTriangle, FiRefreshCcw } from "react-icons/fi";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black text-green-400 overflow-hidden">
      {/* Cyber Background */}
      <motion.div
        animate={{ backgroundPositionY: ["0%", "100%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(to_bottom,#00ff88_1px,transparent_3px)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-20 px-6"
      >
        <FiAlertTriangle className="text-5xl text-red-500 mx-auto mb-4 animate-pulse" />
        <h1
          className="glitch text-5xl font-bold mb-4 text-green-400"
          data-text="SYSTEM ERROR"
        >
          SYSTEM ERROR
        </h1>
        <p className="font-mono text-green-500/80 mb-8 max-w-lg mx-auto">
          [ {error.message || "Unexpected system malfunction detected."} ]
        </p>

        <div className="space-x-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 border border-green-500 px-6 py-3 font-mono hover:bg-green-500/10 transition"
          >
            <FiRefreshCcw /> Reboot System
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-green-500 px-6 py-3 font-mono hover:bg-green-500/10 transition"
          >
            Return Home
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 h-[300px] w-[300px] bg-red-500/10 blur-3xl rounded-full"
      />
    </main>
  );
}
