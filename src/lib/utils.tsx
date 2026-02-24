import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBaseUrl(): string {
  // Client-side: use relative URLs
  if (typeof window !== "undefined") return "";
  // Vercel deployment
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  // Local dev
  return "http://localhost:3000";
}