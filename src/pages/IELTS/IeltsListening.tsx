const IeltsListening = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className='text-center font-bold text-3xl'>Cambridge-18 Listening Test-1</h1>
        {/* Audio Section */}
        <div className="mt-8 bg-white border border-gray-300 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center ">
            🎧 Listening Test Audio
          </h2>
          <p className="text-lg font-semibold text-gray-700 text-center">
            Cambridge Book 19 Listening Test 1 - Part 1, Question 1–10
          </p>
          <p className="text-md font-medium text-gray-600 text-center mt-2">
            Write <span className="underline">ONE WORD AND/OR A NUMBER</span> for each answer.
          </p>
        </div>

        {/* Question Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mt-10 border border-gray-300">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Hinchingbrooke Country Park
          </h1>

          <div className="space-y-6 text-gray-700 text-base">
            {/* The park section */}
            <div>
              <h2 className="text-xl font-semibold mb-2">The Park</h2>
              <p>
                Area: <span className="font-medium text-gray-900">1. .....................</span> hectares
              </p>
              <p>Habitats: wetland, grassland and woodland</p>
              <p>
                Wetland: lakes, pond and a{' '}
                <span className="font-medium text-gray-900">2. .....................</span>
              </p>
              <p>Wildlife includes birds, insects and animals</p>
            </div>

            {/* Educational Visits Section */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Subjects studied in educational visits include
              </h2>
              <p>
                Science: Children look at{' '}
                <span className="font-medium text-gray-900">3. .....................</span> about plants etc.
              </p>
              <p>
                Geography: includes learning to use a{' '}
                <span className="font-medium text-gray-900">4. .....................</span> and compass
              </p>
              <p>History: changes in land use</p>
              <p>
                Leisure and tourism: mostly concentrates on the park's{' '}
                <span className="font-medium text-gray-900">5. .....................</span>
              </p>
              <p>
                Music: Children make{' '}
                <span className="font-medium text-gray-900">6. .....................</span> with natural
                materials, and experiment with rhythm and speed.
              </p>
              <p>
                They give children a feeling of{' '}
                <span className="font-medium text-gray-900">7. .....................</span> that they may not
                have elsewhere.
              </p>
              <p>
                Children learn new{' '}
                <span className="font-medium text-gray-900">8. .....................</span> and gain
                self-confidence.
              </p>
            </div>

            {/* Practical Issues */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Practical Issues</h2>
              <p>
                Cost per child: £
                <span className="font-medium text-gray-900">9. .....................</span>
              </p>
              <p>
                Adults, such as{' '}
                <span className="font-medium text-gray-900">10. .....................</span>, free
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IeltsListening;
