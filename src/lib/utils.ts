import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Function to get the correct image URL with basePath for GitHub Pages
export function getImagePath(path: string): string {
  // The basePath set in next.config.mjs
  const basePath = process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : '' 
    : '';
    
  // If the path already includes the basePath or is a remote URL, return as is
  if (path.startsWith('http') || path.startsWith(basePath)) {
    return path;
  }
  
  // Otherwise, prepend the basePath
  return `${basePath}${path}`;
}
