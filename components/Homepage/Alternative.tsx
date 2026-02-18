"use client";
import React, { useState, useEffect } from "react";

const Alternative = () => {
  const videos = [
    "/videos/vc1.mp4",
    "/videos/vc2.mp4",
    "/videos/vc3.mp4",
    "/videos/vc4.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? videos.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === videos.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl">
      {/* Main video container */}

      <div className="relative aspect-video">
        <video
          key={videos[currentIndex]}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videos[currentIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 group"
          aria-label="Previous video"
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 group"
          aria-label="Next video"
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Video thumbnails/indicators */}
      <div className="bg-black/80 backdrop-blur-sm p-4">
        <div className="flex justify-center space-x-3">
          {videos.map((video, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-[#28a717]/100 scale-105 shadow-lg shadow-[#28a717]/100/30"
                  : "border-white/30 hover:border-white/60"
              }`}
              aria-label={`Go to video ${index + 1}`}
            >
              <video
                className="w-full h-full object-cover"
                muted
                preload="metadata"
              >
                <source src={`${video}#t=1`} type="video/mp4" />
              </video>

              {/* Active indicator overlay */}
              {index === currentIndex && (
                <div className="absolute inset-0 bg-[#28a717]/100/20 flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#28a717]/100 rounded-full animate-pulse" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-4 flex justify-center space-x-2">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-[#28a717]/100" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alternative;
