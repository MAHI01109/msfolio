"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useUIAudio } from "@/hooks/useUIAudio";

export default function Navbar() {
  const { playClick, playHover } = useUIAudio();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();
  console.log(theme);

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`w-full h-14 border-b-4  border-black dark:border-green-700 bg-yellow-300 dark:bg-black/90  backdrop-blur-md fixed top-0 left-0 z-50`}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 md:px-16">
        {/* Brand */}
        <div className={`font-extrabold text-2xl text-black dark:text-green-400 tracking-wider`}>
          <Link
            href="/"
            onMouseEnter={playHover}
            onClick={playClick}
            className="font-mono text-black dark:text-green-400 text-2xl hover:text-cyan-400 transition"
          >
            <span className="animate-pulse">▮</span>[& M$ &]
            <span className="animate-pulse">▮</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-mono">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={playHover}
              >
                <Link
                  href={link.href}
                  onClick={playClick}
                  className={`transition text-black dark:text-green-700 hover:text-orange-500 dark:hover:text-cyan-400 ${isActive ? "text-orange-500 dark:text-cyan-400" : ""
                    }`}
                >
                  {link.name}
                </Link>

                {/* Laser underline effect */}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-500 dark:bg-cyan-400  group-hover:w-full transition-all duration-300 ${isActive ? "w-full shadow-[0_0_10px_#00ffff]" : ""
                    }`}
                ></span>
              </div>
            );
          })}
        </div>

        {/* Desktop Theme Toggler */}
        <div className="hidden md:flex items-center space-x-2 dark:text-green-400 text-black">
          <AnimatedThemeToggler />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-green-400 cursor-pointer">
          {menuOpen ? (
            <FiX
              size={26}
              onClick={() => {
                playClick();
                setMenuOpen(false);
              }}
            />
          ) : (
            <FiMenu
              size={26}
              onClick={() => {
                playClick();
                setMenuOpen(true);
              }}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/95 border-t border-green-700 flex flex-col items-center space-y-4 py-6 font-mono text-green-400"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={playHover}
              onClick={() => {
                playClick();
                setMenuOpen(false);
              }}
              className="hover:text-cyan-400 transition text-lg"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <AnimatedThemeToggler

            />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
