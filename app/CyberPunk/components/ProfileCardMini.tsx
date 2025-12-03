"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import Link from "next/link";

export default function ProfileCardMini() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative p-6 w-[300px] sm:w-[350px]  text-green-300 mx-auto text-center "
    >
      {/* Profile Image */}
      <div className="relative w-36 h-36 mx-auto mb-4">
        <Image
          src="/profile.png" // Change to your profile image
          alt="Mahendra Singh"
          width={200}
          height={200}
          className="rounded-full border border-green-400 object-cover"
        />
        <div className="absolute inset-0 rounded-full border border-green-400/40 animate-pulse"></div>
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold text-green-400 font-mono">
        Mahendra Singh
      </h1>

      {/* Email */}
      <div className="mt-3 flex items-center justify-center gap-2 text-sm font-mono text-green-300/80">
        <FiMail className="text-green-400" />
        <a
          href="mailto:mahendrasinghddnuk@gmail.com"
          className="hover:text-green-200 transition"
        >
          mahendrasinghddnuk@gmail.com
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-5">
        <Link
          href="https://github.com/MAHI01109"
          target="_blank"
          className="text-green-400 hover:text-green-200 transition transform hover:scale-110"
        >
          <SiGithub size={22} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mahendra-singh-8041a426a/"
          target="_blank"
          className="text-green-400 hover:text-green-200 transition transform hover:scale-110"
        >
          <SiLinkedin size={22} />
        </Link>
        <Link
          href="https://www.instagram.com/__011_danu/"
          target="_blank"
          className="text-green-400 hover:text-green-200 transition transform hover:scale-110"
        >
          <SiInstagram size={22} />
        </Link>
      </div>
    </motion.div>
  );
}
