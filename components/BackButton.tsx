import React, { use } from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { useUIAudio } from '@/hooks/useUIAudio';

type Props = {}

function BackButton({ }: Props) {
  const { playHover,playClick} = useUIAudio();
  return (
    <>
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <Link
          href="/"
          onClick={playClick}
          onMouseEnter={playHover}
          onMouseLeave={playHover}
          className="inline-flex items-center gap-2 font-mono text-sm text-green-400 border border-dashed border-green-500 px-4 py-2 rounded-none hover:bg-green-500/10 hover:shadow-[0_0_10px_#00ff00] transition"
        >
          <FiArrowLeft className="text-green-400" />
          <span>Back to {" Home"}</span>
        </Link>
      </motion.div>
    </>
  )
}

export default BackButton