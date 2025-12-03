
import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiX, SiLinkedin, SiDevdotto  } from "react-icons/si";
import { GiCyberEye } from "react-icons/gi";
import GlobeDemo from "./Globe3D";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="relative bg-black text-green-400 px-6 md:px-20 py-24 overflow-hidden">
      {/* Subtle cyber grid background */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#001100_1%,#000000_70%)] opacity-90" /> */}
      <motion.div
        animate={{ backgroundPositionY: ["0%", "100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-0 opacity-10"
      />

      {/* Title */}
      <div className="relative z-20 text- mb-16">
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

      {/* Responsive grid layout */}
      <div className="relative bg-black z-20 grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center  p-6">
        {/* Globe */}
        <div className="col-span-1 flex items-center justify-center  bg-black ">
          <GlobeDemo />
        </div>

        {/* Bento layout */}
        <div className="col-span-1 md:col-span-2">
          <RevealBento />
        </div>
      </div>

      {/* Footer Glow Ring */}
      {/* <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-3xl bg-green-500/20" /> */}
    </section>
  );
}






export const RevealBento = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-12 text-zinc-50 col-span-2">
      {/* <Logo /> */}
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="font-mono text-green-700 mx-auto  grid max-w-5xl grid-flow-dense grid-cols-12 gap-4 p-6"
      >
        <HeaderBlock />
        <SocialsBlock />
        {/* <AboutBlock /> */}
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      {/* <Footer /> */}
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-black p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6 border-2 border-dashed border-zinc-700 ">
    {/* contact block */}
    <GiCyberEye className="mb-4 size-24 rounded-full" />

    <h1 className="mb-12 text-2xl font-medium leading-tight">
      Get in Touch!{" "}
      <span className="text-zinc-400">
      connect with me through social media or join my mailing list.
      </span>
    </h1>
    <a
      href="#"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-black md:col-span-3"
    >
      <Link
        href="https://dev.to/mahendra_singh_7500"
        className="grid h-full place-content-center text-4xl text-white"
      >
        <SiDevdotto  />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-800 md:col-span-3"
    >
      <Link
        href="https://github.com/MAHI01109"
        className="grid h-full place-content-center text-4xl text-white"
      >
        <SiGithub />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <Link
        href="https://x.com/mahendr93922504"
        className="grid h-full place-content-center text-4xl text-black"
      >
        <SiX />
      </Link>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <Link
        href="https://www.linkedin.com/in/mahendra-singh-8041a426a/"
        className="grid h-full place-content-center text-4xl text-white"
      >
        <SiLinkedin />
      </Link>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with React, Tailwind CSS, and Framer Motion. I love
        this stack so much that I even built a website about it. I've made over
        a hundred videos on the subject across YouTube and TikTok.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3 border-2 border-dashed border-zinc-700 ">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Cyberspace</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9 border-2 border-dashed border-zinc-700 ">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700  px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <a href="#" className="text-red-300 hover:underline">
          @Mahendra❇️Singh#️
        </a>
      </p>
    </footer>
  );
};

