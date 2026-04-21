

const SopFirst = () => {

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Check Your Study Visa Chances Instantly
          </h1>
          <p className="text-lg text-gray-700">
            Our AI-powered predictor estimates your approval rate in seconds based on
            key eligibility factors.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out self-start">
            Try Visa Predictor Now
          </button>
        </div>

        {/* Right Section - Images */}
        <div className="grid grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/globe-book.jpg"
              alt="Globe on books"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/subway.jpg"
              alt="Subway station sign"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/success2.webp" // Replace with your actual image path
              alt="Library interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/library.jpg" // Replace with your actual image path
              alt="Person studying"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default SopFirst;