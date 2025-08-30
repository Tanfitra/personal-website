"use client"
import Navbar from "../__components__/Navbar";
import SectionTitle from "../__components__/SectionTitle";
import CertificateCard from "../__components__/CertificateCard";
import CertificateModal from "../__components__/CertificateModal";
import Image from "next/image";
import { useState } from "react";

export default function Education() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const certificates = [
        {
            id: 1,
            img: "/assets/image/certifications/dasar-ai.jpg",
            link: "https://www.dicoding.com/certificates/81P2LYNWNZOY",
            title: "Belajar Dasar AI",
            issuer: "Dicoding Indonesia",
        },
        {
            id: 2,
            img: "/assets/image/certifications/backend-pemula.jpg",
            link: "https://www.dicoding.com/certificates/MRZME8LW0PYQ",
            title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
            issuer: "Dicoding Indonesia",
        },
        {
            id: 3,
            img: "/assets/image/certifications/meniti-karier.jpg",
            link: "https://www.dicoding.com/certificates/RVZKRO8DOPD5",
            title: "Meniti Karier sebagai Software Developer",
            issuer: "Dicoding Indonesia",
        },
        {
            id: 4,
            img: "/assets/image/certifications/react-expert.png",
            link: "https://www.dicoding.com/certificates/MEPJNY42QX3V",
            title: "Menjadi React Web Developer Expert",
            issuer: "Dicoding Indonesia",
        },
        {
            id: 5,
            img: "/assets/image/certifications/react-fundamental.png",
            link: "https://www.dicoding.com/certificates/1OP8WYKGLXQK",
            title: "Menjadi Fundamental Aplikasi Web dengan React",
            issuer: "Dicoding Indonesia",
        },
        {
            id: 6,
            img: "/assets/image/certifications/javascript-dasar.png",
            link: "https://www.dicoding.com/certificates/GRX5Q80MKZ0M",
            title: "Belajar Dasar Pemrograman Javascript",
            issuer: "Dicoding Indonesia",
        },
        {
            id: 7,
            img: "/assets/image/certifications/react-web.png",
            link: "https://www.dicoding.com/certificates/0LZ02KG40X65",
            title: "Belajar Membuat Aplikasi Web dengan React",
            issuer: "Dicoding Indonesia",
        },
        {
            id: 8,
            img: "/assets/image/certifications/frontend-pemula.png",
            link: "https://www.dicoding.com/certificates/6RPNVL878Z2M",
            title: "Belajar Membuat Front-End Web untuk Pemula",
            issuer: "Dicoding Indonesia",
        },
        {
            id: 9,
            img: "/assets/image/certifications/redhat.png",
            link: "https://drive.google.com/file/d/18NMHKa42AwINTg68I-QxUyyUrnUOtRzE/view?usp=sharing",
            title: "RH 124 : Red Hat Enterprise Linux System Administration I",
            issuer: "Red Hat",
        },
        {
            id: 10,
            img: "/assets/image/certifications/sertifikat-dot.png",
            link: "https://drive.google.com/file/d/18NMHKa42AwINTg68I-QxUyyUrnUOtRzE/view?usp=sharing",
            title: "Applied Microsoft Office",
            issuer: "Trust Training Partners",
        },
        {
            id: 11,
            img: "/assets/image/certifications/git.png",
            link: "https://www.dicoding.com/certificates/KEXL8QQ1YZG2",
            title: "Belajar Dasar Git dengan GitHub",
            issuer: "Dicoding Indonesia",
        },
        {
            id: 12,
            img: "/assets/image/certifications/web-dasar.png",
            link: "https://www.dicoding.com/certificates/L4PQQL39OPO1",
            title: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
        },
        {
            id: 13,
            img: "/assets/image/certifications/sertifikat-basing.png",
            link: "https://drive.google.com/file/d/1ECJsU0ojQFN6mk-0a4ddH0k9fpLM1tl2/view?usp=sharing",
            title: "English Sertification Program",
            issuer: "Amikom Purwokerto University",
        },
        {
            id: 14,
            img: "/assets/image/certifications/pemrograman-dasar.png",
            link: "https://www.dicoding.com/certificates/JLX12R5RNZ72",
            title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
            issuer: "Dicoding Indonesia",
        },
        {
            id: 15,
            img: "/assets/image/certifications/logika-pemrograman.png",
            link: "https://www.dicoding.com/certificates/4EXGKJW8GZRL",
            title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
            issuer: "Dicoding Indonesia",
        },
        {
            id: 16,
            img: "/assets/image/certifications/best-merge-product.png",
            link: "https://drive.google.com/file/d/15F26pU6WwlISmRLacqSg4c2uYjxQ6Gxs/view?usp=sharing",
            title: "Best Merge Product",
            issuer: "Infinite Learning",
        },
    ];

    return (
            <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
                <Navbar />
                
                {/* Education Section */}
                <div className="text-white flex justify-center py-8">
                    <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
                        <SectionTitle title="EDUCATION" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            {/* Education Card 1 */}
                            <div className="bg-[#03252e] rounded-xl shadow-lg overflow-hidden text-white transform transition-transform duration-300 hover:scale-[1.02]">
                                <div className="relative w-full h-48">
                                    <Image
                                        src="/assets/image/amikom-purwokerto.png"
                                        alt="Universitas Amikom Purwokerto"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#03252e] to-transparent opacity-90"></div>
                                </div>

                                <div className="p-5">
                                    <h3 className="text-lg font-semibold mb-1">
                                        Universitas Amikom Purwokerto
                                    </h3>
                                    <p className="text-sm text-gray-300 mb-3">
                                        Sep 2021 – Sep 2025
                                    </p>
                                    <p className="italic text-sm mt-2 text-blue-200">
                                        Bachelor's Degree in Computer Science – S.Kom.
                                    </p>
                                    <div className="flex items-center mt-4">
                                        <span className="bg-[#01161b] text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">
                                            GPA: 3.53/4.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Certifications Section */}
                <div className="text-white flex justify-center pb-12">
                    <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
                        <SectionTitle title="CERTIFICATIONS" />
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            {certificates.map((cert, index) => (
                                <CertificateCard
                                    key={cert.id}
                                    cert={cert}
                                    onZoom={() => setSelectedIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Modal */}
                <CertificateModal
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                    certificates={certificates}
                />
            </section>
    );
}