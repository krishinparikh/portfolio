"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Aurora, type AuroraProps } from "./aurora";
import { AURORA } from "@/data/constants";
import { cn } from "@/lib/utils";

const { height: DEFAULT_HEIGHT, opacity: DEFAULT_OPACITY, ...AURORA_DEFAULTS } = AURORA;

interface AuroraBackgroundProps extends AuroraProps {
  /** Page content. Lifted above the canvas automatically. */
  children: ReactNode;
  /** Extra classes for the content wrapper. */
  className?: string;
  /** Height of the canvas band, any CSS length. Defaults to AURORA.height. */
  height?: string;
  /** Overall strength, 0 to 1. Defaults to AURORA.opacity. */
  opacity?: number;
}

/**
 * Drop-in animated background. Wrap a page's contents in it:
 *
 *   <AuroraBackground>
 *     ...page content...
 *   </AuroraBackground>
 *
 * The canvas sits at the top of the document at z-0 and scrolls away with the
 * page; children are stacked above it, so nothing else needs to change.
 * Defaults come from AURORA in constants.ts; pass any prop to override per
 * page. Sits below the navbar (z-1000).
 *
 * The canvas is absolute with no positioned ancestor, so it anchors to the
 * document origin rather than to body's top padding. That keeps it starting
 * behind the navbar instead of below it.
 */
export function AuroraBackground({
  children,
  className,
  height = DEFAULT_HEIGHT,
  opacity = DEFAULT_OPACITY,
  ...overrides
}: AuroraBackgroundProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <>
      {enabled && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 z-0 pointer-events-none animate-in fade-in duration-1000"
          style={{
            height,
            opacity,
            // Fade the lower edge out so the band has no hard cutoff.
            maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          }}
        >
          <Aurora {...AURORA_DEFAULTS} {...overrides} />
        </div>
      )}
      <div className={cn("relative z-10", className)}>{children}</div>
    </>
  );
}
