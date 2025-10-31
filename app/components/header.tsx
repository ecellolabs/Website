"use client";
import { useState } from "react";
import GetInTouch from "./ui/get-in-touch";

export default function Header() {
  const navItems = ['Home', 'About Us', 'Services', 'Products'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
      <nav className="max-w-7xl mx-auto">
        {/* Desktop/Tablet Layout */}
        <div className="hidden md:grid md:grid-cols-3 items-center">
          <div className="justify-self-start">
            <a href="/" className="font-bold text-xl">
              <span className="text-[#002B5C]">ec</span>
              <span className="text-[#4AB8E8]">e</span>
              <span className="text-[#1E88C7]">l</span>
              <span className="text-[#87CEEB]">l</span>
              <span className="text-[#4AB8E8]">o</span>
            </a>
          </div>
          <ul className="justify-self-center flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-foreground transition-opacity duration-300 hover:opacity-70"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="justify-self-end">
            <GetInTouch />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          <a href="/" className="font-bold text-xl">
            <span className="text-[#002B5C]">ec</span>
            <span className="text-[#4AB8E8]">e</span>
            <span className="text-[#1E88C7]">l</span>
            <span className="text-[#87CEEB]">l</span>
            <span className="text-[#4AB8E8]">o</span>
          </a>
          <div className="flex items-center gap-3">
            <GetInTouch />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-foreground/10">
            <ul className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground transition-opacity duration-300 hover:opacity-70 block py-2"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}