"use client";
import { TimelineContent } from "@/components/Testimonial/TimelineContent";
import Image from "next/image";
import { useRef } from "react";
import { Variants } from "framer-motion";

function ClientFeedback() {
  const testimonialRef = useRef<HTMLDivElement>(null);

  // Type-safe variants using the TargetResolver function signature
  const revealVariants: Variants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    hidden: {
      y: 30,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const testimonials = [
    {
      name: "Marcus Chen",
      role: "CEO at Fintech",
      text: "TrueScope increased our lead generation by 340% and boosted our ROI by 280%. Their strategies are phenomenal.",
    },
    {
      name: "Sarah Mitchell",
      role: "Marketing Director",
      text: "Our conversion rates jumped 210% after partnering with TrueScope. They know how to turn prospects into customers.",
    },
    {
      name: "David Rodriguez",
      role: "Operations Head",
      text: "TrueScope transformed our digital presence. We now generate 5x more qualified leads and our brand visibility skyrocketed.",
    },
    {
      name: "Jennifer Collins",
      role: "E-comm Manager",
      text: "Their data-driven marketing approach increased our brand awareness by 400% and generated 6-figure revenue growth.",
    },
    {
      name: "Andrew Sullivan",
      role: "Startup Founder",
      text: "Within 6 months, our online revenue grew 250% and our market reach expanded globally. TrueScope is a powerhouse.",
    },
    {
      name: "Robert Thompson",
      role: "Sales Director",
      text: "Our customer acquisition cost dropped 45% while our sales pipeline increased 3x. Exceptional results.",
    },
  ];

  return (
    <main className="w-full bg-white py-24 md:py-32">
      <section className="px-6 md:px-12" ref={testimonialRef}>
        {/* Professional Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 lg:mb-32">
          <div className="max-w-2xl">
            <TimelineContent
              as="h2"
              className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-8"
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
            >
              Client{" "}
              <span className="bg-gradient-to-r from-[#ACE547] to-[#416207] bg-clip-text text-transparent">
                Results.
              </span>
            </TimelineContent>
            <TimelineContent
              as="div"
              className="h-[2px] w-24 bg-[#28a717]"
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
            />
          </div>
          <div className="max-w-xs">
            <TimelineContent
              as="p"
              className="text-lg text-slate-500 font-medium leading-relaxed pb-2"
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
            >
              Transforming digital potential into measurable commercial
              performance through strategy and design.
            </TimelineContent>
          </div>
        </div>

        {/* Clean Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-16 lg:space-y-24">
          {testimonials.map((item, idx) => (
            <TimelineContent
              key={`${item.name}-${idx}`}
              animationNum={idx + 3}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="break-inside-avoid group block"
            >
              <div className="relative">
                {/* Visual quote indicator */}
                <span className="absolute -left-4 -top-4 text-6xl text-slate-100 font-serif leading-none select-none group-hover:text-[#28a717]/10 transition-colors duration-500">
                  “
                </span>

                <blockquote className="relative z-10">
                  <p className="text-xl md:text-2xl font-medium text-slate-800 leading-[1.5] tracking-tight mb-10 transition-colors duration-300 group-hover:text-slate-900">
                    {item.text}
                  </p>
                </blockquote>

                {/* Refined Author Footer */}
                <footer className="flex items-center gap-5 pt-8 border-t border-slate-100">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                    <Image
                      src="/reviwer/reviewer.png"
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <cite className="text-xs font-black uppercase tracking-[0.25em] text-slate-900 not-italic">
                      {item.name}
                    </cite>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {item.role}
                    </span>
                  </div>
                </footer>
              </div>
            </TimelineContent>
          ))}
        </div>

        {/* Minimalist Section Closer */}
        <div className=" border-t border-slate-50 flex flex-col items-center">
          <div className="flex items-center gap-6">
            <span className="h-px w-8 bg-slate-200" />
            <p className="text-[10px] font-black tracking-[0.5em] uppercase text-slate-300">
              TrueScope Performance Ledger
            </p>
            <span className="h-px w-8 bg-slate-200" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ClientFeedback;
