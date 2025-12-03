"use client";

import {
    Badge
} from "@/components/ui/badge";

import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiGit,
    SiGithub,
    SiVite,
    SiRedux,
    SiHtml5,
    SiCss3,
    SiFirebase
} from "react-icons/si";
import { useTheme } from "next-themes";

export default function TechStackBadges() {
    const { theme } = useTheme();

    const techStack = [
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 dark:text-white" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-600 dark:text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
        { name: "Vite", icon: <SiVite className="text-purple-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-amber-400" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-800 dark:text-white" /> },
    ];

    return (
        <section className="flex flex-wrap gap-3 justify-normal">
            {techStack.map((tech) => (
                <Badge
                    key={tech.name}
                    variant="outline"
                    className={`flex items-center gap-2 border px-2 text-sm font-semibold font-mono transition  rounded-md
            ${theme === "dark" ? "border-cyan-400 text-cyan-300 hover:bg-cyan-400/10" : "border-gray-800 text-gray-600 hover:text-green-700 hover:bg-green-400/20 "}`}
                >
                    {tech.icon}
                    <span>{tech.name}</span>
                </Badge>
            ))}
        </section>
    );
}
