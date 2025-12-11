"use client";
import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiX, SiLinkedin, SiDevdotto } from "react-icons/si";
import { GiCyberEye } from "react-icons/gi";
import GlobeDemo from "./Globe3D";
import Link from "next/link";
import { useUIAudio } from "@/hooks/useUIAudio";

export default function Contact() {
  return (
    <section className="relative bg-black text-green-400 px-6 md:px-20 py-24 overflow-hidden">
      {/* Subtle motion background */}
      <motion.div
        animate={{ backgroundPositionY: ["0%", "100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-0 opacity-10"
      />

      {/* Title */}
      <div className="relative z-20 mb-16">
        <h2
          className="text-3xl md:text-5xl font-mono text-[#00ff88] tracking-widest mb-2 glitch"
          data-text="CONTACT SYSTEM"
        >
          CONTACT SYSTEM
        </h2>
        <p className="text-green-500/70 text-sm md:text-base font-mono tracking-widest">
          [ SYSTEM ONLINE :: Ready for Connection ]
        </p>
      </div>

      {/* Layout */}
      <div className="relative bg-black z-20 grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center md:p-6">
        <div className="col-span-1 flex items-center justify-center bg-black">
          <GlobeDemo />
        </div>
        <div className="col-span-1 md:col-span-2">
          <RevealBento />
        </div>
      </div>
    </section>
  );
}

/* ============================ */
/* Bento Contact Section Layout */
/* ============================ */

export const RevealBento = () => {
  const { playClick, playHover } = useUIAudio();

  return (
    <div className="min-h-screen bg-black px-4 py-12 text-zinc-50 col-span-2">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.05 }}
        className="font-mono text-green-700 mx-auto grid max-w-5xl grid-flow-dense grid-cols-12 gap-4 p-2 md:p-6"
      >
        <HeaderBlock playClick={playClick} playHover={playHover} />
        <SocialsBlock playClick={playClick} playHover={playHover} />
        <LocationBlock playClick={playClick} playHover={playHover} />
        <EmailListBlock playClick={playClick} playHover={playHover} />
      </motion.div>
    </div>
  );
};

/* ============================ */
/* Reusable Block Wrapper */
/* ============================ */

type BlockProps = {
  className?: string;
  playClick: () => void;
  playHover: () => void;
} & MotionProps;

const Block = ({ className, playClick, playHover, ...rest }: BlockProps) => (
  <motion.div
    variants={{
      initial: { scale: 0.5, y: 50, opacity: 0 },
      animate: { scale: 1, y: 0, opacity: 1 },
    }}
    transition={{ type: "spring", mass: 3, stiffness: 400, damping: 50 }}
    onMouseEnter={playHover}
    onClick={playClick}
    className={twMerge(
      "col-span-4 rounded-lg border border-zinc-700 bg-black p-6",
      className
    )}
    {...rest}
  />
);

/* ============================ */
/* Individual Bento Blocks */
/* ============================ */

const HeaderBlock = ({ playClick, playHover }: BlockProps) => (
  <Block
    playClick={playClick}
    playHover={playHover}
    className="col-span-12 row-span-2 md:col-span-6 border-2 border-dashed border-zinc-700"
  >
    <Logo />
    <h1 className="mb-12 text-2xl font-medium leading-tight">
      Get in Touch!{" "}
      <span className="text-zinc-400">
        Connect with me through social media or join my mailing list.
      </span>
    </h1>
    <Link href="#contact" className="flex items-center gap-1 text-red-300 hover:underline">
      Contact me <FiArrowRight />
    </Link>
  </Block>
);

const SocialsBlock = ({ playClick, playHover }: BlockProps) => (
  <>
    <Block
      playClick={playClick}
      playHover={playHover}
      whileHover={{ rotate: "2.5deg", scale: 1.1 }}
      className="col-span-6 bg-black border-2 border-dashed border-zinc-700 md:col-span-3"
    >
      <Link
        href="https://dev.to/mahendra_singh_7500"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-4xl text-white"
      >
        <SiDevdotto />
      </Link>
    </Block>

    <Block
      playClick={playClick}
      playHover={playHover}
      whileHover={{ rotate: "-2.5deg", scale: 1.1 }}
      className="col-span-6 bg-zinc-800 border-2 border-dashed border-zinc-600 md:col-span-3"
    >
      <Link
        href="https://github.com/MAHI01109"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-4xl text-white"
      >
        <SiGithub />
      </Link>
    </Block>

    <Block
      playClick={playClick}
      playHover={playHover}
      whileHover={{ rotate: "-2.5deg", scale: 1.1 }}
      className="col-span-6 bg-zinc-900 border-2 border-dashed border-zinc-600 md:col-span-3"
    >
      <Link
        href="https://x.com/mahendr93922504"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-4xl text-white"
      >
        <SiX />
      </Link>
    </Block>

    <Block
      playClick={playClick}
      playHover={playHover}
      whileHover={{ rotate: "2.5deg", scale: 1.1 }}
      className="col-span-6 bg-blue-500 border-2 border-dashed border-zinc-700 md:col-span-3"
    >
      <Link
        href="https://www.linkedin.com/in/mahendra-singh-8041a426a/"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-4xl text-white"
      >
        <SiLinkedin />
      </Link>
    </Block>
  </>
);

const LocationBlock = ({ playClick, playHover }: BlockProps) => (
  <Block
    playClick={playClick}
    playHover={playHover}
    className="col-span-12 flex flex-col items-center gap-4 md:col-span-3 border-2 border-dashed border-zinc-700"
  >
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Dehradun, India</p>
  </Block>
);

const EmailListBlock = ({ playClick, playHover }: BlockProps) => (
  <Block
    playClick={playClick}
    playHover={playHover}
    className="col-span-12 md:col-span-9 border-2 border-dashed border-zinc-700"
  >
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 px-3 py-1.5 transition-colors focus:border-green-400 focus:outline-0 bg-black text-green-400 placeholder:text-zinc-600"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-green-500/20 border border-green-400 px-3 py-2 text-sm font-medium text-green-400 transition hover:bg-green-500/40"
      >
        <FiMail /> Join
      </button>
    </form>
  </Block>
);

const Logo = () => (
  <GiCyberEye className="mb-4 size-24 text-green-400 animate-pulse" />
);
