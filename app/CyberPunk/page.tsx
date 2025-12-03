"use client";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Missions from "./components/Blogs";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "@/app/styles/glitch.css";
import MatrixLoader from "./components/MatrixLoader";
export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // simulate 2.5 s boot delay
  //   const timer = setTimeout(() => setLoading(false), 3500);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) return <MatrixLoader />;
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
