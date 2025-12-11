"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import { useUIAudio } from "@/hooks/useUIAudio";



export default function BlogArchive() {
  const [posts, setPosts] = useState([]);
  const {playHover}=useUIAudio();
  // Fetch posts
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=mahendra_singh_7500")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

   const borderColor = "border-gray-600";
  return (
    <section className="bg-black text-green-400 min-h-screen px-8 md:px-20 py-24 relative overflow-hidden">
      {/* Overlay effect */}
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(to_bottom,rgba(0,255,0,0.04)_0px,rgba(0,255,0,0.04)_1px,transparent_2px)] opacity-30"></div>
      {/* Back to home */}
      <BackButton />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mb-16"
      >
        <h1 className="text-4xl font-bold text-orange-500 font-mono mb-4">BLOG SYSTEM</h1>
        <p className="text-green-500/70 font-mono text-sm tracking-widest">
          [ SYSTEM ONLINE :: RECENT UPLOADS ]
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {posts.map((post : any, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={playHover}
            
            className={`relative border-2 ${borderColor} border-dashed rounded-none p-5 bg-neutral-950/70 backdrop-blur-md transition hover:shadow-[0_0_10px_#00FF00]/60`}
          >
            <div className="relative w-full h-48 overflow-hidden rounded-none border border-green-700">
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />
            </div>

            <div className="mt-5 space-y-3 font-mono">
              <h3 className="text-xl font-bold text-orange-700 hover:text-green-300 transition line-clamp-2 w-full">
                {post.title}
              </h3>
              <p className="text-green-300/80 text-sm leading-relaxed">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {post.tag_list.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs border border-green-400/40 px-2 py-1 rounded-md text-green-300 bg-green-500/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-5 w-fit text-sm border border-green-400 px-4 py-2 rounded-md hover:bg-green-400/20 transition"
              >
                Read More &rarr;
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
