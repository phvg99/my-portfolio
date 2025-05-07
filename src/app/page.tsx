"use client";

import { useInView } from "react-intersection-observer";
import OptimizedBlurFade from "@/components/magicui/optimized-blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

// Implement as client component for intersection observer
export const runtime = "edge";

const BLUR_FADE_DELAY = 0.04;

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
                UX/UI Designer passionate about crafting interactive, human-centered experiences. I love building things—and dinosaurs.
              </p>
            </div>
          </div>
        </OptimizedBlurFade>
      </section>
      
      <section id="work" className="pt-8 px-4 sm:px-6 md:px-0">
        <div className="flex min-h-0 flex-col gap-y-3">
          <OptimizedBlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold mb-6">Work Experience</h2>
          
            {/* Work items in a single container for better performance */}
            <div className="mt-3 space-y-3">
              {DATA.work.map((work) => (
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              ))}
            </div>
          </OptimizedBlurFade>
        </div>
      </section>
      
      {/* Projects section with proper full-width layout */}
      <section id="projects" className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 md:py-24 bg-gradient-to-b from-background via-background/80 to-background">
        <div className="max-w-[95vw] lg:max-w-7xl mx-auto space-y-8 md:space-y-16 px-4 sm:px-6 md:px-8">
          <OptimizedBlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest projects
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl/relaxed mx-auto">
                  Here's a showcase of my favorite projects. These are the ones that challenged me, taught me something new, and showcase my creative problem-solving approach.
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
                    tags={project.technologies}
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
