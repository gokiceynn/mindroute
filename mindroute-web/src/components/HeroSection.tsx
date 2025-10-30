import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../index.css";

const HeroSection = () => {
  useEffect(() => {
    const leaves = gsap.utils.toArray<HTMLImageElement>(".leaf");

    leaves.forEach((leaf) => {
      const isRightCenter = leaf.src.includes("leaf-top-right-center");

      // Her yaprak için ayrı davranış
      const rotationAmount = isRightCenter ? gsap.utils.random(1, 3) : gsap.utils.random(3, 8);
      const yAmount = isRightCenter ? gsap.utils.random(4, 10) : gsap.utils.random(8, 20);
      const duration = isRightCenter ? gsap.utils.random(5, 7) : gsap.utils.random(3, 6);
      const delay = gsap.utils.random(0, 2);

      gsap.to(leaf, {
        rotation: `+=${rotationAmount}`,
        y: yAmount,
        transformOrigin: "center center", // dönme ekseni tam ortada
        duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay,
      });
    });
  }, []);

  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('/src/assets/hero/background.png')`,
      }}
    >
      {/* Sol alt yaprak */}
      <img
        src="/src/assets/hero/leaf-bottom-1.svg"
        alt="Leaf Bottom 1"
        className="leaf absolute bottom-[-120px] left-[-60px] w-[600px] lg:w-[750px] select-none"
      />

      {/* Sağ alt yaprak */}
      <img
        src="/src/assets/hero/leaf-bottom-2.svg"
        alt="Leaf Bottom 2"
        className="leaf absolute bottom-[-60px] right-[-120px] w-[1100px] lg:w-[1300px] select-none"
      />

      {/* Sol üst yaprak */}
      <img
        src="/src/assets/hero/leaf-top-1.svg"
        alt="Leaf Top 1"
        className="leaf absolute top-[-180px] left-[-200px] w-[950px] lg:w-[1150px] select-none"
      />

      {/* Sağ üst yaprak */}
      <img
        src="/src/assets/hero/leaf-top-2.svg"
        alt="Leaf Top 2"
        className="leaf absolute top-[-220px] right-[-180px] w-[750px] lg:w-[900px] select-none"
      />

      {/* Üst orta yaprak */}
      <img
        src="/src/assets/hero/leaf-top-center.svg"
        alt="Leaf Top Center"
        className="leaf absolute top-[-60px] left-1/2 transform -translate-x-1/2 w-[1350px] lg:w-[1550px] z-30 select-none"
      />

      {/* Üst sağ merkez yaprak */}
      <img
        src="/src/assets/hero/leaf-top-right-center.svg"
        alt="Leaf Top Right Center"
        className="leaf absolute top-[-60px] right-[120px] w-[1450px] lg:w-[1650px] z-30 select-none"
      />
    </div>
  );
};

export default HeroSection;
