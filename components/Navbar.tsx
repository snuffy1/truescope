"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<(HTMLDivElement | null)[]>([]);
  const contactRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const topLineRef = useRef<HTMLSpanElement>(null);
  const bottomLineRef = useRef<HTMLSpanElement>(null);
  const hideLineRef = useRef<HTMLSpanElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const iconTl = useRef<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useGSAP(() => {
    gsap.set(navRef.current, { yPercent: -100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      y: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        yPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<",
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2",
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(
        hideLineRef.current,
        {
          opacity: 0,
          duration: 0.2,
          ease: "power2.inOut",
        },
        "<",
      );
  }, []);

  const toggleDropdown = (name: string) => {
    const isCurrentlyActive = activeDropdown === name;
    const dropdownElement = dropdownRefs.current[name];

    if (isCurrentlyActive) {
      // Close the dropdown with animation
      if (dropdownElement) {
        gsap.to(dropdownElement, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => {
            setActiveDropdown(null);
          },
        });
      } else {
        setActiveDropdown(null);
      }
    } else {
      // Close any other open dropdown first
      if (activeDropdown && dropdownRefs.current[activeDropdown]) {
        gsap.to(dropdownRefs.current[activeDropdown], {
          height: 0,
          opacity: 0,
          duration: 0.2,
          ease: "power2.inOut",
        });
      }

      setActiveDropdown(name);

      // Open the new dropdown with animation
      setTimeout(() => {
        if (dropdownRefs.current[name]) {
          gsap.fromTo(
            dropdownRefs.current[name],
            {
              height: 0,
              opacity: 0,
            },
            {
              height: "auto",
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
            },
          );
        }
      }, 50);
    }
  };

  const toggleMenu = () => {
    if (isOpen) {
      tl.current?.reverse();
      iconTl.current?.reverse();
    } else {
      tl.current?.play();
      iconTl.current?.play();
    }
    setIsOpen(!isOpen);
  };

  const navigationItems = [
    {
      name: "TrueScope",
      href: "/",
      color: "text-white",
      dropdown: [
        { name: "OVERVIEW", href: "/" },
        { name: "ABOUT US", href: "/about-us" },
        { name: "CAREERS", href: "/careers" },
      ],
    },
    {
      name: "DIGITAL MARKETING",
      href: "/social-media-management",
      color: "text-white",
      dropdown: [
        { name: "SOCIAL MEDIA MANAGEMENT", href: "/social-media-management" },
        { name: "DIGITAL ADVERTISEMENTS", href: "/digital-advertisements" },
        { name: "SEO & CONTENT", href: "/seo-content" },
      ],
    },
    {
      name: "PLANS",
      href: "/pricing",
      color: "text-white",
      dropdown: [
        { name: "MARKETING STARTER", href: "/plans/marketing-starter" },
        { name: "PROFESSIONAL SUITE", href: "/plans/professional-suite" },
        { name: "GROWTH ACCELERATOR", href: "/plans/growth-accelerator" },
        { name: "ENTERPRISE SCALE", href: "/plans/enterprise-scale" },
        { name: "WEBSITE DESIGN", href: "/plans/website-design" },
        { name: "SEO AUDIT", href: "/plans/seo-audit" },
        { name: "BRAND STRATEGY", href: "/plans/brand-strategy" },
        { name: "AD CAMPAIGN LAUNCH", href: "/plans/ad-campaign-launch" },
      ],
    },
    { name: "FAQ", href: "/faq", color: "text-white" },
    { name: "PRICING", href: "/pricing", color: "text-white" },
    { name: "BLOG", href: "/blog", color: "text-white" },

    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col  justify-start w-full h-full px-6 sm:px-8 md:px-12 py-16 sm:py-16 md:py-20 uppercase bg-black/90 backdrop-blur-lg text-white/90 overflow-y-auto scrollbar-hide"
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* Internet Explorer 10+ */,
        }}
      >
        {/* Close Button */}
        {/* <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300 text-2xl sm:text-3xl font-light"
          aria-label="Close menu"
        >
          ×
        </button> */}
        <div className="flex flex-col text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cal-sans tracking-wide">
          {navigationItems.map((section, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) linksRef.current[index] = el;
              }}
              className="border-b border-gray-700/30 last:border-b-0"
            >
              <div className="flex items-center justify-between py-3 md:py-4">
                <Link
                  href={section.href}
                  className={`transition-all duration-300 cursor-pointer hover:text-[#28a717] hover:translate-x-2 ${
                    pathname === section.href ? "text-[#28a717]" : section.color
                  } block flex-1`}
                  onClick={!section.dropdown ? toggleMenu : undefined}
                >
                  {section.name}
                </Link>
                {section.dropdown && (
                  <button
                    onClick={() => toggleDropdown(section.name)}
                    className="ml-4 text-xl sm:text-2xl md:text-3xl text-white/70 hover:text-[#28a717] transition-all duration-300 hover:scale-110 flex-shrink-0 w-8 h-8 flex items-center justify-center"
                    aria-label={`Toggle ${section.name} dropdown`}
                  >
                    {activeDropdown === section.name ? "−" : "+"}
                  </button>
                )}
              </div>

              {/* Dropdown Menu */}
              {section.dropdown && (
                <div
                  ref={(el) => {
                    if (el) dropdownRefs.current[section.name] = el;
                  }}
                  className={`overflow-hidden ${
                    activeDropdown === section.name ? "block" : "hidden"
                  }`}
                  style={{
                    height: activeDropdown === section.name ? "auto" : 0,
                  }}
                >
                  <div className="ml-4 sm:ml-6 md:ml-8 pb-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light">
                    {section.dropdown.map((item, dropdownIndex) => (
                      <div key={dropdownIndex} className="py-1 md:py-2">
                        <Link
                          href={item.href}
                          className={`block font-inter hover:text-[#28a717] hover:translate-x-2 transition-all duration-300 cursor-pointer ${
                            pathname === item.href
                              ? "text-[#28a717]"
                              : "text-white/80"
                          }`}
                          onClick={toggleMenu}
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <main className="flex fixed items-center justify-between w-full md:h-10 px-4 py-4 md:px-12 md:py-12 z-50 overflow-hidden top-0">
        {/* Logo in top left corner */}
        <Link href="/" className="z-50 transition-all duration-300">
          <Image
            src="/logo/updatedLogo.png"
            alt="Company Logo"
            width={150}
            height={120}
            priority
          />
        </Link>
        <div
          className="z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300   cursor-pointer "
          onClick={toggleMenu}
        >
          <span
            ref={topLineRef}
            className={`block w-6 sm:w-7 md:w-8 h-0.5 rounded-full origin-center transition-colors duration-300 ${
              isOpen ? "bg-white" : "bg-black"
            }`}
          ></span>
          <span
            ref={bottomLineRef}
            className={`block w-6 sm:w-7 md:w-8 h-0.5 rounded-full origin-center transition-colors duration-300 ${
              isOpen ? "bg-white" : "bg-black"
            }`}
          ></span>
          <span
            ref={hideLineRef}
            className={`block w-6 sm:w-7 md:w-8 h-0.5 rounded-full origin-center transition-colors duration-300 ${
              isOpen ? "bg-white" : "bg-black"
            }`}
          ></span>
        </div>
      </main>
    </>
  );
};

export default Navbar;
