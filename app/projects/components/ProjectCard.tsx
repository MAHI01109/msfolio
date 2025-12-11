"use client";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ title, description, tech, image, link, github ,slug}: any) {
    return (
        <div className="group relative border-2 border-dashed border-green-700 bg-neutral-950/80 rounded-none p-5 ">
            <div className="relative w-full h-48 overflow-hidden border border-green-700">
                <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition duration-700" />
            </div>

            <div className="mt-4">
                <Link href={`/projects/${slug}`}>
                    <h3 className="text-xl font-bold text-orange-500 hover:text-green-400 transition">
                        {title}
                    </h3>
                </Link>

                <p className="text-green-300/80 text-sm leading-relaxed font-mono mb-3">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tech.map((t: string) => (
                        <span key={t} className="text-xs border border-green-400/30 px-2 py-1 rounded bg-green-500/5">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="mt-5 flex items-center gap-4 text-green-400">
                    <Link href={github} target="_blank" className="hover:text-orange-400 transition">
                        <FiGithub size={20} />
                    </Link>
                    <Link href={link} target="_blank" className="hover:text-orange-400 transition">
                        <FiExternalLink size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
