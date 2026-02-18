"use client";
import React, { useEffect, useRef } from "react";

const VideoCarousel = () => {
  const videos = [
    "/videos/vc1.mp4",
    "/videos/vc2.mp4",
    "/videos/vc3.mp4",
    "/videos/vc4.mp4",
  ];

  // Duplicate videos for seamless loop
  const allVideos = [...videos, ...videos, ...videos];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 2; // pixels per frame

    const autoScroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;

      // Reset seamlessly when reaching half (original set of videos)
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
        scrollContainer.scrollLeft = 0;
      }

      requestAnimationFrame(autoScroll);
    };

    autoScroll();
  }, []);

  return (
    <div className="w-full bg-transparent py-8 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden"
        style={{
          scrollBehavior: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {allVideos.map((video, index) => (
          <div
            key={`${video}-${index}`}
            className="flex-shrink-0 relative group cursor-pointer"
            style={{ width: "600px", height: "400px" }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default VideoCarousel;
