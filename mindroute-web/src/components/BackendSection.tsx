import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const BackendSection = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [videoUploaded, setVideoUploaded] = useState(false);
  
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoUploaded(true);
      // Burada video upload işlemi yapılabilir
    }
  };

  const cities = [
    { name: "İstanbul", lat: 41.0082, lon: 28.9784 },
    { name: "Ankara", lat: 39.9208, lon: 32.8541 },
    { name: "İzmir", lat: 38.4192, lon: 27.1287 },
    { name: "Antalya", lat: 36.8969, lon: 30.7133 },
    { name: "Trabzon", lat: 41.0027, lon: 39.7168 },
    { name: "Bursa", lat: 40.1828, lon: 29.0669 },
    { name: "Eskişehir", lat: 39.7767, lon: 30.5206 },
    { name: "Gaziantep", lat: 37.0662, lon: 37.3833 },
    { name: "Konya", lat: 37.8746, lon: 32.4932 },
    { name: "Samsun", lat: 41.2867, lon: 36.33 },
    { name: "Mersin", lat: 36.8121, lon: 34.6415 },
    { name: "Kayseri", lat: 38.7333, lon: 35.4833 },
    { name: "Van", lat: 38.5012, lon: 43.3724 },
    { name: "Adana", lat: 37.0022, lon: 35.3213 },
    { name: "Denizli", lat: 37.7765, lon: 29.0864 },
    { name: "Elazığ", lat: 38.6743, lon: 39.2220 },
    { name: "Bayburt", lat: 40.2552, lon: 40.2249 },
  ];

  useEffect(() => {
    // Meşale ışıkları için doğal dalgalanma efekti
    gsap.to(".torch-glow", {
      opacity: () => gsap.utils.random(0.4, 1),
      scale: () => gsap.utils.random(0.95, 1.1),
      duration: () => gsap.utils.random(0.15, 0.3),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('/src/assets/hero/backend.png')`,
      }}
    >
      {/* Sol meşale alevi */}
      <div className="torch-glow absolute left-[16%] top-[40%] w-[160px] h-[260px] bg-orange-500 rounded-full blur-[100px] opacity-90 mix-blend-screen"></div>

      {/* Sağ meşale alevi */}
      <div className="torch-glow absolute right-[16%] top-[40%] w-[160px] h-[260px] bg-orange-500 rounded-full blur-[100px] opacity-90 mix-blend-screen"></div>

      {/* Hafif sıcak kırmızı alt katman (derinlik efekti) */}
      <div className="torch-glow absolute left-[16%] top-[42%] w-[200px] h-[280px] bg-red-500 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
      <div className="torch-glow absolute right-[16%] top-[42%] w-[200px] h-[280px] bg-red-500 rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>

      {/* Başlık - iki meşale ortasında */}
      <h1 
        className="absolute top-[17%] left-1/2 transform -translate-x-1/2 text-white text-[72px] md:text-[88px] font-extrabold tracking-wider drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] text-center select-none"
        style={{ color: 'white' }}
      >
        ŞEHRİ SEÇ VE KEŞFET
      </h1>

      {/* Şehir Seç Butonu */}
      <div className="absolute top-[38%] left-[28%] transform -translate-x-1/2 flex flex-col items-center">
        {/* Buton */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-[700px] h-[300px] cursor-pointer select-none flex items-center justify-center"
        >
          <img
            src="/src/assets/hero/butonn1.png"
            alt="Şehir Seç Butonu"
            className="absolute w-full h-full object-contain pointer-events-none"
          />

          {/* Butonun içindeki yazı */}
          <span className="relative z-10 text-[#f1d88c] text-5xl font-extrabold text-center translate-y-[25px]">
            {selectedCity || "ŞEHİR SEÇ"}
          </span>
        </div>

        {/* Açılan şehir listesi */}
        {isOpen && (
          <div
            className="mt-6 bg-[#2a3d1f]/95 border-2 border-[#e0c773] rounded-lg shadow-lg 
                       text-white text-3xl font-semibold w-[380px] max-h-[250px] overflow-y-auto"
          >
            {cities.map((city) => (
              <div
                key={city.name}
                onClick={() => {
                  setSelectedCity(city.name);
                  setIsOpen(false);
                }}
                className="px-4 py-3 hover:bg-[#3f542a] transition-all duration-200 cursor-pointer text-center"
              >
                {city.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Video Seç Butonu (sağda) */}
      <div className="absolute top-[38%] right-[30%] transform translate-x-1/2 flex flex-col items-center">
        <label
          htmlFor="videoUpload"
          className="relative w-[700px] h-[300px] cursor-pointer flex items-center justify-center select-none"
        >
          <img
            src="/src/assets/hero/videosec.png"
            alt="Video Seç Butonu"
            className="absolute w-full h-full object-contain pointer-events-none"
          />
          <span className="relative z-10 text-[#f1d88c] text-5xl font-extrabold text-center translate-y-[25px]">
            {videoUploaded ? "Video Yüklendi 🎬" : "VİDEO SEÇ"}
          </span>
        </label>

        <input
          id="videoUpload"
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default BackendSection;
