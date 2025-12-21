# Copilot Instructions for bakir.dev

## Project Overview
- **Framework**: Next.js 16 (App Router) with React 19.
- **Styling**: Tailwind CSS 4, `clsx`, `tailwind-merge`.
- **UI Components**: Shadcn UI (located in [src/shadcn/components/ui](src/shadcn/components/ui)) and Hugeicons.
- **Content**: MDX-based blog posts located in [src/app/blog/(blogs)](src/app/blog/(blogs)).
- **Tooling**: Biome for linting and formatting, `pnpm` for package management.

## Architecture & Patterns
- **Feature-Based Components**: Domain-specific components should be placed in [src/features](src/features) (e.g., [Navbar](src/features/Navbar/Navbar.tsx), [Footer](src/features/Footer/Footer.tsx)).
- **Reusable Components**: Generic components should be placed in [src/shadcn/components](src/shadcn/components) (e.g., [theme-provider.tsx](src/shadcn/components/theme-provider.tsx)).
- **Metadata**: Centralized metadata is in [src/lib/baseMetadata.ts](src/lib/baseMetadata.ts). Always extend `baseMetadata` when defining page-specific metadata.
- **Blog Data**: Blog post metadata (title, date, slug, description) must be added to the `blogs` array in [src/lib/blogs.ts](src/lib/blogs.ts).
- **Theme**: Uses `next-themes` with a `ThemeProvider` in [src/app/layout.tsx](src/app/layout.tsx). Ensure `suppressHydrationWarning` is present on the `html` tag.

## Coding Conventions
- **Linting/Formatting**: Use Biome. Run `pnpm lint:write` to fix issues and format files.
- **TypeScript**: Strict type checking is enforced. Run `pnpm tsc` to verify types.
- **Imports**:
  - Use `@/` for `src/` (e.g., `@/features/Navbar`).
  - Use `#/` for `public/` (e.g., `#/images/logo.png`).
- **Styling**: Use the `cn()` utility from `@/shadcn/lib/utils` for merging classes.

## Specific Implementation Patterns
- **Icons**: Use Hugeicons with the wrapper component pattern:
  ```tsx
  import { Home01Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/react";

  <HugeiconsIcon icon={Home01Icon} />
  ```

## Critical Workflows
- **Development**: `pnpm dev:clean`
- **Linting**: `pnpm lint:write`
- **Type Check**: `pnpm tsc`
- **Build**: `pnpm build:clean`
- **Clean Install**: `pnpm install:clean` (removes `node_modules` and lockfile)

## Integration Points
- **MDX**: Configured in [next.config.ts](next.config.ts) and [src/mdx-components.tsx](src/mdx-components.tsx).
