# Repository Guidelines

## Project Structure & Module Organization

This is a TanStack Start React/TypeScript site built with Vite and Bun. Application code lives in `src/`. File-based routes are in `src/routes`; each `.tsx` file maps to a URL, and `src/routes/__root.tsx` is the shared app shell. Do not edit `src/routeTree.gen.ts` by hand because it is generated.

Shared components live in `src/components`, with shadcn-style primitives under `src/components/ui`. Reusable utilities belong in `src/lib`, hooks in `src/hooks`, and images/assets in `src/assets`. Static public files, such as `robots.txt`, belong in `public/`.

## Build, Test, and Development Commands

Use Bun for dependency management because the repository includes `bun.lock`.

- `bun install` installs dependencies.
- `bun run dev` starts the local Vite development server.
- `bun run build` creates the production build.
- `bun run build:dev` builds in development mode.
- `bun run preview` serves the built app for local inspection.
- `bun run lint` runs ESLint across the repository.
- `bun run format` formats files with Prettier.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Prefer path aliases from `components.json`, such as `@/components`, `@/components/ui`, `@/lib`, and `@/hooks`, instead of long relative imports.

Prettier is the source of formatting truth: 100-character print width, semicolons, double quotes, and trailing commas. Keep component filenames in PascalCase, for example `PageHero.tsx`, and route filenames lowercase and URL-oriented, for example `services.tsx` or `sitemap[.]xml.ts`.

## Testing Guidelines

No test runner is currently configured in `package.json`. For now, verify changes with `bun run lint` and `bun run build`. When adding tests, place them near the code they cover using a clear pattern such as `ComponentName.test.tsx`, and add the test command to `package.json`.

## Commit & Pull Request Guidelines

Recent history uses short, plain-English commit subjects, for example `Built Ullasco site & design` or `Changes`. Prefer more descriptive subjects that summarize the shipped behavior, such as `Add contact page validation`.

Pull requests should include a concise description, relevant issue or task links, screenshots for visual changes, and the commands run for verification. Note any generated files, route changes, or asset additions.

## Agent-Specific Instructions

Preserve the TanStack Start routing conventions in `src/routes/README.md`. Avoid Next.js or Remix patterns such as `src/pages`, `app/layout.tsx`, or `_app` routes.
