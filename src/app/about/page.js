import Image from "next/image";
import Navbar from "../__components__/Navbar";
import SectionTitle from "../__components__/SectionTitle";
import SkillCard from "../__components__/SkillCard";
import { FaPhp, FaHtml5, FaGithub } from "react-icons/fa";
import {
    SiJavascript,
    SiTailwindcss,
    SiMysql,
    SiPostman,
} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import Head from "next/head";

export default function About() {
    const skills = [
        {
            icon: <SiJavascript className="text-yellow-400 text-2xl" />,
            label: "JavaScript",
        },
        { icon: <FaPhp className="text-indigo-400 text-2xl" />, label: "PHP" },
        {
            icon: <FaHtml5 className="text-orange-500 text-2xl" />,
            label: "HTML",
        },
        {
            icon: <SiTailwindcss className="text-sky-400 text-2xl" />,
            label: "Tailwind",
        },
        {
            icon: <BsGlobe className="text-green-400 text-2xl" />,
            label: "REST API",
        },
        {
            icon: <FaGithub className="text-gray-400 text-2xl" />,
            label: "GitHub",
        },
        {
            icon: <SiMysql className="text-blue-500 text-2xl" />,
            label: "MySQL",
        },
        {
            icon: <SiPostman className="text-orange-400 text-2xl" />,
            label: "Postman",
        },
    ];

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>About | Adhim Tanfitra</title>
            </Head>
            <section className="min-h-screen">
                <Navbar />
                <div className="text-white flex items-center justify-center">
                    <div className="w-full max-w-6xl px-4 py-6 sm:px-6 md:px-8 lg:px-12">
                        <SectionTitle title="ABOUT" />

                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
                            <div className="flex-shrink-0 mx-auto md:mx-0">
                                <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52 rounded-full overflow-hidden border-4 border-gray-700">
                                    <Image
                                        src="/assets/image/adhim-tanfitra.jpg"
                                        width={208}
                                        height={208}
                                        alt="Adhim Tanfitra"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 mt-4 md:mt-0">
                                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                                    Web Developer
                                </h1>
                                <p className="text-gray-300 leading-relaxed mb-4 text-justify md:mr-0 lg:mr-8">
                                    A Information Systems graduate with a
                                    passion for web development. Skilled in
                                    JavaScript frameworks such as React and
                                    Next.js, as well as PHP with Laravel, with
                                    hands-on experience in developing
                                    interactive and responsive web applications.
                                    In addition to development, actively using
                                    Git for version control and Trello for
                                    project management, ensuring effective
                                    collaboration and structured workflows.
                                    Committed to continuous learning and eager
                                    to explore new tools, frameworks, and best
                                    practices in the ever-evolving tech
                                    landscape.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-white flex">
                    <div className="w-full max-w-6xl px-4 py-6 sm:px-6 md:px-8 lg:px-12 mx-auto">
                        <SectionTitle title="SKILLS & TOOLS" />

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                            {skills.map((skill, index) => (
                                <SkillCard
                                    key={index}
                                    icon={skill.icon}
                                    label={skill.label}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
