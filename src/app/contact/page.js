"use client";
import Navbar from "../__components__/Navbar";
import SectionTitle from "../__components__/ui/SectionTitle";
import { Card, CardContent } from "../__components__/ui/ContactCard";
import {
    FaLinkedin,
    FaInstagram,
    FaTiktok,
    FaGithub,
    FaSpotify,
    FaYoutube,
    FaDiscord,
    FaPaypal,
} from "react-icons/fa";
import { FaXTwitter, FaMedium, FaThreads } from "react-icons/fa6";

export default function Contact() {
    const socialLinks = {
        linkedin: "https://www.linkedin.com/in/adhimtanfitra/",
        twitter: "https://x.com/adhim_t",
        threads: "https://threads.net/adhim_t",
        instagram: "https://instagram.com/adhim_t",
        tiktok: "https://tiktok.com/@tanfitra",
        github: "https://github.com/Tanfitra",
        spotify: "https://open.spotify.com/user/adhim_t?si=4433c91a7164478c",
        youtube: "https://www.youtube.com/@tanfitra1942",
    };

    const otherLinks = {
        discord: "https://discord.com/channels/@me/443746079243108363",
        medium: "https://medium.com/@tanfitraadhim",
        // paypal: "https://paypal.com",
    };

    return (
        <section className="min-h-screen bg-[#01161b]">
            <Navbar />
            <div className="text-white flex justify-center py-8">
                <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
                    <SectionTitle title="CONTACT" />
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Email Card */}
                        <Card className="bg-[#03252e] rounded-2xl shadow-lg border border-teal-700/30 hover:border-teal-500/50 transition-all duration-300">
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="bg-[#1a2c3d] p-4 rounded-full flex-shrink-0">
                                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-blue-400 font-bold text-lg">
                                        Email
                                    </h2>
                                    <a 
                                        href="mailto:tanfitraadhim@gmail.com" 
                                        className="text-white hover:text-teal-300 transition-colors duration-200 break-words"
                                    >
                                        tanfitraadhim@gmail.com
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Social Network Card */}
                        <Card className="bg-[#03252e] rounded-2xl shadow-lg border border-teal-700/30 hover:border-teal-500/50 transition-all duration-300">
                            <CardContent className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6">
                                <div className="bg-[#1a2c3d] p-4 rounded-full flex-shrink-0">
                                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                    </svg>
                                </div>
                                <div className="flex-1 w-full">
                                    <h2 className="text-blue-400 font-bold text-lg mb-2">
                                        Social Network
                                    </h2>
                                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 text-white text-2xl">
                                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1a2c3d] rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors duration-200">
                                            <FaLinkedin className="text-[#0077B5]" />
                                        </a>
                                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1a2c3d] rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors duration-200">
                                            <FaXTwitter />
                                        </a>
                                        <a href={socialLinks.threads} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1a2c3d] rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors duration-200">
                                            <FaThreads />
                                        </a>
                                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1a2c3d] rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors duration-200">
                                            <FaInstagram className="text-[#E1306C]" />
                                        </a>
                                        <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1a2c3d] rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors duration-200">
                                            <FaTiktok className="text-[#FF0050]" />
                                        </a>
                                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1a2c3d] rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors duration-200">
                                            <FaGithub />
                                        </a>
                                        <a href={socialLinks.spotify} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1a2c3d] rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors duration-200">
                                            <FaSpotify className="text-[#1DB954]" />
                                        </a>
                                        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1a2c3d] rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors duration-200">
                                            <FaYoutube className="text-[#FF0000]" />
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Others Card */}
                        <Card className="bg-[#03252e] rounded-2xl shadow-lg md:col-span-2 border border-teal-700/30 hover:border-teal-500/50 transition-all duration-300">
                            <CardContent className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6">
                                <div className="bg-[#1a2c3d] p-4 rounded-full flex-shrink-0">
                                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                                    </svg>
                                </div>
                                <div className="flex-1 w-full">
                                    <h2 className="text-blue-400 font-bold text-lg mb-2">
                                        Others
                                    </h2>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 text-white text-2xl">
                                        <a href={otherLinks.discord} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1a2c3d] rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors duration-200">
                                            <FaDiscord className="text-[#5865F2]" />
                                        </a>
                                        <a href={otherLinks.medium} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1a2c3d] rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors duration-200">
                                            <FaMedium className="text-black" />
                                        </a>
                                        {/* <a href={otherLinks.paypal} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#1a2c3d] rounded-lg flex items-center justify-center hover:bg-teal-700 transition-colors duration-200">
                                            <FaPaypal className="text-[#00457C]" />
                                        </a> */}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}