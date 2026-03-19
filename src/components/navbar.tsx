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
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-center px-8 py-3 bg-white border-b border-border z-[1000] md:justify-center">
      <button
        className="hidden md:hidden max-md:flex flex-col justify-between w-6 h-6 bg-transparent border-none cursor-pointer p-0"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span
          className={`w-full h-0.5 bg-text-muted transition-all duration-300 origin-center ${
            isMenuOpen ? "translate-y-[11px] rotate-45" : ""
          }`}
        />
        <span
          className={`w-full h-0.5 bg-text-muted transition-all duration-300 origin-center ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-full h-0.5 bg-text-muted transition-all duration-300 origin-center ${
            isMenuOpen ? "-translate-y-[11px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center justify-center gap-12">
        {NAV_ITEMS.map(({ label, href, exact }) => (
          <Link
            key={href}
            href={href}
            className={`text-base no-underline transition-colors duration-200 hover:text-black ${
              isActive(href, exact) ? "text-black" : "text-text-muted"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden fixed top-[57px] left-0 right-0 bg-white/[0.98] backdrop-blur-[10px] flex-col gap-6 p-8 border-b border-border transition-all duration-300 ${
          isMenuOpen
            ? "flex translate-y-0 opacity-100 visible"
            : "flex -translate-y-full opacity-0 invisible"
        }`}
      >
        {NAV_ITEMS.map(({ label, href, exact }) => (
          <Link
            key={href}
            href={href}
            className={`text-lg no-underline py-2 w-full text-center transition-colors duration-200 hover:text-black ${
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
