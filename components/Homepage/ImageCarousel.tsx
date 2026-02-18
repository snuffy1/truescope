"use client";
import React from "react";
import Image from "next/image";

const DigitalMarketingCarousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=600&h=400",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&h=400",
  ];

  // Two sets are enough for a CSS infinite loop
  const allImages = [...images, ...images];

  return (
    <div className="w-full bg-transparent py-8 overflow-hidden">
      <div className="flex w-fit animate-infinite-scroll">
        {allImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="flex-shrink-0 px-3"
            style={{ width: "600px", height: "400px" }}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-xl">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                sizes="600px"
                className="object-cover"
                priority={index < 4}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default DigitalMarketingCarousel;
