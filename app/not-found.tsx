import type { Metadata } from "next";
import NotFoundContent from "@/components/not-found/content";

export const metadata: Metadata = {
  title: "404 — Page not found · Ecello Labs",
  description: "This automation broke down. The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return <NotFoundContent />;
}
