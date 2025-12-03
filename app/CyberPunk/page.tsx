"use client";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Missions from "./components/Blogs";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "@/app/styles/glitch.css";
export default function Home() {
 
  return (
    <main className="bg-foreground border-2 border-dashed border-green-700 shadow-lg shadow-black/30">
      <Navbar />
      <div className="pt-16">
      <Hero />
      <About />
      <Projects />
      <Missions />
      <Contact />
      </div>
    </main>
  );
}
