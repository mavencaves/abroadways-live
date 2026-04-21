import { FaFileAlt, FaRobot, FaChartLine } from 'react-icons/fa';

function SopPart2() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-lg text-gray-700">
          Discover how our Visa Predictor analyzes your academic, financial, and personal details to instantly
          estimate your study visa approval chances.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Upload Documents */}
        <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
          <div className="text-blue-600 text-6xl mb-4">
            <FaFileAlt /> {/* Document icon */}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Upload Documents</h3>
          <p className="text-gray-600">
            Upload your passport, transcripts, IELTS score, etc.
          </p>
        </div>

        {/* Card 2: AI Analysis */}
        <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
          <div className="text-blue-600 text-6xl mb-4">
            <FaRobot /> {/* Robot icon */}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Analysis</h3>
          <p className="text-gray-600">
            Our AI model instantly analyzes your profile based on current visa trends.
          </p>
        </div>

        {/* Card 3: Get Prediction */}
        <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
          <div className="text-blue-600 text-6xl mb-4">
            <FaChartLine /> {/* Graph icon */}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Prediction</h3>
          <p className="text-gray-600">
            View your visa approval likelihood with suggestions to improve.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SopPart2;