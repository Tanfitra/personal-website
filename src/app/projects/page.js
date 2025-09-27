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
            projectDate: "February 2025 - May 2025",
            projectLink: "https://github.com/Tanfitra/belajar-laravel",
            technologies: ["Laravel", "Tailwind CSS", "Axios", "MySQL"],
            description:
                "Minima is a minimalist blog platform designed for sharing human stories and ideas, inspired by Medium’s clean and reader-focused interface. The platform allows users to explore, read, and publish articles in a distraction-free environment. This project was developed during my internship at CV Prabubima Tech, where I was responsible for building core features such as article management, user authentication, and responsive UI design. Minima emphasizes simplicity, readability, and accessibility, making it an ideal space for both writers and readers to connect through meaningful content.",
        },
        {
            title: "VeggieVine",
            image: "/assets/image/projects/veggievine/veggievine.png",
            images: [
                "/assets/image/projects/veggievine/veggievine2.png",
                "/assets/image/projects/veggievine/veggievine3.png",
                "/assets/image/projects/veggievine/veggievine4.png",
                "/assets/image/projects/veggievine/veggievine5.png",
                "/assets/image/projects/veggievine/veggievine6.png",
                "/assets/image/projects/veggievine/veggievine7.png",
            ],
            category: "WEB",
            projectDate: "April 2024 - June 2024",
            projectLink: "https://github.com/VeggieVine",
            technologies: [
                "Next.js",
                "Laravel",
                "Redux",
                "Axios",
                "SQLite",
                "DaisyUI",
                "Tailwind CSS",
            ],
            description:
                "VeggieVine is an innovative e-commerce platform that connects local farmers in the JABODETABEK area with consumers, offering a wide selection of fresh, organic fruits and vegetables. Designed as a modern and responsive web application, it provides a user-friendly online marketplace where customers can easily browse, order, and have healthy produce delivered directly to their doorstep. The platform includes secure user authentication, a comprehensive product catalog, and an intuitive shopping cart that allows seamless checkout. Integrated with a reliable payment gateway, VeggieVine ensures safe online transactions, while advanced searching and filtering features make it easy for users to find the exact products they need. Customers also receive real-time notifications for order activities, enhancing the overall shopping experience. Developed as the final project during my independent study program at Dicoding Indonesia, VeggieVine not only promotes healthy living but also supports local agriculture through technology-driven solutions.",
        },
        {
            title: "Forum App",
            image: "/assets/image/projects/forum-app/forum.png",
            images: [
                "/assets/image/projects/forum-app/forum2.png",
                "/assets/image/projects/forum-app/forum3.png",
            ],
            category: "WEB",
            projectDate: "17 May 2024 - 24 May 2024",
            projectLink: "https://github.com/Tanfitra/Forum-App",
            technologies: [
                "React",
                "Redux",
                "Vitest",
                "Cypress",
                "Storybook",
                "Tailwind CSS",
            ],
            description:
                "Forum App is a web-based platform designed to facilitate community-driven discussions. It provides secure user authentication, allowing individuals to create accounts, log in, and manage their profiles. Users can easily start new topics, categorize them by subjects, and participate in structured threaded discussions that make conversations easier to follow. To enhance engagement, the app supports upvoting and downvoting on both topics and comments, helping surface the most valuable content. Additionally, users can filter discussions by category, ensuring a more personalized browsing experience. Built with modern front-end technologies such as React for the interface, Redux for state management, and React Router for seamless navigation, Forum App showcases the implementation of scalable and interactive features for an engaging online forum.",
        },
        {
            title: "RecipeIn",
            image: "/assets/image/projects/recipein/recipein.png",
            images: [
                "/assets/image/projects/recipein/recipein2.png",
                "/assets/image/projects/recipein/recipein3.png",
                "/assets/image/projects/recipein/recipein4.png",
                "/assets/image/projects/recipein/recipein5.png",
                "/assets/image/projects/recipein/recipein6.png",
                "/assets/image/projects/recipein/recipein7.png",
            ],
            category: "WEB",
            projectDate: "November 2023 - December 2023",
            projectLink: "https://github.com/RecipeIn",
            technologies: [
                "React",
                "Express",
                "Redux",
                "Axios",
                "MySQL",
                "Tailwind CSS",
            ],
            description:
                "RecipeIn is a recipe-sharing platform that helps users easily discover and share healthy recipes along with detailed nutritional information. It offers personalized menu recommendations, daily nutritional intake tracking, and an advanced search feature that allows users to find recipes based on available or excluded ingredients. With RecipeIn, cooking becomes simpler, healthier, and more enjoyable. This project was developed as the final project during my independent study program at Infinite Learning.",
        },
        {
            title: "Administration App",
            image: "/assets/image/projects/desktop.png",
            images: [],
            category: "DESKTOP",
            projectDate: "June 2023 - July 2023",
            projectLink:
                "https://github.com/Tanfitra/FinalProject_PemrogramanVisual",
            technologies: ["CSharp", "MySQL"],
            description:
                "The School Administration System is a desktop application developed using C# and MySQL to streamline administrative tasks in schools. The application provides features such as student registration, tuition fee (SPP) payments, academic year management, and reporting for both students and payments. It also includes an admin panel for managing user access and monitoring school operations efficiently.By integrating a user-friendly interface with a reliable database system, this project enables schools to manage essential administrative processes more effectively, reducing manual work and improving accuracy in handling student and financial record",
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
