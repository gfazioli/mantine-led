# CLAUDE.md

## Project
`@gfazioli/mantine-led` — a Mantine 9 React component library providing a customizable LED indicator with compound components for groups, matrices, and seven-segment displays. Requires React 19 and TypeScript 6.

## Commands
| Command | Purpose |
|---------|---------|
| `yarn build` | Build the npm package via Rollup |
| `yarn dev` | Start the Next.js docs dev server (port 9281) |
| `yarn test` | Full test suite (syncpack + oxfmt + typecheck + lint + jest) |
| `yarn jest` | Run only Jest unit tests |
| `yarn docgen` | Generate component API docs (docgen.json) |
| `yarn docs:build` | Build the Next.js docs site for production |
| `yarn docs:deploy` | Build and deploy docs to GitHub Pages |
| `yarn lint` | Run ESLint and Stylelint |
| `yarn format:write` | Format all files with oxfmt |
| `yarn storybook` | Start Storybook dev server |
| `yarn clean` | Remove build artifacts |
| `yarn release:patch` | Bump patch version and deploy docs |
| `diny yolo` | AI-assisted commit (stage all, generate message, commit + push) |

> **Important**: After changing the public API, always run `yarn clean && yarn build` before `yarn test`.

## Architecture

### Workspace Layout
Yarn workspaces monorepo with two workspaces: `package/` (npm package) and `docs/` (Next.js 15 documentation site).

### Package Source (`package/src/`)
- `Led.tsx` / `Led.module.css` — main LED indicator component (polymorphic factory pattern)
- `LedIndicator.tsx` — internal indicator sub-component
- `Group/LedGroup.tsx` — compound component `Led.Group` for arranging LEDs in a row
- `Matrix/LedMatrix.tsx` — compound component `Led.Matrix` for grid layouts
- `SevenSegment/LedSevenSegment.tsx` — compound component `Led.SevenSegment` for numeric digit display
- `Led.test.tsx` / `Led.story.tsx` — tests and stories

### Build Pipeline
Rollup bundles to dual ESM/CJS with `'use client'` banner. CSS modules hashed with `hash-css-selector` (prefix `me`). TypeScript declarations via `rollup-plugin-dts`. CSS split into `styles.css` and `styles.layer.css`.

## Component Details
- Uses compound component pattern: `Led`, `Led.Group`, `Led.Matrix`, `Led.SevenSegment`
- `LedMatrix` uses the Mantine-native responsive CSS pattern: `cols` and `gap` are `StyleProp<T>`, resolved via `LedMatrixMediaVariables` component (`InlineStyles` + CSS media queries, same approach as Mantine's `SimpleGrid`)
- CSS keyframes must be kebab-case (`@keyframes led-pulse`, not `ledPulse`)
- CSS variables prefixed with `--led-*`
- Data attributes control animation state via CSS selectors

## Testing
Jest with `jsdom`, `esbuild-jest` transform, CSS mocked via `identity-obj-proxy`. Tests use `@mantine-tests/core` render helper.

## Ecosystem
This repo is part of the Mantine Extensions ecosystem, derived from the `mantine-base-component` template. See the workspace `CLAUDE.md` (in the parent directory) for:
- Development checklist (code -> test -> build -> docs -> release)
- Cross-cutting patterns (compound components, responsive CSS, GitHub sync)
- Update packages workflow
- Release process
