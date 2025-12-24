# AI/Agent Instructions for bakir.dev

## Project Overview
- **Framework**: Next.js 16 (App Router) with React 19.
- **Styling**: Tailwind CSS 4.
- **UI Components**: Shadcn UI (located in [src/shadcn/components/ui](src/shadcn/components/ui)) and Hugeicons.
- **Content**: MDX-based blog posts located in [BLOG/](BLOG/) (aliased as `&/*`).
- **Tooling**: Biome for linting and formatting, `pnpm` for package management.

## Architecture & Patterns
- **Feature-Based Components**: Domain-specific components go in [src/features](src/features) (e.g., [Navbar](src/features/Navbar/Navbar.tsx), [Footer](src/features/Footer/Footer.tsx)).
- **Shared Components**: Generic UI components go in [src/shadcn/components](src/shadcn/components).
- **Pages**: Follow Next.js App Router conventions in [src/app](src/app).
- **Blog Architecture**:
  - Content: MDX files in [BLOG/](BLOG/).
  - Routes: [src/app/blog](src/app/blog).
  - Metadata: Registered in `blogs` array in [src/lib/blogs.ts](src/lib/blogs.ts). Only `title`, `published`, `slug`, and `description` are used.
  - Components: Custom MDX components (like `A`, `Pre`) in [src/features/MDX](src/features/MDX) mapped via [src/mdx-components.tsx](src/mdx-components.tsx).
- **Metadata & Viewport**:
  - Extend `baseMetadata` from [src/lib/baseMetadata.ts](src/lib/baseMetadata.ts) for page metadata.
- **State Management**: Local state only. Global state is limited to `next-themes` for OS theming.
- **Theming**: `next-themes` provider in [src/app/layout.tsx](src/app/layout.tsx). Ensure `suppressHydrationWarning` on `html`.

## Coding Conventions
- **Linting/Formatting**: Use Biome. Run `pnpm lint:write` to fix issues and format files.
- **TypeScript**: Strict type checking is enforced. Run `pnpm tsc` to verify types.
- **Path Aliases**:
  - `@/*` → `src/*` (Application code)
  - `#/*` → `public/*` (Static assets)
  - `&/*` → `BLOG/*` (Blog content)
- **Styling**: Use the `cn()` utility from `@/shadcn/lib/utils` for merging classes only in conditional scenarios.

## Specific Implementation Patterns
- **Icons**: Use Hugeicons with the wrapper component pattern:
  ```tsx
  import { Home01Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/react";

  <HugeiconsIcon icon={Home01Icon} />
  ```
- **Layout**: Main content is typically wrapped in `<div className="container mx-auto px-4">`.

## Critical Workflows
- **Development**: `pnpm dev:clean` (deletes `.next` directory to prevent errors and ensure a clean start).
- **Linting**: `pnpm lint:write` (performs formatting and linting).
- **Type Check**: `pnpm tsc` (verifies types).
- **Build**: `pnpm build:clean` (deletes `.next` directory to prevent errors and ensure a clean start).
- **Clean Install**: `pnpm install:clean` (removes `node_modules` and pnpm lockfile).

## Deployment & Infrastructure
- **Hosting**: Custom VPS hosting using Dokploy.
- **Docker**: `Dockerfile` is used for the production build.
- **Testing**: Out of scope. No tests are implemented or required.

## Integration Points
- **MDX**: Configured in [next.config.ts](next.config.ts) using `@next/mdx` with `remark-gfm`.
- **Google Analytics**: Configured in root layout via `@next/third-parties/google`.
