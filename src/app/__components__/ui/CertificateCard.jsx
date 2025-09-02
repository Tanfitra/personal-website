import Image from "next/image";
import { FaSearchPlus, FaLink, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

export default function CertificateCard({ cert, onZoom }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group 
                    transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-4 border-white">
      <div className="relative w-full h-48 md:h-56 lg:h-52 xl:h-56 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse" />
        )}
        <Image
          src={cert.img}
          alt={cert.title || "Certificate"}
          width={600}
          height={400}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="p-4 block md:hidden group-hover:hidden transition-opacity">
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">
          {cert.title || "Professional Certificate"}
        </h3>
        <p className="text-gray-600 text-xs mt-1">{cert.issuer || "Issuing Organization"}</p>
        <p className="text-gray-500 text-xs mt-1">{cert.date || ""}</p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 opacity-0 
                      group-hover:opacity-100 flex flex-col justify-between p-4 transition-all duration-300">
        
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-bold text-white text-sm md:text-base line-clamp-2">
            {cert.title || "Professional Certificate"}
          </h3>
          <p className="text-gray-200 text-xs mt-1">{cert.issuer || "Issuing Organization"}</p>
        </div>

        <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 
                        transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={() => onZoom(cert)}
            className="bg-white p-3 rounded-full shadow-md hover:bg-blue-50 hover:scale-110 
                       transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="View certificate details"
          >
            <FaSearchPlus className="text-gray-800 text-lg" />
          </button>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full shadow-md hover:bg-blue-50 hover:scale-110 
                       transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Open certificate link"
          >
            <FaExternalLinkAlt className="text-gray-800 text-lg" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-2 right-2 flex gap-2 md:hidden">
        <div className="bg-black/60 text-white rounded-full p-1">
          <FaSearchPlus className="text-xs" />
        </div>
        <div className="bg-black/60 text-white rounded-full p-1">
          <FaExternalLinkAlt className="text-xs" />
        </div>
      </div>
    </div>
  );
}