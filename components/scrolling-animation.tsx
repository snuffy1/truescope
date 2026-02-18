"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Set initial window width
    setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animationProgress = Math.min(scrollY / 500, 1);
  // Responsive radius based on screen size
  const getExpandRadius = () => {
    const screenWidth =
      windowWidth || (typeof window !== "undefined" ? window.innerWidth : 1024);
    if (screenWidth < 640) return animationProgress * 120; // Mobile
    if (screenWidth < 768) return animationProgress * 180; // Small tablet
    if (screenWidth < 1024) return animationProgress * 240; // Tablet
    return animationProgress * 300; // Desktop
  };
  const expandRadius = getExpandRadius();

  return (
    <div className="min-h-[200vh] ">
      <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 sticky top-0">
        <div className="relative w-full max-w-[600px] aspect-square">
          <div
            className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-500 ${
              scrollY > 300
                ? "border-2 border-[#e9e9e9] dark:border-gray-700"
                : ""
            }`}
          >
            <div
              className={`w-[85%] h-[85%] rounded-full flex items-center justify-center relative transition-all duration-500 ${
                scrollY > 100
                  ? "border-2 border-[#28a717]/20 dark:border-[#165c0a]"
                  : ""
              }`}
            >
              <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-r from-purple-400 via-[#28a717]/100 to-red-500 dark:from-purple-600 dark:via-[#28a717] dark:to-red-600 p-0.5 flex items-center justify-center relative">
                <div className="w-full h-full rounded-full bg-[#ffffff] flex items-center justify-center relative">
                  <div
                    className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 sm:border-3 md:border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0"
                    style={{
                      transform: `translate(${expandRadius * Math.cos(0)}px, ${
                        expandRadius * Math.sin(0)
                      }px)`,
                    }}
                  >
                    <Image
                      src="/scrollAnimation/one.webp"
                      alt="Profile 1"
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                      quality={100}
                      priority
                    />
                  </div>

                  <div
                    className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 sm:border-3 md:border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0"
                    style={{
                      transform: `translate(${
                        expandRadius * Math.cos(Math.PI / 4)
                      }px, ${expandRadius * Math.sin(Math.PI / 4)}px)`,
                    }}
                  >
                    <Image
                      src="/scrollAnimation/two.webp"
                      alt="Profile 2"
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                      quality={100}
                    />
                  </div>

                  <div
                    className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 sm:border-3 md:border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0"
                    style={{
                      transform: `translate(${
                        expandRadius * Math.cos(Math.PI / 2)
                      }px, ${expandRadius * Math.sin(Math.PI / 2)}px)`,
                    }}
                  >
                    <Image
                      src="/scrollAnimation/three.jpg"
                      alt="Profile 3"
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                      quality={100}
                    />
                  </div>

                  <div
                    className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 sm:border-3 md:border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0"
                    style={{
                      transform: `translate(${
                        expandRadius * Math.cos((3 * Math.PI) / 4)
                      }px, ${expandRadius * Math.sin((3 * Math.PI) / 4)}px)`,
                    }}
                  >
                    <Image
                      src="/scrollAnimation/four.avif"
                      alt="Profile 4"
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                      quality={100}
                    />
                  </div>

                  <div
                    className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 sm:border-3 md:border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0"
                    style={{
                      transform: `translate(${
                        expandRadius * Math.cos(Math.PI)
                      }px, ${expandRadius * Math.sin(Math.PI)}px)`,
                    }}
                  >
                    <Image
                      src="/scrollAnimation/five.png"
                      alt="Profile 5"
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                      quality={100}
                    />
                  </div>

                  <div
                    className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 sm:border-3 md:border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0"
                    style={{
                      transform: `translate(${
                        expandRadius * Math.cos((5 * Math.PI) / 4)
                      }px, ${expandRadius * Math.sin((5 * Math.PI) / 4)}px)`,
                    }}
                  >
                    <Image
                      src="/scrollAnimation/six.jpg"
                      alt="Profile 6"
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                      quality={100}
                    />
                  </div>

                  <div
                    className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 sm:border-3 md:border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0"
                    style={{
                      transform: `translate(${
                        expandRadius * Math.cos((3 * Math.PI) / 2)
                      }px, ${expandRadius * Math.sin((3 * Math.PI) / 2)}px)`,
                    }}
                  >
                    <Image
                      src="/scrollAnimation/seven.jpg"
                      alt="Profile 7"
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                      quality={100}
                    />
                  </div>

                  <div
                    className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 sm:border-3 md:border-4 border-white dark:border-gray-800 shadow-lg transition-transform duration-300 ease-out z-0"
                    style={{
                      transform: `translate(${
                        expandRadius * Math.cos((7 * Math.PI) / 4)
                      }px, ${expandRadius * Math.sin((7 * Math.PI) / 4)}px)`,
                    }}
                  >
                    <Image
                      src="/scrollAnimation/eight.jpg"
                      alt="Profile 8"
                      className="w-full h-full object-cover"
                      width={96}
                      height={96}
                      quality={100}
                    />
                  </div>

                  <div
                    className={`flex flex-col items-center justify-center relative z-20 transition-opacity duration-500 px-4 ${
                      scrollY > 250 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light font-cal-sans text-gray-800 text-center mb-2">
                      Bringing Your Software Ideas to Life:
                    </h1>
                    <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-light font-inter text-gray-800 text-center mb-4">
                      Remotely and Seamlessly.
                    </h1>

                    <button className="bg-gradient-to-r from-[#93cbff] via-[#2b7cc7] to-[#034480] hover:from-[#264664] hover:via-[#0a2f51] hover:to-[#012240] text-white font-light font-cal-sans px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base cursor-pointer">
                      <span className="hidden sm:inline">
                        Build Your Dream Team
                      </span>
                      <span className="sm:hidden">Get Started</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
