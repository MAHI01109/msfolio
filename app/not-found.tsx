"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-black text-green-400 overflow-hidden">
      {/* Glowing grid background */}
      <motion.div
        animate={{ backgroundPositionY: ["0%", "100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#00ff88_0%,#000_70%)]"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-20 px-6"
      >
        <h1
          className="glitch text-8xl font-bold mb-4 text-green-400"
          data-text="404"
        >
          404
        </h1>
        <p className="font-mono text-lg text-green-500/80 mb-8">
          [ SYSTEM FAILURE :: Page Not Found ]
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-green-500 px-6 py-3 font-mono hover:bg-green-500/10 transition"
        >
          <FiArrowLeft /> Return to Base
        </Link>
      </motion.div>

      {/* Neon Pulse */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 h-[300px] w-[300px] bg-green-500/10 blur-3xl rounded-full"
      />
    </main>
  );
}
