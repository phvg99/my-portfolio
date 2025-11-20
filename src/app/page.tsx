"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef, useCallback } from "react";
import OptimizedBlurFade from "@/components/magicui/optimized-blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

function RecommendationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(2); // Default to desktop/tablet view
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const dragStartXRef = useRef(0);
  const velocityRef = useRef(0);
  const lastPointerRef = useRef<{ x: number; time: number }>({ x: 0, time: 0 });
  const sliderRef = useRef<HTMLDivElement>(null);
  const recommendations = DATA.recommendations;

  // Update cards visible based on screen size
  useEffect(() => {
    const updateCardsVisible = () => {
      if (window.innerWidth >= 1024) {
        setCardsVisible(2); // Desktop: 2 cards
      } else if (window.innerWidth >= 768) {
        setCardsVisible(2); // Tablet: 2 cards
      } else {
        setCardsVisible(1); // Mobile: 1 card
      }
    };

    updateCardsVisible();
    window.addEventListener('resize', updateCardsVisible);
    return () => window.removeEventListener('resize', updateCardsVisible);
  }, []);

  useEffect(() => {
    const updateSliderWidth = () => {
      setSliderWidth(sliderRef.current?.offsetWidth ?? 0);
    };

    updateSliderWidth();
    window.addEventListener("resize", updateSliderWidth);
    return () => window.removeEventListener("resize", updateSliderWidth);
  }, []);

  // Calculate max index based on cards visible
  const maxIndex = Math.max(0, recommendations.length - cardsVisible);
  
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const handlePrevious = () => {
    if (canGoPrevious) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const finishDrag = useCallback(() => {
    if (!isDragging) return;
    const cardWidth = sliderWidth / cardsVisible || 1;
    const dragCards = dragOffset / cardWidth;
    const momentumCards = velocityRef.current * 0.25;
    const targetIndex = Math.round(currentIndex - (dragCards + momentumCards));
    setCurrentIndex(Math.min(Math.max(targetIndex, 0), maxIndex));
    setIsDragging(false);
    setDragOffset(0);
    dragStartXRef.current = 0;
    velocityRef.current = 0;
  }, [dragOffset, sliderWidth, isDragging, cardsVisible, currentIndex, maxIndex]);

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        event.preventDefault();
      }
      const delta = event.clientX - dragStartXRef.current;
      setDragOffset(delta);
      const now = performance.now();
      const prev = lastPointerRef.current;
      const timeDelta = now - prev.time || 16;
      velocityRef.current = (event.clientX - prev.x) / timeDelta;
      lastPointerRef.current = { x: event.clientX, time: now };
    };

    const handlePointerUp = () => {
      finishDrag();
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [isDragging, finishDrag]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    dragStartXRef.current = event.clientX;
    setDragOffset(0);
    velocityRef.current = 0;
    lastPointerRef.current = { x: event.clientX, time: performance.now() };
  };

  return (
    <OptimizedBlurFade delay={BLUR_FADE_DELAY * 9}>
      <div className="relative">
        {/* Navigation Arrows */}
        {canGoPrevious && (
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 rounded-full bg-background border border-border shadow-lg transition-all duration-300 opacity-100 hover:scale-110 hover:shadow-xl cursor-pointer"
            aria-label="Previous recommendation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}

        {canGoNext && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 rounded-full bg-background border border-border shadow-lg transition-all duration-300 opacity-100 hover:scale-110 hover:shadow-xl cursor-pointer"
            aria-label="Next recommendation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}

        {/* Carousel Container */}
        <div 
          ref={sliderRef}
          className={`overflow-hidden select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onPointerDown={handlePointerDown}
        >
          <div
            className="flex transition-transform ease-out"
            style={{
              transform: `translateX(calc(-${currentIndex * (100 / cardsVisible)}% + ${sliderWidth ? (dragOffset / sliderWidth) * 100 : 0}%))`,
              transition: isDragging ? "none" : "transform 600ms cubic-bezier(0.22, 0.61, 0.36, 1)",
            }}
          >
            {recommendations.map((rec, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 px-4 md:w-1/2 lg:w-1/2"
              >
                <div className="h-full">
                  <div className="flex flex-col items-center p-8 bg-card border border-border rounded-lg shadow-lg h-full">
                    {/* Profile Photo */}
                    <div className="w-24 h-24 rounded-full bg-muted mb-6 overflow-hidden flex-shrink-0">
                      <Image
                        src={rec.image}
                        alt={rec.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-xl font-bold text-center mb-2">
                      {rec.name}
                    </h3>
                    
                    {/* Job Title */}
                    <p className="text-muted-foreground text-center mb-6">
                      {rec.title}
                    </p>
                    
                    {/* Recommendation Text */}
                    <p className="text-muted-foreground text-left leading-relaxed">
                      {rec.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators for Mobile */}
        <div className="mt-6 flex justify-center gap-2 lg:hidden">
          {recommendations.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(Math.min(idx, maxIndex))}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30"
              }`}
              aria-label={`Go to recommendation ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </OptimizedBlurFade>
  );
}

function WorkExperienceAccordion() {
  const experiences = DATA.work;
  const [openItems, setOpenItems] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="rounded-2xl border border-border/80 bg-card/40 backdrop-blur-sm shadow-lg">
      {experiences.map((experience, index) => {
        const isOpen = openItems.includes(index);
        const buttonId = `work-trigger-${index}`;
        const panelId = `work-panel-${index}`;

        return (
          <div key={`${experience.company}-${experience.title}`} className="border-b border-border last:border-b-0">
            <button
              id={buttonId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => handleToggle(index)}
              className="w-full px-6 py-5 text-left transition-colors hover:bg-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <div className="flex flex-col gap-4 sm:grid sm:grid-cols-[120px,1fr,auto] sm:items-center">
                <span className="text-sm font-semibold text-muted-foreground">{experience.yearRange}</span>
                <div className="flex flex-col justify-center">
                  <p className="text-base font-semibold md:text-lg">
                    {experience.title}{" "}
                    <span className="text-muted-foreground">| {experience.company}</span>
                  </p>
                </div>
                <ChevronDown
                  className={`ml-auto size-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                  aria-hidden="true"
                />
              </div>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
            >
              <div className="px-6 pb-6 pt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {experience.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16 relative">
      {/* Background dot pattern - fixed so it covers entire viewport */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <DotPattern 
          width={80} 
          height={80} 
          cr={0.4}
          glow={false} 
          className="text-blue-300/2" 
          aria-hidden="true"
        />
      </div>

      <section id="hero" className="pt-12 md:pt-16 px-4 sm:px-6 md:px-0">
        <OptimizedBlurFade delay={BLUR_FADE_DELAY * 1}>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mx-auto w-full max-w-2xl">
            <div className="space-y-4 max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl">
                Hello world
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl/relaxed mx-auto">
                I design human-centered products and services grounded in research, shaped by UX, and elevated through UI.
              </p>
            </div>
            
            {/* Company Logos */}
            <div className="flex items-center justify-center gap-6 sm:gap-8 pt-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
              {DATA.companyLogos.map((company) => (
                <div 
                  key={company.name}
                  className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 grayscale hover:grayscale-0 transition-all duration-300"
                  title={company.name}
                >
                  <Image
                    src={company.logoUrl}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </OptimizedBlurFade>
      </section>
      
      {/* Projects section with proper full-width layout */}
      <section id="projects" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 md:py-24 bg-gradient-to-b from-background via-background/80 to-background">
        <div className="max-w-[95vw] lg:max-w-7xl mx-auto space-y-8 md:space-y-16 px-4 sm:px-6 md:px-8">
          <OptimizedBlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Cases
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl/relaxed mx-auto">
                  Here's a showcase of my projects.
                </p>
              </div>
            </div>
          </OptimizedBlurFade>
          <OptimizedBlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-16 sm:grid-cols-2 mx-auto">
              {DATA.projects.map((project) => (
                <div 
                  className="transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:z-10" 
                  key={project.title}
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                    className="h-full shadow-lg hover:shadow-xl border-opacity-50"
                  />
                </div>
              ))}
            </div>
          </OptimizedBlurFade>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-8 md:py-16 bg-gradient-to-b from-background via-background/80 to-background">
        <div className="max-w-[95vw] lg:max-w-7xl mx-auto space-y-8 md:space-y-12 px-4 sm:px-6 md:px-8">
          <OptimizedBlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Work Experience
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl/relaxed mx-auto">
                  Highlights from my journey building digital products.
                </p>
              </div>
            </div>
          </OptimizedBlurFade>
          <OptimizedBlurFade delay={BLUR_FADE_DELAY * 7.5}>
            <WorkExperienceAccordion />
          </OptimizedBlurFade>
        </div>
      </section>

      {/* Recommendations Section */}
      <section id="recommendations" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 md:py-24 bg-gradient-to-b from-background via-background/80 to-background">
        <div className="max-w-[95vw] lg:max-w-7xl mx-auto space-y-8 md:space-y-16 px-4 sm:px-6 md:px-8">
          <OptimizedBlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What People Say
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl/relaxed mx-auto">
                  Testimonials and recommendations from former colleagues.
                </p>
              </div>
            </div>
          </OptimizedBlurFade>
          <RecommendationsCarousel />
        </div>
      </section>
      
      <section id="contact" className="py-12 px-4 sm:px-6 md:px-0">
        <div className="grid items-center justify-center gap-4 text-center w-full">
          <OptimizedBlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Connect with me on{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline focus:underline focus:outline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with me on LinkedIn"
                >
                  LinkedIn
                </Link>{" "}
                for design collaborations, feedback, or opportunities.
              </p>
            </div>
          </OptimizedBlurFade>
        </div>
      </section>
    </main>
  );
}
