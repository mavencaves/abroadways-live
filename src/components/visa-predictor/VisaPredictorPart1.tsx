function VisaPredictorPart1(){
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text Content */}
        <div className="flex flex-col space-y-6 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            AI-Powered SOP <br /> Predictor
          </h1>
          <p className="text-lg text-gray-700">
            Get instant feedback on your Statement of Purpose for studying abroad.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out self-center lg:self-start">
            Try Now
          </button>
        </div>

        {/* Right Section - Placeholder Grey Box */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md h-80 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-500 text-lg">
           
            <img src={"https://fintechnews.sg/wp-content/uploads/2024/03/Visa-Set-to-Roll-out-New-AI-Powered-Fraud-Prevention-Solutions.jpg"} alt={"visa"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisaPredictorPart1;