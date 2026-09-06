"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Aurora, type AuroraProps } from "./aurora";
import { AURORA } from "@/data/constants";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends AuroraProps {
  /** Page content. Lifted above the canvas automatically. */
  children: ReactNode;
  /** Extra classes for the content wrapper. */
  className?: string;
}

/**
 * Drop-in animated background. Wrap a page's contents in it:
 *
 *   <AuroraBackground>
 *     ...page content...
 *   </AuroraBackground>
 *
 * The canvas is fixed to the viewport at z-0 and children are stacked above it,
 * so nothing else needs to change. Defaults come from AURORA in constants.ts;
 * pass any prop to override per page. Sits below the navbar (z-1000).
 */
export function AuroraBackground({ children, className, ...overrides }: AuroraBackgroundProps) {
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
          className="fixed inset-0 z-0 pointer-events-none animate-in fade-in duration-1000"
        >
          <Aurora {...AURORA} {...overrides} />
        </div>
      )}
      <div className={cn("relative z-10", className)}>{children}</div>
    </>
  );
}
