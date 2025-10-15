import { useState } from "react";
export default function App() {
  const [video, setVideo] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!video) {
      alert("Lütfen önce bir video seç!");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", video);

    try {
      const response = await fetch("http://127.0.0.1:8002/mood/analyze", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Sunucuya bağlanılamadı 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-100 to-blue-300 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">🎭 MindRoute</h1>
      <p className="text-lg mb-8">Ruh halini keşfet, sana en uygun yeri önerelim.</p>

      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center w-[min(480px,90vw)]">
        <p className="mb-4 text-gray-600">10 saniyelik videonu yükle 👇</p>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
          className="border border-gray-300 rounded-lg p-2 mb-6 w-full"
        />
        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold disabled:opacity-60"
        >
          {loading ? "Analiz ediliyor..." : "Analiz Et"}
        </button>

        {result && (
          <div className="mt-6 text-center">
            <p className="font-semibold text-lg">
              Tespit edilen ruh hali:{" "}
              <span className="text-blue-700">{result.mood}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
