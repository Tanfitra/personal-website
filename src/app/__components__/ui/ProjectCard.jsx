"use client";
import Image from "next/image";
import { useState } from "react";
import { 
  FaGithub, 
  FaGlobe, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight,
  FaInfo,
  FaLock,

} from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql,
  SiTailwindcss,
  SiAxios
} from "react-icons/si";

export default function ProjectCard({ 
  title, 
  image, 
  description, 
  category, 
  projectDate, 
  projectLink,
  webLink,
  technologies,
  images = []
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = [image, ...images];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const techArray = Array.isArray(technologies) 
    ? technologies 
    : (typeof technologies === 'string' 
        ? technologies.split(',').map(tech => tech.trim()) 
        : ['Java', 'Java GUI', 'Queue Algorithm']);

  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    if (techLower.includes('react') || techLower.includes('react')) return <SiReact className="text-blue-400" />;
    if (techLower.includes('node') || techLower.includes('node.js')) return <SiNodedotjs className="text-green-500" />;
    if (techLower.includes('express')) return <SiExpress className="text-gray-300" />;
    if (techLower.includes('mongo')) return <SiMongodb className="text-green-600" />;
    if (techLower.includes('laravel')) return <FaLaravel className="text-red-500" />;
    if (techLower.includes('mysql')) return <SiMysql className="text-blue-500" />;
    if (techLower.includes('tailwind')) return <SiTailwindcss className="text-cyan-400" />;
    if (techLower.includes('axios')) return <SiAxios className="text-gray-500" />;
    return null;
  };

  return (
    <>
      <div className="relative group rounded-xl overflow-hidden shadow-lg bg-[#03252e] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] w-full h-full flex flex-col">
        {/* Category Badge */}
        <div className="absolute top-2 right-2 z-10">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            category === 'WEB' 
              ? 'bg-green-500 text-white' 
              : category === 'ANDROID'
              ? 'bg-orange-500 text-white'
              : 'bg-blue-500 text-white'
          }`}>
            {category}
          </span>
        </div>
        
        {/* Title */}
        <h2 className="text-center text-lg sm:text-xl font-bold text-white py-3 px-2 bg-[#03252e] backdrop-blur-sm truncate">
          {title}
        </h2>

        {/* Image Container */}
        <div className="relative aspect-video flex-1">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9dfKbWRo3I0xNkIDhqRGlqMXC7QxIOzKhHRTwlKJCI9kCVfEpyBpW4hMl6qWU4ObJQ4B//2Q=="
          />

          {/* Hover Overlay */}
          <div 
            className="absolute inset-0 bg-[#03252e]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="text-center p-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mx-auto mb-3">
                <FaInfo className="text-white text-xl sm:text-2xl" />
              </div>
              <p className="text-white text-sm sm:text-base font-medium">View Details</p>
            </div>

            {/* Corner brackets */}
            <span className="absolute top-2 left-2 w-4 h-4 sm:top-3 sm:left-3 sm:w-6 sm:h-6 border-t-2 border-l-2 border-white"></span>
            <span className="absolute top-2 right-2 w-4 h-4 sm:top-3 sm:right-3 sm:w-6 sm:h-6 border-t-2 border-r-2 border-white"></span>
            <span className="absolute bottom-2 left-2 w-4 h-4 sm:bottom-3 sm:left-3 sm:w-6 sm:h-6 border-b-2 border-l-2 border-white"></span>
            <span className="absolute bottom-2 right-2 w-4 h-4 sm:bottom-3 sm:right-3 sm:w-6 sm:h-6 border-b-2 border-r-2 border-white"></span>
          </div>
        </div>

        {/* Quick Info Footer */}
        <div className="p-3 bg-[#03252e] border-t border-[#054354]">
          <div className="flex justify-between items-center text-xs text-[#7ab6c5]">
            <span>{projectDate || 'Jun 2020 - Jul 2020'}</span>
            <div className="flex gap-2">
              {projectLink && (
                <FaGithub className="text-green-400" title="GitHub Available" />
              )}
              {webLink && (
                <FaGlobe className="text-blue-400" title="Live Demo Available" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#03252e]/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50 overflow-y-auto" onClick={() => setIsModalOpen(false)}>
          <div className="bg-[#03252e] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#054354] shadow-2xl mx-2 sm:mx-4" onClick={e => e.stopPropagation()}>
            
            {/* Header */}
            <div className="sticky top-0 bg-[#03252e] border-b border-[#054354] p-4 sm:p-6 z-10">
              <div className="flex justify-between items-start">
                <div className="flex-1 min-w-0 mr-4">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 break-words">{title}</h1>
                  <h2 className="text-lg text-[#7ab6c5] mb-3 sm:mb-4">{category}</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#054354] to-[#076481] rounded-full"></div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#7ab6c5] hover:text-white text-2xl font-bold transition-colors p-1 sm:p-2 flex-shrink-0"
                  aria-label="Close"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Project Images Carousel */}
            <div className="relative p-4 sm:p-6">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-3 sm:mb-4">
                <Image
                  src={allImages[currentImageIndex]}
                  alt={`${title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                
                {/* Navigation arrows */}
                {allImages.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110"
                      aria-label="Previous image"
                    >
                      <FaChevronLeft className="text-sm sm:text-base" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110"
                      aria-label="Next image"
                    >
                      <FaChevronRight className="text-sm sm:text-base" />
                    </button>
                  </>
                )}
                
                {/* Image counter */}
                {allImages.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                    {currentImageIndex + 1} / {allImages.length}
                  </div>
                )}
              </div>

              {/* Image thumbnails */}
              {allImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-2 scrollbar-thin scrollbar-thumb-[#054354] scrollbar-track-[#03252e]">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'border-[#076481] scale-105' 
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        width={80}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Information */}
            <div className="p-4 sm:p-6 border-t border-[#054354]">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Project Information</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-[#7ab6c5] font-semibold text-sm sm:text-base min-w-[100px]">Category:</span>
                    <span className="text-white text-sm sm:text-base">{category}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-[#7ab6c5] font-semibold text-sm sm:text-base min-w-[100px]">Project Date:</span>
                    <span className="text-white text-sm sm:text-base">{projectDate || 'Jun 2020 - Jul 2020'}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                    <span className="text-[#7ab6c5] font-semibold text-sm sm:text-base min-w-[100px]">Find more:</span>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      <div className="flex items-center gap-2">
                        {projectLink ? (
                          <a 
                            href={projectLink} 
                            className="flex items-center gap-2 text-[#76c7e0] hover:text-white transition-colors group"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <FaGithub className="text-lg" />
                            <span className="text-sm group-hover:underline">GitHub</span>
                          </a>
                        ) : (
                          <span className="flex items-center gap-2 text-red-400">
                            <FaLock className="text-sm" />
                            <span className="text-sm">GitHub (Private)</span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {webLink ? (
                          <a 
                            href={webLink} 
                            className="flex items-center gap-2 text-[#76c7e0] hover:text-white transition-colors group"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <FaGlobe className="text-lg" />
                            <span className="text-sm group-hover:underline">Live Website</span>
                          </a>
                        ) : (
                          <span>
                            
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <span className="text-[#7ab6c5] font-semibold text-sm sm:text-base">Technologies: </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {techArray.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-[#054354] text-[#a8d1db] rounded-full text-xs sm:text-sm flex items-center gap-2"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="p-4 sm:p-6 border-t border-[#054354]">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Description</h3>
              <p className="text-[#a8d1db] leading-relaxed text-sm sm:text-base text-justify">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}