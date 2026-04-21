


const mcqQuestions = [
  "1. What is the writer’s main purpose in the first paragraph?",
  "2. According to the writer, what view about cities did some 20th‑century writers hold?",
  "3. What is the writer doing in the third paragraph?",
  "4. What point does the writer make about cities in the fourth paragraph?",
  "5. What does the writer suggest about cities in the final paragraph?",
];

const ynQuestions = [
  "6. Environmentalists have had a major influence on city planning policies in the 21st century.",
  "7. Cars are banned from occupying most of the land in city centres.",
  "8. Urban environments are less healthy than rural ones.",
  "9. People are unlikely to stop using cars.",
  "10. A large number of city residents walk to work.",
];

export default function ReadingTestStyled() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white border border-gray-700 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-serif font-bold text-center text-indigo-800 mb-8">
          Cambridge-18 READING PASSAGE 1
        </h1> 
        <h2 className="text-3xl font-bold text-center my-5"> Urban farming</h2>
        <p className="text-xl">In Paris, urban farmers are trying a soil-free approach to agriculture that uses less space and fewer resources.<br>
        </br> Could it help cities face the threats to our food supplies?

On top of a striking new exhibition hall in southern Paris, the world’s largest urban rooftop farm has started to bear fruit.<br>
</br> Strawberries that are small, intensely flavoured and resplendently red sprout abundantly from large plastic tubes. Peer inside and you see the tubes are completely hollow, the roots of dozens of strawberry plants dangling down inside them.<br>
</br> From identical vertical tubes nearby burst row upon row of lettuces; near those are aromatic herbs, such as basil, sage and peppermint.<br>
</br> Opposite, in narrow, horizontal trays packed not with soil but with coconut fibre, grow cherry tomatoes, shiny aubergines and brightly coloured chards.</p>

        {/* Questions 1–5 */}
        <section className="mb-10">
          <h2 className="text-xl font-medium text-gray-700 my-10">
            Questions 1–5: Choose the correct letter, <span className="italic">A, B or C</span>. Write your answers in boxes 1–5.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {mcqQuestions.map((text, i) => (
              <div key={i} className="space-y-2">
                <p className="font-serif text-gray-800">{text}</p>
                <input
                  id={`q${i + 1}`}
                  type="text"
                  placeholder="A / B / C"
                  className="w-20 px-3 py-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Questions 6–10 */}
        <section className="mb-10">
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Questions 6–10: Write <span className="italic">YES / NO / NOT GIVEN</span> for the following statements.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {ynQuestions.map((text, i) => (
              <div key={i} className="space-y-2">
                <p className="font-serif text-gray-800">{text}</p>
                <input
                  id={`q${6 + i}`}
                  type="text"
                  placeholder="YES / NO / NOT GIVEN"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Questions 11–13 */}
        <section className="mb-8">
          <h2 className="text-xl font-medium text-gray-700 mb-4">
            Questions 11–13: Complete the summary below. Choose <span className="italic">ONE WORD ONLY</span> from the passage.
          </h2>
          <ol className="list-decimal list-inside space-y-6 text-gray-800">
            <li className="flex items-baseline">
              <span className="mr-2">
                The writer argues that cities have been a centre of innovation and
              </span>
              <input
                id="q11"
                type="text"
                placeholder="Answer 11"
                className="w-40 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-300"
              />{" "}
              <span className="ml-2">throughout history.</span>
            </li>
            <li className="flex items-baseline">
              <span className="mr-2">
                Cities are places where people come together to exchange news and
              </span>
              <input
                id="q12"
                type="text"
                placeholder="Answer 12"
                className="w-40 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-300"
              />{" "}
              <span className="ml-2">.</span>
            </li>
            <li className="flex items-baseline">
              <span className="mr-2">
                The writer believes cities encourage a sense of
              </span>
              <input
                id="q13"
                type="text"
                placeholder="Answer 13"
                className="w-40 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-300"
              />{" "}
              <span className="ml-2">among residents.</span>
            </li>
          </ol>
        </section>

        <div className="flex justify-center">
          <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition">
            Submit Answers
          </button>
        </div>
      </div>
    </div>
  );
}
