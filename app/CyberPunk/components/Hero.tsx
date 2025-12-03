"use client";
import { motion } from "framer-motion";
import { WarpBackground } from "@/components/ui/warp-background";
import { useTheme } from "next-themes";
import ProfileCardMini from "./ProfileCardMini";

export default function Hero() {
    const { theme } = useTheme();
    const gridColor =
        theme === "light"
            ? "rgba(0, 255, 0, 0.6)" // brighter for light mode
            : "rgba(0, 255, 0, 0.2)"; // subtle for dark mode

    return (
        <WarpBackground
            perspective={800}
            beamsPerSide={5}
            beamDelayMax={2}
            beamDelayMin={0.5}
            beamDuration={4}
            beamSize={4}
            gridColor={gridColor}
            className="min-h-screen text-green-700 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-10"
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-black/90 dark:border dark:border-zinc-700 border border-dashed border-zinc-700 rounded-xl p-6 sm:p-10 ">
                {/* Left: Profile Card */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <ProfileCardMini />
                </div>

                {/* Right: Terminal Intro */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-2/3 md:pl-10 text-center md:text-left"
                >
                    <h1 className="text-green-500 text-4xl sm:text-5xl font-bold font-mono leading-tight">
                        Hi There,
                    </h1>

                    <p className="mt-6 font-mono text-base sm:text-lg md:text-xl leading-relaxed text-green-400">
                        I'm{" "}
                        <span className="text-green-500 font-semibold">Mahendra</span>, a
                        passionate{" "}
                        <span className="text-lime-400 font-semibold">
                            Full-Stack Developer
                        </span>{" "}
                        specializing in crafting dynamic and responsive web applications. With a strong
                        foundation in both front-end and back-end technologies, I thrive on turning complex
                        problems into elegant solutions. Let’s build something amazing together!
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <button className="w-full sm:w-auto border border-green-400 px-5 py-3 text-green-300 font-mono hover:bg-green-400/10 transition rounded-md">
                            View Loadout
                        </button>
                        <button className="w-full sm:w-auto border border-dashed border-lime-600 px-5 py-3 text-lime-400 font-mono hover:bg-lime-500/10 transition rounded-md">
                            Start Mission
                        </button>
                    </div>
                </motion.div>
            </div>
        </WarpBackground>
    );
}
