import  { useState } from "react";

export default function IeltsWriting() {
  const [text, setText] = useState("");
  const words = text.trim().split(/\s+/).filter(w => w).length;

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-serif font-bold text-center text-indigo-800 mb-6">
          Writing Task-1
        </h1>
        <p className="text-gray-700 mb-4 leading-relaxed">
          You should spend about 20 minutes on this task. Write **at least 150 words**
          and **no more than 200 words**.
        </p>
        <div className="bg-gray-100 border border-gray-700 rounded p-4 mb-4">
          <p className="text-gray-800 italic">
            The chart below shows the number of enquiries received by the Tourist Information Office in one city over a six‑month period in 2011.
          </p>
          <img src={"/images/writing.jpg"} alt="Writing Task 1 Chart" />

        </div>

        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows={10}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
          placeholder="Write your report here..."
        ></textarea>

        <div className="flex justify-between items-center mt-2">
          <p className={`text-sm ${words < 150 || words > 200 ? "text-red-500" : "text-green-600"}`}>
            Words: {words} (150–200)
          </p>
          <button
            disabled={words < 150 || words > 200}
            className={`px-6 py-2 font-medium rounded-lg transition 
              ${words >= 150 && words <= 200
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}
          >
            Submit Answer
          </button>
        </div>
      </div>
    </div>
  );
}
