"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="flex justify-between items-center gap-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-left"
            >

                <h2
                    className="glitch text-4xl mb-4 font-extrabold"
                    data-text={title}
                >
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-green-500/70 text-sm md:text-base font-mono tracking-widest">
                        {subtitle}
                    </p>
                )}
            </motion.div>
            <Link
                href="/"
                className="font-mono text-green-400 text-sm hover:text-cyan-400 transition flex items-center gap-2"
            >
                <FiArrowLeft />
                <span>_ return main()</span>
            </Link>

        </div>
    );
}
