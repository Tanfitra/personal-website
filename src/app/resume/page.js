"use client";
import { useState, useEffect } from "react";
import Navbar from "../__components__/Navbar";

export default function Resume() {
  const [pdfUrl, setPdfUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPdf = async () => {
      try {
        setIsLoading(true);
        setError("");
        
        const response = await fetch('/assets/Adhim%20Tanfitra_CV.pdf');
        
        if (!response.ok) {
          throw new Error(`Failed to load PDF: ${response.status} ${response.statusText}`);
        }
        
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading PDF:', err);
        setError(err.message || 'Failed to load the resume. Please try again later.');
        setIsLoading(false);
      }
    };

    loadPdf();

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, []);

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Adhim_Tanfitra_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const MobilePdfViewer = () => (
    <div className="flex flex-col items-center justify-center h-96 bg-gray-800 rounded-lg p-6 text-center">
      <svg 
        className="w-16 h-16 text-blue-500 mb-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
        />
      </svg>
      <p className="text-white text-lg mb-2">Resume Preview</p>
      <p className="text-gray-300 mb-4">
        For the best experience, please download the resume to view it on your device.
      </p>
      <button
        onClick={handleDownload}
        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg flex items-center gap-2 transition-colors"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
          />
        </svg>
        Download Resume
      </button>
    </div>
  );

  return (
    <section className="min-h-screen">
      <Navbar />
      <div className="w-full max-w-6xl mt-8 px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          My Resume
        </h1>
        <p className="text-gray-400 text-center mb-6 md:mb-8">
          Download or view my professional resume
        </p>

        <div className="flex justify-center mb-6">
          <button
            onClick={handleDownload}
            disabled={isLoading || error}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
            Download Resume
          </button>
        </div>

        {isLoading && !error && (
          <div className="flex flex-col items-center justify-center h-96 bg-gray-800 rounded-lg">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mb-4"></div>
            <p className="text-gray-300">Loading resume...</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center h-96 bg-gray-800 rounded-lg p-6 text-center">
            <svg 
              className="w-16 h-16 text-red-500 mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <p className="text-red-400 text-lg mb-2">Oops! Something went wrong</p>
            <p className="text-gray-300 mb-4">{error}</p>
            <p className="text-gray-400 text-sm">
              Please make sure the file "Adhim_Tanfitra_CV.pdf" is located in the public/assets folder.
            </p>
          </div>
        )}

        {pdfUrl && !isLoading && !error && (
          <>
            <div className="hidden md:block w-full h-[70vh] bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <iframe
                src={pdfUrl}
                className="w-full h-full border-0"
                title="Adhim Tanfitra Resume"
              ></iframe>
            </div>
            
            <div className="md:hidden">
              <MobilePdfViewer />
            </div>
          </>
        )}
      </div>
    </section>
  );
}