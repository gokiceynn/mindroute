import React from "react";
import HeroSection from "./components/HeroSection";
import BackendSection from "./components/BackendSection";

function App() {
  return (
    <div className="w-full h-auto overflow-x-hidden scroll-smooth">
      <HeroSection />
      <BackendSection />
    </div>
  );
}

export default App;
