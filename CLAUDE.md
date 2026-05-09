# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run lint` — Run ESLint
- No test framework is configured

## Architecture

Next.js 16 personal portfolio site using the App Router, React 19, TypeScript, Tailwind CSS v4, and MDX for content.

### Content System

Content (projects and services) is authored as MDX files in `src/content/projects/` and `src/content/services/`. Each MDX file exports a `frontmatter` object with metadata (title, subtitle, description, image, slug, type, order, tools, website, github, etc.) and the default export is the MDX body. `src/content/story.mdx` is a standalone MDX file used directly by the story page.

`src/content/index.ts` is the central content registry — it imports all MDX modules, builds a unified `ContentEntry[]` array, and exports `getProjects()`, `getServices()`, and `getContentBySlug()`. To add a new project or service, create an MDX file and add its import to this file.

`src/data/projects.ts` and `src/data/services.ts` adapt content entries into the `Project`/`Service` types used by pages.

### Routing

- `/` — Home page
- `/projects` — Project listing
- `/projects/[slug]` — Individual project (rendered from MDX)
- `/services` — Service listing
- `/services/[slug]` — Individual service (rendered from MDX)
- `/story` — Story page
- `/blog` — Blog page

### Key Conventions

- Path alias: `@/*` maps to `./src/*`
- Fonts: Geist Sans (primary), Funnel Sans, Inter Tight, Space Grotesk loaded in root layout
- UI components: shadcn/ui (new-york style) with Radix UI primitives; add via `npx shadcn add <component>`
- Styling: Tailwind CSS v4 with CSS variables for theming (`src/app/globals.css`)
- Constants (social links, nav items, `HOME_PHRASES`) live in `src/data/constants.ts`
- Shared layout components: `MinorPageLayout`, `ContentContainer`, `Navbar`, `Footer`, `ScrollToTop`
