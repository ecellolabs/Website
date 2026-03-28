import type { Metadata } from "next";
import Header from "../components/header";
import Hero from "../components/hero";
import Services from "../components/services";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Home() {
  return (
    <>
      Hello World
    </>
  );
}
