export const ExperienceCard = ({
  jobTitle,
  company,
  project,
  period,
  type,
  responsibilities,
  isExpanded,
  onToggle,
  index
}) => {
  return (
    <div className="bg-[#03252e] rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <button
        onClick={onToggle}
        className="w-full p-4 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg"
        aria-expanded={isExpanded}
        aria-controls={`experience-content-${index}`}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-white">{jobTitle}</h3>
            <p className="text-blue-400 font-medium text-base sm:text-lg">{company}</p>
            <p className="text-gray-300 text-sm sm:text-base mt-1">{project}</p>
          </div>
          <div className="flex flex-col sm:items-end">
            <span className="text-sm sm:text-base text-gray-400">{period}</span>
            <span className="inline-block mt-1 px-2 py-1 bg-blue-900 text-blue-200 text-xs sm:text-sm rounded-full">
              {type}
            </span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-400">
            {isExpanded ? 'Click to collapse' : 'Click to expand'}
          </span>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div
        id={`experience-content-${index}`}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isExpanded}
      >
        <div className="p-4 sm:p-6 pt-3 sm:pt-3 border-t border-gray-700">
          <h4 className="font-semibold text-white mb-3 text-base sm:text-lg">Key Responsibilities:</h4>
          <ul className="space-y-2 sm:space-y-3">
            {responsibilities.map((item, i) => (
              <li key={i} className="text-gray-300 text-sm sm:text-base flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};