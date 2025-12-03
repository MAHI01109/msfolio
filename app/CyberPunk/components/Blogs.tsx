"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function BlogSection() {
  const { theme } = useTheme();

  const blogs = [
    {
      title: "Building Futuristic UI with Next.js & Tailwind",
      description:
        "Learn how to craft fast, accessible, and futuristic cyberpunk UIs using Tailwind CSS and Next.js.",
      image: "/web.jpg",
      slug: "futuristic-ui-nextjs-tailwind",
      tags: ["Next.js", "UI", "Tailwind", "Design"],
    },
    {
      title: "Mastering Dark Mode in Modern Web Apps",
      description:
        "From theme detection to adaptive colors — a complete guide to implementing dark mode using next-themes.",
      image: "/web.jpg",
      slug: "dark-mode-guide",
      tags: ["React", "Themes", "UX"],
    },
    {
      title: "Adding 3D Interactions using Three.js + React Three Fiber",
      description:
        "Bring your websites to life with interactive 3D elements using R3F and Drei.",
      image: "/web.jpg",
      slug: "threejs-react-three-fiber",
      tags: ["3D", "React Three Fiber", "Three.js"],
    },
  ];

  const borderColor = "border-gray-600";

  return (
    <section className="relative bg-black border border-b-green-700 text-green-400 py-24 px-8 md:px-20 overflow-hidden">
      {/* Terminal scanlines overlay */}
      
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(to_bottom,rgba(0,255,0,0.05)_0px,rgba(0,255,0,0.05)_1px,transparent_2px)] opacity-30"></div>

      <div className="relative z-20 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-start text-green-400 glitch"
          data-text="BLOG SYSTEM"
        >
          BLOG SYSTEM
        </motion.h2>
        <p className="text-green-500/70 text-sm md:text-base font-mono tracking-widest mb-10">
          [ SYSTEM ONLINE :: Recent Uploads ]
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {blogs.map((blog, i) => (
          <motion.div
            key={blog.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`relative border-2 ${borderColor} border-dashed rounded-none p-5 bg-neutral-950/70 backdrop-blur-md transition hover:shadow-[0_0_10px_#00FF00]/60`}
          >
            <div className="relative w-full h-48 overflow-hidden rounded-none border border-green-700">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />
            </div>

            <div className="mt-5 space-y-3 font-mono">
              <h3 className="text-xl font-bold text-orange-700 hover:text-green-300 transition">
                {blog.title}
              </h3>
              <p className="text-green-300/80 text-sm leading-relaxed">
                {blog.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-green-400/40 px-2 py-1 rounded-md text-green-300 bg-green-500/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${blog.slug}`}
                className="block mt-5 w-fit text-sm border border-green-400 px-4 py-2 rounded-md hover:bg-green-400/20 transition"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
