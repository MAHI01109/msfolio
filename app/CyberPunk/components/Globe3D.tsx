"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const World = dynamic(() => import("../../../components/ui/globe").then((m) => m.World), {
    ssr: false,
});

export default function GlobeDemo() {
    const globeConfig = {
        pointSize: 4,
        globeColor: "#001a00", // Deep terminal black-green base
        showAtmosphere: true,
        atmosphereColor: "#00ff99", // Neon green glow
        atmosphereAltitude: 0.15,
        emissive: "#00ff66",
        emissiveIntensity: 0.25,
        shininess: 0.9,
        polygonColor: "rgba(0,255,140,0.6)", // Translucent green grid
        ambientLight: "#00ffcc",
        directionalLeftLight: "#00ffaa",
        directionalTopLight: "#00ffcc",
        pointLight: "#00ff99",
        arcTime: 1200,
        arcLength: 0.8,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 28.6139, lng: 77.209 }, // Delhi 😎
        autoRotate: true,
        autoRotateSpeed: 0.6,
    };

    const colors = ["#00ff99", "#39ff14", "#00ffaa"];
    const sampleArcs = Array.from({ length: 15 }).map((_, i) => ({
        order: i + 1,
        startLat: (Math.random() - 0.5) * 180,
        startLng: (Math.random() - 0.5) * 360,
        endLat: (Math.random() - 0.5) * 180,
        endLng: (Math.random() - 0.5) * 360,
        arcAlt: Math.random() * 0.7,
        color: colors[Math.floor(Math.random() * colors.length)],
    }));

    return (
        <section className="relative w-full h-[30rem] flex items-center justify-center overflow-hidden bg-black text-green-700 ">
            {/* Glowing terminal grid backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#003300_1%,#000000_70%)] opacity-90 p-6" />

            {/* Subtle animated grid lines */}
            <motion.div
                animate={{ backgroundPositionY: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 bg-[linear-gradient(transparent_95%,#00ff99_98%)] opacity-10"
            />,

            {/* Outer glow ring */}
            <div className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-green-500/20 blur-2xl animate-pulse" />

            {/* Globe container */}
            <div className="relative w-full h-[30rem] md:h-[30rem] z-20 flex justify-center items-center">
                <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-black/90 pointer-events-none select-none z-30" />
                <div className="absolute -bottom-10 h-full w-full z-10">
                    <World data={sampleArcs} globeConfig={globeConfig} />
                </div>
            </div>
        </section>
    );
}
