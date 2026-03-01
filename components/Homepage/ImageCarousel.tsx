"use client";
import React from "react";
import Image from "next/image";

const DigitalMarketingCarousel = () => {
  const images = [
    "/moving/m1.webp",
    "/moving/m2.webp",
    "/moving/m3.webp",
    "/moving/m4.webp",
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
