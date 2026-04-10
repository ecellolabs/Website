import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.ecello.net"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
