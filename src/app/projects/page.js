"use client";
import { useState } from "react";
import Navbar from "../__components__/Navbar";
import SectionTitle from "../__components__/ui/SectionTitle";
import ProjectCard from "../__components__/ui/ProjectCard";

export default function projects() {
    const [activeFilter, setActiveFilter] = useState("ALL");

    const projects = [
        {
            title: "Minima",
            image: "/assets/image/projects/minima/minima.png",
            images: [
                "/assets/image/projects/minima/minima2.png",
                "/assets/image/projects/minima/minima1.png",
                "/assets/image/projects/minima/minima3.png",
                "/assets/image/projects/minima/minima4.png",
            ],
            category: "WEB",
            projectDate: "Feb 2025 - May 2025",
            projectLink: "https://github.com/Tanfitra/belajar-laravel",
            technologies: ["Laravel", "Tailwind CSS", "Axios", "MySQL"],
            description:
                "Minima is a minimalist blog platform designed for sharing human stories and ideas, inspired by Medium’s clean and reader-focused interface. The platform allows users to explore, read, and publish articles in a distraction-free environment. This project was developed during my internship at CV Prabubima Tech, where I was responsible for building core features such as article management, user authentication, and responsive UI design. Minima emphasizes simplicity, readability, and accessibility, making it an ideal space for both writers and readers to connect through meaningful content.",
        },
    ];

    const filteredProjects =
        activeFilter === "ALL"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <section className="min-h-screen">
            <Navbar />
            <div className="flex justify-center py-4 sm:py-6 md:py-8">
                <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
                    <div className="max-w-7xl mx-auto">
                        <SectionTitle title="PROJECTS" />

                        <div className="flex justify-center mb-8">
                            <div className="inline-flex rounded-lg border border-[#054354] p-1 bg-[#03252e]">
                                {["ALL", "WEB", "DESKTOP"].map((category) => (
                                    <button
                                        key={category}
                                        onClick={() =>
                                            setActiveFilter(category)
                                        }
                                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                            activeFilter === category
                                                ? "bg-[#054354] text-white"
                                                : "text-[#7ab6c5] hover:text-white hover:bg-[#054354]/50"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                            {filteredProjects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    title={project.title}
                                    image={project.image}
                                    images={project.images}
                                    projectDate={project.projectDate}
                                    projectLink={project.projectLink}
                                    technologies={project.technologies}
                                    description={project.description}
                                    category={project.category}
                                />
                            ))}
                        </div>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-[#7ab6c5] text-lg">
                                    No projects found in this category
                                </div>
                                <button
                                    onClick={() => setActiveFilter("ALL")}
                                    className="mt-4 px-4 py-2 bg-[#054354] hover:bg-[#076481] text-white rounded-lg transition-colors"
                                >
                                    Show All Projects
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
