import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import SkillRadar from "./SkillRadar";
import TechStackBadges from "./TechStackBadges";

export default function About() {

    const items = [
        {
            header: <AboutText />,
            className: "col-span-3 md:col-span-2 bg-black rounded-none p-0 overflow-hidden border-2  border-dashed border-gray-600",
        },
        {
            header: <SkillsItem skill="Skills" level="Advanced" />,
            className: "col-span-3 md:col-span-1 bg-black row-span-2 p-0 overflow-hidden rounded-none border-2  border-dashed border-gray-600",
        },
        {
            header: <EducationItem skill="Education" level="Advanced" />,
            className: "col-span-3 md:col-span-1 row-span-1 p-0 bg-black overflow-hidden rounded-none border-2  border-dashed border-gray-600",
        },
        {
            header: <ExperienceItem tool="Experience" icon={null} />,
            className: "col-span-3 md:col-span-1 row-span-1 bg-black p-0 overflow-hidden rounded-none border-2  border-dashed border-gray-600",
        },
    ];
    return (
        <section className="bg-black border-2 border-dashed-y  border-y-green-400 text-white px-8 md:px-20 py-24">
            <div className="relative z-20 text- mb-16">
                <h2 className="glitch text-4xl" data-text="ABOUT ME">ABOUT ME</h2>
                <p className="text-green-500/70 text-sm md:text-base font-mono tracking-widest">
                    [ SYSTEM ONLINE :: Personal Profile ]
                </p>
            </div>

            <BentoGrid className="max-w-7xl mx-auto gap-3 grid-cols-2 md:grid-cols-3 mb-16 border-2">
                {items.map((item, index) => (
                    <BentoGridItem
                        key={index}
                        header={item.header}
                        className={item.className}
                    />
                ))
                }
            </BentoGrid>
        </section >
    );
}

// /* About Text */
const AboutText = () => {
    return (

        <div className="space-y-16 md:space-y-0 max-w-5xl mx-auto p-6">

            {/* ABOUT */}
            <div>
                <h2 className="text-2xl font-extrabold bg-green-700 text-white px-3 py-1 inline-block mb-6 border border-black">
                    Short Intro
                </h2>
                <p className="font-mono text-green-700 text-lg">
                    I'm Mahendra, a dedicated Full-Stack Developer with a passion for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I thrive on turning complex problems into elegant solutions. Let's build something amazing together!
                </p>
            </div>
        </div>
    );
}
// /* Education */
const EducationItem = ({ skill, level }: { skill: string; level: string }) => {
    return (
        <Card className="bg-black max-w-md border-0">
            <CardHeader>
                <CardTitle className="text-white text-xl font-extrabold bg-green-700 px-3 py-1 inline-block">Education</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="">
                    <li className="mb-2">
                        <p className="font-mono text-lg text-green-700">
                            Higher Secondary School
                        </p>

                        <p className="inline-flex justify-between w-full font-mono text-sm text-gray-500 pl-2">
                            <span># Viviekanand School - (CBSE)</span>
                            <span className="text-orange-500">2018 – 2019 </span>
                        </p>
                    </li>
                    <li className="mb-2">
                        <p className=" font-mono text-lg text-green-700">
                            Bachelor of Arts
                        </p>
                        <p className="inline-flex justify-between w-full font-mono text-sm text-gray-500 pl-2">
                            <span># DBS Pg Collage - ( HNBGU )</span>
                            <span className="text-orange-500">2019 – 2023 </span>
                        </p>
                    </li>
                    <li className="mb-2">
                        <p className="font-mono text-lg text-green-700">
                            Web Development
                        </p>

                        <p className="inline-flex justify-between w-full font-mono text-sm text-gray-500 pl-2">
                            <span># Dream Tech - ( Full Stack )</span>
                            <span className="text-orange-500">2023 – 2024 </span>
                        </p>
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}
// {/* Experience */ }
const ExperienceItem = ({ tool, icon }: { tool: string; icon: React.ReactNode }) => {
    return (
        <Card className="bg-black max-w-md border-0">
            <CardHeader>
                <CardTitle className="text-white text-xl font-extrabold bg-green-700 px-3 py-1 inline-block">Experience</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="">
                    <li className="mb-2">
                        <p className="font-mono text-lg text-green-700">
                            Web Developer Intern
                        </p>
                        <p className="inline-flex justify-between w-full font-mono text-sm text-gray-500 pl-2">
                            <span># Dream Tech - ( Full Stack )</span>
                            <span className="text-orange-500">2023 – 2024</span>
                        </p>
                    </li>
                    <li className="mb-2">
                        <p className="font-mono text-lg text-green-700">
                            Junior Web Developer
                        </p>
                        <p className="inline-flex justify-between w-full font-mono text-sm text-gray-500 pl-2">
                            <span># Baba Web Solutions </span>
                            <span className="text-orange-500">2024 – 2024 </span>
                        </p>
                    </li>
                    <li className="mb-2">
                        <p className="font-mono text-lg text-green-700">
                            Full-Stack Developer
                        </p>
                        <p className="inline-flex justify-between w-full font-mono text-sm text-gray-500 pl-2">
                            <span># ZyeonTech  Solutions </span>
                            <span className="text-orange-500">2025 – Present </span>
                        </p>
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}
{/* Skills */ }
const SkillsItem = ({ tool, icon }: { tool: string; icon: React.ReactNode }) => {
    return (

        <Card className="bg-black max-w-md border-0">
            <CardHeader>
                <CardTitle className="text-white text-xl font-extrabold bg-green-700 px-3 py-1 inline-block">Skills</CardTitle>
            </CardHeader>
            <CardContent className="h-[270px] relative">
                <SkillRadar />
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]"></div>
            </CardContent>
            <CardFooter>
                <TechStackBadges />
            </CardFooter>
        </Card>

    );
}