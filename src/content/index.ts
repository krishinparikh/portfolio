import { ComponentType } from "react";

import * as TofCrm from "./projects/tof-crm.mdx";
import * as Curio from "./projects/curio.mdx";
import * as AfferenceSDK from "./projects/afference-sdk.mdx";
import * as DigitalMind from "./projects/digital-mind.mdx";
import * as CubeFlow from "./projects/cube-flow.mdx";
import * as EightPuzzle from "./projects/eight-puzzle.mdx";
import * as Nexa from "./projects/nexa.mdx";
import * as PeerEd from "./projects/peer-ed.mdx";
import * as Lineage from "./projects/lineage.mdx";
import * as VcCouncil from "./projects/vc-council.mdx";

import * as GenAIConsulting from "./services/generative-ai-consulting.mdx";
import * as CRMImplementation from "./services/crm-implementation.mdx";
import * as RubiksCubeLessons from "./services/rubiks-cube-lessons.mdx";

export interface ContentEntry {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  slug: string;
  type: "project" | "service";
  tools?: string;
  website?: string;
  github?: string;
  order: number;
  Component: ComponentType;
}

const modules = [
  TofCrm,
  Curio,
  AfferenceSDK,
  DigitalMind,
  CubeFlow,
  EightPuzzle,
  Nexa,
  PeerEd,
  Lineage,
  VcCouncil,
  GenAIConsulting,
  CRMImplementation,
  RubiksCubeLessons,
];

const allContent: ContentEntry[] = modules.map((mod) => ({
  ...mod.frontmatter,
  Component: mod.default,
}));

export function getProjects(): ContentEntry[] {
  return allContent
    .filter((c) => c.type === "project")
    .sort((a, b) => a.order - b.order);
}

export function getServices(): ContentEntry[] {
  return allContent
    .filter((c) => c.type === "service")
    .sort((a, b) => a.order - b.order);
}

export function getContentBySlug(slug: string): ContentEntry | undefined {
  return allContent.find((c) => c.slug === slug);
}
