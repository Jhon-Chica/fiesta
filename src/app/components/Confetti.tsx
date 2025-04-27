"use client";

import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function ConfettiEffect() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Ajustar tamaño al cambiar la ventana
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize(); // Tamaño inicial
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        colors={["#A1E3F9", "#578FCA", "#3674B5"]}
        numberOfPieces={50}
        gravity={0.1}
        recycle={true}
      />
    </div>
  );
}
