"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

interface Props {
  title: string;
  href?: string;
  description: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.currentTarget.click();
    }
  };

  return (
    <Card
      ref={ref}
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full focus-within:ring-2 focus-within:ring-primary/50",
        className
      )}
    >
      <Link
        href={href || "#"}
        className="block focus:outline-none"
        aria-label={`View project: ${title}`}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {video && inView && (
          <div className="h-60 md:h-72 lg:h-80 w-full overflow-hidden">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-full w-full object-cover object-top"
              aria-hidden="true"
              onLoadedData={() => setLoaded(true)}
            />
          </div>
        )}
        {image && !video && inView && (
          <div className="h-60 md:h-72 lg:h-80 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={1200}
              height={675}
              className="h-full w-full object-cover object-top"
              loading="lazy"
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 600px"
              onLoad={() => setLoaded(true)}
              priority={false}
            />
          </div>
        )}
      </Link>
      <CardHeader className="px-6 py-5">
        <div className="space-y-2">
          <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm md:text-base text-muted-foreground dark:prose-invert pt-2">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col gap-4 px-6 pb-6">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags?.map((tag) => (
              <Badge
                className="px-2 py-0.5 text-xs"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {href && (
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Link 
              href={href} 
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </Link>
            
            {links && links.length > 0 && links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                aria-label={`View ${link.type} for ${title}`}
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
                <span className="ml-2">{link.type}</span>
              </Link>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
