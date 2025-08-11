"use client";

import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import React from "react";

interface OptimizedBlurFadeProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function OptimizedBlurFade({
  children,
  delay = 0,
  duration = 0.5,
  className,
  threshold = 0.1,
  triggerOnce = true,
}: OptimizedBlurFadeProps) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={
        inView
          ? { opacity: 1, filter: "blur(0px)" }
          : { opacity: 0, filter: "blur(10px)" }
      }
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
} 