import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5500"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
