import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function formatDate(date: string | number | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function slugify(slug: string) {
  const parts = slug.split("/");
  const result = parts.pop() || parts.pop();

  return result;
}

// This is the original function but twMerge causes conflicts for some reason when accessing style variables in Astro frontmatter
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs); // Skip twMerge for debugging
}