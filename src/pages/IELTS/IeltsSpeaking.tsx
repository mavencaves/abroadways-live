//@ts-nocheck
import { useState } from "react";
import { ReactMic } from "react-mic";
import { Mic, Upload, Play } from "lucide-react"; // optional icon library

export default function IeltsSpeaking() {
  const [record, setRecord] = useState(false);
  const [audioData, setAudioData] = useState(null);
  const [uploadedAudio, setUploadedAudio] = useState(null);

  const onStop = (recordedData) => {
    setAudioData(recordedData.blob);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "audio/mpeg") {
      setUploadedAudio(URL.createObjectURL(file));
      setAudioData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white border border-indigo-200 rounded-3xl shadow-xl p-8 transition-all duration-300">
        <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-4">
          🎙 IELTS Speaking Practice
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Record or upload your answer to practice speaking Task-1
        </p>

        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 shadow-sm mb-6">
          <p className="font-medium text-gray-700 text-lg text-center">
            <span className="font-bold text-indigo-700">Part 1 – Question:</span> Describe some food or drink that you learned to prepare.
          </p>
        </div>

        {/* Recorder */}
        <div className="bg-white border border-gray-300 rounded-xl p-5 mb-6 transition hover:shadow-lg">
          <p className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
            <Mic size={18} /> Voice Recorder
          </p>
          <ReactMic
            record={record}
            onStop={onStop}
            strokeColor="#4f46e5"
            backgroundColor="#eef2ff"
            mimeType="audio/webm"
            className="w-full rounded"
          />

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => setRecord(true)}
              className="px-5 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
            >
              Start
            </button>
            <button
              onClick={() => setRecord(false)}
              className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
            >
              Stop
            </button>
          </div>
        </div>

        {/* Upload Option */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-800 flex items-center gap-2">
            <Upload size={18} /> Or Upload Your MP3 File
          </label>
          <input
            type="file"
            accept=".mp3,audio/mpeg"
            onChange={handleFileUpload}
            className="block w-full border border-gray-300 text-gray-700 p-2 rounded-lg focus:outline-indigo-400 transition"
          />
        </div>

        {/* Playback */}
        {(audioData || uploadedAudio) && (
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6 transition hover:shadow-md">
            <p className="font-medium text-gray-700 flex items-center gap-2 mb-2">
              <Play size={18} /> Playback:
            </p>
            <audio
              controls
              src={uploadedAudio || URL.createObjectURL(audioData)}
              className="w-full rounded"
            />
          </div>
        )}

        {/* Submit */}
        <div className="text-center mt-6">
          <button
            disabled={!audioData && !uploadedAudio}
            className={`px-8 py-3 text-lg font-semibold rounded-xl transition duration-300 ${
              audioData || uploadedAudio
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Submit Practice
          </button>
        </div>
      </div>
    </div>
  );
}
