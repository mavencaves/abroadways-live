import React, { useState, useMemo } from 'react';

// --- Types ---
interface Country {
  name: string;
  flag: string;
  code: string;
}

// --- Data ---
const EDUCATION_LEVELS: string[] = [
  "10th",
  "12th",
  "Bachelor's",
  "Master's",
  "MBBS / MD",
];

// Bangladeshi cities as requested
const CITIES: string[] = [
  'Dhaka', 
  'Chittagong', 
  'Khulna', 
  'Rajshahi', 
  'Sylhet',
  'Mymensingh',
  'Barisal'
];

// Placeholder country data 
const ALL_COUNTRIES: Country[] = [
  { name: 'USA', flag: '🇺🇸', code: 'USA' },
  { name: 'UK', flag: '🇬🇧', code: 'UK' },
  { name: 'Canada', flag: '🇨🇦', code: 'Canada' },
  { name: 'Ireland', flag: '🇮🇪', code: 'Ireland' },
  { name: 'Australia', flag: '🇦🇺', code: 'Australia' },
  { name: 'Germany', flag: '🇩🇪', code: 'Germany' },
  { name: 'Dubai/UAE', flag: '🇦🇪', code: 'UAE' },
  { name: 'New Zealand', flag: '🇳🇿', code: 'NZ' }, 
  { name: 'France', flag: '🇫🇷', code: 'France' },
  { name: 'Sweden', flag: '🇸🇪', code: 'Sweden' },
  { name: 'Belgium', flag: '🇧🇪', code: 'Belgium' },
  { name: 'Italy', flag: '🇮🇹', code: 'Italy' },
  { name: 'Austria', flag: '🇦🇹', code: 'Austria' },
  { name: 'Poland', flag: '🇵🇱', code: 'Poland' },
  { name: 'Latvia', flag: '🇱🇻', code: 'Latvia' },
  { name: 'Lithuania', flag: '🇱🇹', code: 'Lithuania' },
  { name: 'Spain', flag: '🇪🇸', code: 'Spain' },
  { name: 'Netherlands', flag: '🇳🇱', code: 'NL' },
];

/**
 * Renders the Study Abroad Multi-Step Form.
 * This component contains all logic, components, and state management for the flow.
 */
const EligibilitySecondPage: React.FC = () => {
  // Navigation State: Start at Step 2 to match the latest screenshot
  const [step, setStep] = useState<number>(2); 

  // Data States
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('NZ');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedEducation, setSelectedEducation] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  
  const totalSteps = 4;

  // --- Utility Functions ---

  const renderProgressBar = (currentStep: number) => (
    <div className="flex space-x-2 mb-12 w-full">
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        // Steps less than or equal to the current step are colored
        const bgColor = stepNumber <= currentStep ? 'bg-slate-900' : 'bg-gray-200'; 
        return (
          <div
            key={stepNumber}
            className={`h-2 w-1/4 ${bgColor} rounded-full transition-colors duration-300`}
          ></div>
        );
      })}
    </div>
  );

  const getCountryCardClasses = (code: string): string => {
    const isSelected: boolean = selectedCountryCode === code;
    return [
      'flex flex-col items-start p-4 space-y-1 rounded-xl border-2 cursor-pointer transition duration-200 hover:shadow-md h-[90px]',
      isSelected
        ? 'border-indigo-600 bg-indigo-50 shadow-lg ring-2 ring-indigo-300'
        : 'border-gray-100 hover:border-gray-300 bg-white',
    ].join(' ');
  };

  const visibleCountries: Country[] = useMemo(() => {
    return ALL_COUNTRIES.slice(0, isExpanded ? ALL_COUNTRIES.length : 12);
  }, [isExpanded]);

  // --- Step Content Components ---

  const CountrySelectorContent: React.FC = () => (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Choose your dream country
        </h2>
        {/* Scroll Indicator */}
        <svg className="h-5 w-5 text-gray-400 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </div>

      <div className="flex-grow overflow-y-auto pr-2 pb-6" style={{ maxHeight: '500px' }}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {visibleCountries.map((country: Country) => (
            <div
              key={country.code}
              onClick={() => setSelectedCountryCode(country.code)}
              className={getCountryCardClasses(country.code)}
            >
              <div className="text-3xl">{country.flag}</div>
              <span className="text-sm font-medium text-slate-800">{country.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-start">
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-1 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition duration-150"
          >
            <span className="text-xs font-medium text-gray-600">{isExpanded ? 'Less' : 'More'}</span>
            <svg
                className={`w-4 h-4 text-gray-600 transition-transform ${isExpanded ? 'rotate-0' : 'rotate-180'}`}
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 15l7-7 7 7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Next Button for Step 1 */}
      <div className="mt-auto pt-6 border-t border-gray-100 sticky bottom-0 bg-white">
        <button 
          onClick={() => setStep(2)} 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-indigo-500/50 transition duration-300"
        >
          Next
        </button>
      </div>
    </>
  );

  const EducationCitySelectorContent: React.FC = () => (
    <>
      <div className="flex-grow overflow-y-auto pr-2 pb-6">
          
          {/* Education Level Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              What's your highest level of education?
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {EDUCATION_LEVELS.map((level) => (
                <div
                  key={level}
                  onClick={() => setSelectedEducation(level)}
                  className={`flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition duration-200 h-[70px] ${
                    selectedEducation === level
                      ? 'border-indigo-600 bg-indigo-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-400 bg-white'
                  }`}
                >
                  <span className="text-sm font-medium text-slate-800">{level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Current City Selection (Bangladeshi cities) */}
          <div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              Select your current city
            </h2>
            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full p-4 pr-10 border border-gray-300 rounded-xl appearance-none bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              >
                <option value="" disabled>Eg. Dhaka</option>
                {CITIES.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              {/* Custom dropdown arrow to match the screenshot style */}
              <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Next Button for Step 2 */}
        <div className="mt-auto pt-6 border-t border-gray-100 sticky bottom-0 bg-white">
          <button 
            onClick={() => setStep(3)} // Advance to next step
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-indigo-500/50 transition duration-300"
          >
            Next
          </button>
        </div>
    </>
  );


  // --- Main Render Logic (Conditional Component Display) ---
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-['Inter']">
      
      {/* Main Card Container: Splits into two columns on large screens (lg) */}
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-6xl flex flex-col lg:flex-row min-h-[700px]">

        {/* Left Column: Progress and Title */}
        <div className="lg:w-1/3 p-8 sm:p-12 border-b lg:border-r lg:border-b-0 flex flex-col justify-start">
          
          {/* Progress Bar and Back Arrow container */}
          <div className="flex items-center space-x-4">
             {/* Back Arrow Icon (visible on Step 2+) */}
             {step > 1 && (
                <svg
                  onClick={() => setStep(step - 1)}
                  className="w-6 h-6 text-gray-700 cursor-pointer hover:text-slate-900 transition"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            )}
            {/* Render the progress bar */}
            {renderProgressBar(step)}
          </div>
          
          {/* Left Side Title (changes based on step) */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mt-6">
            {step === 1 
              ? 'Start your study abroad journey'
              : 'Are you ready for your study abroad journey?'
            }
          </h1>
        </div>

        {/* Right Column: Dynamic Content (Step 1 or Step 2) */}
        <div className="lg:w-2/3 p-6 sm:p-10 flex flex-col relative">
          
          {step === 1 && <CountrySelectorContent />}
          {step === 2 && <EducationCitySelectorContent />}
          {step > 2 && (
             <div className="p-4 text-center text-gray-600">
               Step {step}: Content Coming Soon!
             </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default EligibilitySecondPage;