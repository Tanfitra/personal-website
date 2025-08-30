"use client";
import Navbar from "../__components__/Navbar";
import SectionTitle from "../__components__/SectionTitle";
import { useState } from "react";
import { ExperienceCard } from "../__components__/ExperienceCard";

const experiences = [
    {
        jobTitle: "Web Developer",
        company: "Prabubima Tech",
        project: "",
        period: "Feb 2025 – May 2025",
        type: "Internship",
        responsibilities: [
            "Learned and practiced Laravel framework during the internship.",
            "Developed a personal project using Laravel framework.",
            "Created an article publishing platform with features similar to Medium.",
            "Implemented WYSIWYG editor for article content creation.",
            "Designed responsive UI using Tailwind CSS and Alpine.js.",
            "Integrated MySQL database for data storage and management.",
        ],
    },
    {
        jobTitle: "React & Back End Developer || SIB Dicoding Cycle 6",
        company: "Dicoding Academy",
        project:
            "Certified Independent Study (Studi Independen Bersertifikat or SIB) Dicoding Cycle 6 is part of the Kampus Merdeka program, which aims to produce high-standard talents aligned with industry standards. The learning process is conducted through online learning, where participants are required to implement the acquired materials directly through projects and tasks to complete each module.",
        period: "Feb 2024 – Jun 2024",
        type: "Apprenticeship",
        responsibilities: [
            "Completed all courses under the selected learning path (React & Back End Development), each awarded with individual certificates.",
            "Collaborated in a final group project (3 members) called Veggievine, an online shop platform for local farmers in JABODETABEK.",
            "Handled the Front-End development using Next.js and Redux to build a modern and responsive user interface.",
            "Implemented key features such as product catalog, shopping cart, searching and filtering, and notification system.",
            "Integrated Midtrans for secure online payment transactions.",
            "Deployed the application on Vercel for authentication, real-time database, and hosting.",
            "Coordinated with the backend developer who built the API using Laravel.",
        ],
    },
    {
        jobTitle: "Web Developer Mentee || Independent Study",
        company: "Infinite Learning Indonesia",
        period: "Aug 2023 – Dec 2023",
        type: "Apprenticeship",
        responsibilities: [
            "Participated in an intensive online mentorship program with live classes via Zoom, guided directly by industry mentors.",
            "Worked on three levels of projects (Micro, Macro, and Massive) to apply acquired skills in real-world scenarios.",
            "Collaborated with both Web and Mobile teams in the Massive Project phase to build Recipein, a recipe-sharing platform.",
            "Served as Front-End Developer, responsible for designing and implementing the user interface and integrating APIs.",
            "Developed features enabling users to share, search, and discover healthy recipes with detailed nutritional information.",
            "Utilized React, Tailwind CSS, and Axios for the front-end, integrated with Express.js and MySQL for backend and database management.",
        ],
    },
];

export default function ExperiencePage() {
    const [expandedCards, setExpandedCards] = useState({});

    const toggleExpand = (index) => {
        setExpandedCards((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <section className="min-h-screen">
            <Navbar />
            <div className="text-white flex justify-center py-4 sm:py-6 md:py-8">
                <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
                    <SectionTitle title="EXPERIENCE" />

                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        {experiences.map((exp, index) => (
                            <ExperienceCard
                                key={index}
                                {...exp}
                                isExpanded={expandedCards[index]}
                                onToggle={() => toggleExpand(index)}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
