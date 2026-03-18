"use client";

import { useState, useEffect } from "react";
import { HOME_PHRASES, CAROUSEL_TIMING } from "@/data/constants";

export function PhraseCarousel() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prev) =>
          prev === HOME_PHRASES.length - 1 ? 0 : prev + 1
        );
        setIsVisible(true);
      }, CAROUSEL_TIMING.fade);
    }, CAROUSEL_TIMING.interval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`text-[#919191] mb-4 min-h-[1.5em] text-[1.8rem] max-md:text-[1.5rem] transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2.5"
      }`}
    >
      {HOME_PHRASES[currentPhraseIndex]}
    </div>
  );
}
