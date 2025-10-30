import React, { useEffect } from "react";
import { gsap } from "gsap";

const BackendSection = () => {
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
    </div>
  );
};

export default BackendSection;
