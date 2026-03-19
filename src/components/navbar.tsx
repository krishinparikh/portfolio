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
    <>
      {/* Desktop nav — centered pill */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[1000] hidden md:flex items-center px-8 py-2.5 rounded-full border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]">
        <div className="flex items-center gap-10">
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
      </nav>

      {/* Mobile nav — square button top-right */}
      <button
        className="fixed top-4 right-4 z-[1001] flex md:hidden flex-col justify-between w-10 h-10 p-2.5 rounded-xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] cursor-pointer"
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

      {/* Mobile fullscreen overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[1000] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {NAV_ITEMS.map(({ label, href, exact }) => (
          <Link
            key={href}
            href={href}
            className={`text-2xl no-underline transition-colors duration-200 hover:text-black ${
              isActive(href, exact) ? "text-black" : "text-text-muted"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
