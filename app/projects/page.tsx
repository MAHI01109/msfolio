"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import ProjectCard from "./components/ProjectCard";
import SectionHeader from "./components/SectionHeader";
import BackButton from "@/components/BackButton";

export default function ProjectsPage() {

  const projects = [
    {
      slug: "youtube-downloader",
      title: "YouTube Downloader",
      description:
        "A full-stack web app that enables users to download YouTube videos and audio with multiple quality options. Built using Node.js, Express, React, and ytdl-core.",
      image: "/projects/youtube.png",
      github: "https://github.com/mahendra/youtube-downloader",
      link: "https://your-demo-link.com",
      demo: "#",
      tech: ["React", "Node.js", "Express", "MongoDB", "ytdl-core", "TailwindCSS"],
      features: [
        "Video and audio download with resolution and bitrate selection.",
        "Dark/Light mode with animated UI transitions.",
        "Real-time download progress and speed indicators.",
        "Secure backend API using Express middleware and validation.",
      ],
      challenges: [
        "Handled video stream parsing efficiently to prevent memory leaks.",
        "Implemented backend throttling for simultaneous user requests.",
        "Ensured UI responsiveness across devices and large file downloads.",
      ],
      learnings: [
        "Deep understanding of stream-based file handling in Node.js.",
        "Improved API optimization techniques for large data transfers.",
        "Learned to manage state synchronization between backend and frontend.",
      ],
      future: [
        "Add multi-video batch downloads.",
        "Integrate user authentication for personalized history.",
        "Build a mobile version with offline caching support.",
      ],
    },
    {
      slug: "ai-pdf-research-tool",
      title: "AI PDF Research Tool",
      description:
        "A SaaS app that analyzes uploaded PDFs using OpenAI APIs and answers user queries contextually. Built using React, Node.js, Express, MongoDB, OpenAI API, and TailwindCSS.",
      image: "/projects/ai.png",
      github: "#",
      link: "#",
      demo: "#",
      tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "TailwindCSS"],
      features: [
        "PDF upload and analysis with OpenAI APIs.",
        "Contextualized answers based on uploaded PDF content.",
        "User authentication for secure access.",
        "Dark/Light mode with animated UI transitions.",
      ],
      challenges: [
        "Handled PDF parsing efficiently to prevent memory leaks.",
        "Implemented backend throttling for simultaneous user requests.",
        "Ensured UI responsiveness across devices and large file downloads.",
      ],
      learnings: [
        "Deep understanding of PDF parsing and analysis using OpenAI APIs.",
        "Learned to manage state synchronization between backend and frontend.",
      ],
      future: [
        "Integrate user authentication for personalized history.",
        "Build a mobile version with offline caching support.",
      ],
    },
    {
      slug: "cyberpunk",
      title: "Cyberpunk",
      description:
        "A web app that allows users to track their tasks and manage their time effectively. Built using React, Node.js, Express, and MongoDB.",
      image: "/projects/cyberpunk.png",
      github: "#",
      demo: "#",
      link: "#",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      features: [
        "Task tracking and management with drag-and-drop functionality.",
        "Dark/Light mode with animated UI transitions.",
        "Real-time task updates and notifications.",
        "Secure backend API using Express middleware and validation.",
      ],
      challenges: [
        "Handled task stream parsing efficiently to prevent memory leaks.",
        "Implemented backend throttling for simultaneous user requests.",
        "Ensured UI responsiveness across devices and large file downloads.",
      ],
      learnings: [
        "Deep understanding of stream-based file handling in Node.js.",
        "Improved API optimization techniques for large data transfers.",
        "Learned to manage state synchronization between backend and frontend.",
      ],
      future: [
        "Add multi-video batch downloads.",
        "Integrate user authentication for personalized history.",
        "Build a mobile version with offline caching support.",
      ],
    },
    {
      slug: "food-delivery-app",
      title: "Food Delivery App",
      description:
        "A full-stack food delivery app that allows users to order food from their favorite restaurants. Built using React, Node.js, Express, MongoDB, and TailwindCSS.",
      image: "/projects/food.png",
      github: "#",
      link: "#",
      demo: "#",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      features: [
        "User authentication for secure access.",
        "Real-time order updates and notifications.",
        "Dark/Light mode with animated UI transitions.",
      ],
      challenges: [
        "Handled order stream parsing efficiently to prevent memory leaks.",
        "Implemented backend throttling for simultaneous user requests.",
        "Ensured UI responsiveness across devices and large file downloads.",
      ],
      learnings: [
        "Deep understanding of stream-based file handling in Node.js.",
        "Improved API optimization techniques for large data transfers.",
        "Learned to manage state synchronization between backend and frontend.",
      ],
      future: [
        "Add multi-video batch downloads.",
        "Integrate user authentication for personalized history.",
        "Build a mobile version with offline caching support.",
      ],
    },
  ];

  return (
    <section className="bg-black text-green-400 min-h-screen px-8 md:px-20 py-24 relative overflow-hidden">
      {/* Cyber scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(to_bottom,rgba(0,255,0,0.05)_0px,rgba(0,255,0,0.05)_1px,transparent_2px)] opacity-30"></div>

      {/* Back Button */}
      <BackButton />

      {/* Section Header */}
      <SectionHeader
        title="PROJECT ARCHIVE"
        subtitle="[ SYSTEM ONLINE :: PROJECTS DEPLOYED ]"
      />

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-16 relative z-10">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 12px #00ff00",
            }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
