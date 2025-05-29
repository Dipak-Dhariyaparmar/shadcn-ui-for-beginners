import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// this function is used to combine class names
// it uses the clsx library to create a class name string
// it also uses the tailwind-merge library to merge class names
// it is used in various components to apply styles conditionally
// for example, in the Button component, it combines the button variants with the className prop
