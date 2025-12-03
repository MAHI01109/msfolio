import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { desc, image } from "framer-motion/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";

const projects = [
  {
    name: "Blog App",
    techStack: "React.js, Node.js, Express, MongoDB",
    link: "https://example.com/project1",
    description: "A web application that allows users to track their tasks and manage their time effectively.",
    webImageUrl: "/project1.png",
    mobileImageUrl: "/project1-mobile.png",

  },
  {
    name: "E-commerce Platform",
    techStack: "Next.js, Tailwind CSS, Firebase",
    link: "https://example.com/project2",
    description: "A full-stack e-commerce platform that allows users to buy and sell products online.",
    webImageUrl: "/project2.png",
    mobileImageUrl: "/project2-mobile.png",
  },
  {
    name: "Portfolio Website",
    techStack: "React.js, Vite, CSS3",
    link: "https://example.com/project3",
    description: "A personal portfolio website to showcase my projects and skills.",
    webImageUrl: "/project3.png",
    mobileImageUrl: "/project3-mobile.png",
  },
  {
    name: "Task Manager",
    techStack: "React.js, Node.js, Express, MongoDB",
    link: "https://example.com/project1",
    description: "A web application that allows users to track their tasks and manage their time effectively.",
    webImageUrl: "/project4.png",
    mobileImageUrl: "/project4-mobile.png",
  },

  {
    name: "Food Delivery App",
    techStack: "React.js, Node.js, Express, MongoDB",
    link: "https://example.com/project2",
    description: "A full-stack food delivery app that allows users to order food from their favorite restaurants.",
    webImageUrl: "/project5.png",
    mobileImageUrl: "/project5-mobile.png",
  },

];

export default function Projects() {
  return (
    <section className="dark:bg-black  text-white px-8 md:px-20 py-24 border-b border-green-400">
      <div className="relative z-20 text- mb-16">
        <h2 className="text-5xl font-bold glitch font-mono" data-text="PROJECTS LOADOUT">
          PROJECTS LOADOUT
        </h2>
        <p className="text-green-500/70 text-sm md:text-base font-mono tracking-widest">
          [ SYSTEM ONLINE :: Recent Deployments ]
        </p>
      </div>


      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="max-w-7xl mx-auto"
      >
        <CarouselContent>
          {
            projects.map((project, index) => (
              <CarouselItem key={index} className="p-6 border-2 border-dashed border-gray-600 rounded-md mx-4 max-w-4xl">
                <BentoGrid className="max-w-4xl mx-auto gap-3 grid-cols-2 md:grid-cols-4 border-2">
                  <BentoGridItem

                    className="col-span-4 md:col-span-2 bg-black border-none "
                    header={
                      <Image
                        src="/Web.jpg"
                        width={600}
                        height={100}
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    }
                  />
                  <BentoGridItem
                    header={
                      <Image
                        src="/phone.jpg"
                        width={600}
                        height={100}
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    }
                    className="col-span-4 md:col-span-2 row-span-2 bg-black border-none "
                  />
                  <BentoGridItem
                    className="col-span-4 md:col-span-2 bg-black p-4 border-none"
                    header={
                      <div>
                        <h3 className="text-2xl font-bold font-mono mb-2 text-orange-700">{project.name}</h3>
                        <p className="text-green-700 font-mono mb-4">{project.techStack}</p>
                        <p className="mb-4">{project.description}</p>
                        <a
                          href={project.link}
                          target="_blank"
                          className="text-cyan-400 hover:underline font-mono"
                        >
                          View Project
                        </a>
                      </div>
                    }
                  />

                </BentoGrid>

              </CarouselItem>
            ))
          }

        </CarouselContent>
        <CarouselPrevious className="bg-gray-800" />
        <CarouselNext className="bg-gray-800" />
      </Carousel>


    </section>
  );
}

