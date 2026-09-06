"use client";

import { useEffect, useState, type ReactNode } from "react";
import { DotGrid, type DotGridProps } from "./dot-grid";
import { DOT_GRID } from "@/data/constants";
import { cn } from "@/lib/utils";

interface DotGridBackgroundProps extends DotGridProps {
  /** Page content. Lifted above the canvas automatically. */
  children: ReactNode;
  /** Extra classes for the content wrapper. */
  className?: string;
}

/**
 * Drop-in interactive dot backdrop. Wrap a page's contents in it:
 *
 *   <DotGridBackground>
 *     ...page content...
 *   </DotGridBackground>
 *
 * The canvas is fixed to the viewport at z-0 and children are stacked above it,
 * so nothing else needs to change. Defaults come from DOT_GRID in constants.ts;
 * pass any prop to override per page. Sits below the navbar (z-1000).
 *
 * Under prefers-reduced-motion the dots still render but stop reacting, since
 * the grid itself is a static texture and only the fling/shockwave is motion.
 */
export function DotGridBackground({ children, className, ...overrides }: DotGridBackgroundProps) {
  const [interactive, setInteractive] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setInteractive(!query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <>
      <div aria-hidden className="fixed inset-0 z-0 pointer-events-none">
        <DotGrid {...DOT_GRID} interactive={interactive} {...overrides} />
      </div>
      <div className={cn("relative z-10", className)}>{children}</div>
    </>
  );
}
