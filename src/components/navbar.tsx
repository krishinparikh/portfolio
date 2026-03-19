"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/data/constants";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[1000] flex items-center px-8 py-2.5 rounded-full border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]">
      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-10">
        {NAV_ITEMS.map(({ label, href, exact }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm no-underline transition-colors duration-200 hover:text-black ${
              isActive(href, exact) ? "text-black" : "text-text-muted"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="hidden max-md:flex flex-col justify-between w-5 h-4 bg-transparent border-none cursor-pointer p-0 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span
          className={`w-full h-0.5 bg-text-muted transition-all duration-300 origin-center ${
            isMenuOpen ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`w-full h-0.5 bg-text-muted transition-all duration-300 origin-center ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-full h-0.5 bg-text-muted transition-all duration-300 origin-center ${
            isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden fixed top-16 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] flex-col gap-2 p-4 transition-all duration-300 ${
          isMenuOpen
            ? "flex translate-y-0 opacity-100 visible"
            : "flex -translate-y-4 opacity-0 invisible pointer-events-none"
        }`}
      >
        {NAV_ITEMS.map(({ label, href, exact }) => (
          <Link
            key={href}
            href={href}
            className={`text-base no-underline py-2 w-full text-center rounded-lg transition-colors duration-200 hover:text-black hover:bg-white/60 ${
              isActive(href, exact) ? "text-black" : "text-text-muted"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
