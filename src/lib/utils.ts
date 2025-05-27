import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// this is a utility function that merges class names.
// It uses clsx to combine class names and tailwind-merge to resolve conflicts.
// It can be used to conditionally apply classes in React components.
