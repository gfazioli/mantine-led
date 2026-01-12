# Mantine LED Component - Copilot Instructions

## Project Overview

This is a **Mantine React component library** monorepo that provides a LED indicator component. The project follows Mantine's factory pattern and Styles API conventions for building TypeScript-safe, polymorphic React components.

**Key Architecture:**
- **Monorepo Structure**: Yarn workspaces with `package/` (component source) and `docs/` (Next.js documentation site)
- **Build System**: Rollup bundles dual ESM/CJS outputs with CSS extraction, TypeScript declarations, and CSS module hashing
- **Component Pattern**: Polymorphic factory components using `@mantine/core` utilities (`polymorphicFactory`, `useStyles`, `createVarsResolver`)

## Critical Workflows

### Development Commands
```bash
npm run dev              # Start Next.js docs dev server (runs from docs/ workspace)
npm run build            # Full production build: Rollup → TypeScript types → CSS prep
npm run test             # Full test suite: syncpack, prettier, typecheck, lint, jest
npm run storybook        # Launch Storybook on port 8271
```

### Release Process
```bash
npm run release:patch    # Auto: increment version, build, push tags, deploy docs
npm run release:minor    # Uses scripts/release.ts with version-next
npm run release:major    # Requires clean working tree (git status)
```

**Critical**: Release script (`scripts/release.ts`) enforces clean git status, auto-updates `package/package.json` version, commits, tags, pushes, and deploys docs to GitHub Pages via `gh-pages -d docs/out`.

### Build Pipeline Details
1. **Rollup** (`rollup.config.mjs`): Bundles to `package/dist/{esm,cjs}` with CSS extraction
2. **TypeScript**: `scripts/generate-dts.ts` produces `.d.ts` and `.d.mts` declarations
3. **CSS**: `scripts/prepare-css.ts` generates `styles.css` and `styles.layer.css` (CSS layers support)
4. **CSS Modules**: Hashed with `hash-css-selector` using `'me'` prefix for scoping

## Component Development Patterns

### Factory Pattern (Required)
All components **must** use Mantine's polymorphic factory pattern. See existing `Led.tsx`:

```typescript
export type LedFactory = PolymorphicFactory<{
  props: LedProps;
  defaultComponent: 'div';
  defaultRef: HTMLDivElement;
  stylesNames: LedStylesNames;      // Styles API selectors
  vars: LedCssVariables;            // CSS custom properties
}>;

const varsResolver = createVarsResolver<LedFactory>((theme, { size, color }) => ({
  root: {
    '--led-size': getSize(size, 'led-size'),
    '--led-color': getThemeColor(color, theme),
  },
}));

export const Led = polymorphicFactory<LedFactory>((_props, ref) => {
  const props = useProps('Led', defaultProps, _props);
  const getStyles = useStyles<LedFactory>({ /* ... */ });
  return <Box ref={ref} {...getStyles('root')} {...others} />;
});
```

**Critical Rules:**
- Use `unknown` for generics (avoid `any`)
- Always forward `ref` via `polymorphicFactory`
- Use `useProps` for default prop merging
- Define CSS variables in `varsResolver` using theme helpers (`getSize`, `getRadius`, `getThemeColor`)

### Styles API Convention
Every component exposes styling hooks via `classNames`, `styles`, `vars` props. Define metadata in `docs/styles-api/ComponentName.styles-api.ts`:

```typescript
export const LedStylesApi: StylesApiData<LedFactory> = {
  selectors: {
    root: 'Root element',
    light: 'Inner light indicator',
  },
  vars: {
    root: {
      '--led-size': 'Controls LED size',
      '--led-color': 'Controls LED color theme',
    },
  },
  modifiers: [
    { modifier: 'data-active', selector: 'root', condition: '`active` prop is set' }
  ],
};
```

CSS modules (`Led.module.css`) must use these variables:
```css
.root {
  width: var(--led-size);
  height: var(--led-size);
  background-color: var(--led-color);
}
```

## Project-Specific Conventions

### Package Naming Confusion
**WARNING**: README mentions `@gfazioli/mantine-led` but this is the LED component project. The package name has inconsistencies:
- Root `package.json`: Uses placeholder `m-90d2bb8` (not published)
- `package/package.json`: Published as `@gfazioli/mantine-led`
- README/docs reference "flip" and "led" terminology (copy-paste artifacts from template)

**Always edit `package/package.json`** for actual npm package metadata.

### TypeScript Configuration
- **`tsconfig.json`**: Development config (includes `package`, `scripts`, `@types`)
- **`tsconfig.build.json`**: Production build scope (excludes tests, stories, docs)
- **`tsconfig.eslint.json`**: Extends base for linting (includes all JS/TS files)

Don't use `skipLibCheck: true` as a crutch for type errors in application code.

### Import Order (Auto-sorted by Prettier)
Per `@ianvs/prettier-plugin-sort-imports` config:
1. CSS imports
2. React/React DOM
3. Node built-ins
4. Third-party packages
5. `@mantine/*` packages
6. Local imports (parent `..`, then sibling `./`)
7. CSS modules last

Run `npm run prettier:write` before commits.

### Testing Requirements
Use `@mantine-tests/core` renderer (not `@testing-library/react` directly):

```typescript
import { render } from '@mantine-tests/core';

it('forwards ref', () => {
  const ref = React.createRef<HTMLDivElement>();
  render(<Led ref={ref} />);
  expect(ref.current).toBeTruthy();
});
```

Jest config mocks CSS with `identity-obj-proxy`, runs in jsdom environment. See `jsdom.mocks.cjs` for `window.matchMedia` polyfill.

## Documentation Workflow

### Demo Files
Create in `docs/demos/ComponentName.demo.*.tsx`:
- **Basic**: `type: 'code'` with inline code string
- **Configurator**: `type: 'configurator'` with `controls` object for interactive props
- Export as named constant matching filename: `export const basic: MantineDemo = { ... }`

Import all demos in `docs/demos/index.ts` for consumption in MDX.

### MDX Structure
Main page at `docs/docs.mdx`:
```mdx
import { InstallScript } from './components/InstallScript/InstallScript';
import * as demos from './demos';

<Demo data={demos.basic} />
<PropsTable component="Led" />
<StylesApiTable component="Led" />
```

**Auto-generation**: Run `npm run docgen` (executes `scripts/docgen.ts` using `mantine-docgen-script`) to generate `docs/docgen.json` with props metadata.

## Integration Points

### External Dependencies
- **Mantine v8.x**: Core UI framework (requires `@mantine/core` + `@mantine/hooks` peer deps)
- **React 18/19**: Support both versions (check `package/package.json` peerDependencies)
- **CSS Modules**: Scoped via `hash-css-selector` with `'me'` prefix (configured in Rollup)
- **PostCSS**: Uses `postcss-preset-mantine` for layer utilities

### Build Artifacts (Git-ignored)
- `package/dist/`: Bundled ESM/CJS + types + CSS
- `docs/.next/`: Next.js build cache
- `docs/out/`: Static export for GitHub Pages
- `docs/docgen.json`: Auto-generated props metadata

## Common Pitfalls

### CSS Layers
The build produces **two CSS files**:
- `styles.css`: Standard bundle
- `styles.layer.css`: Same content wrapped in `@layer` for cascade control

Users import one or the other, not both.

### Version Synchronization
Run `npm run syncpack` to detect mismatches between workspace package versions. Syncpack config expects aligned versions for `@mantine/*` packages across `package/package.json` and `docs/package.json`.

### Rollup Banner Plugin
The `rollup-plugin-banner2` adds `'use client';` directive to all files except `index.{js,mjs}` for Next.js App Router compatibility. Don't manually add this directive to source files.

### GitHub Pages Deployment
`scripts/nojekyll.ts` creates `.nojekyll` file in `docs/out/` to prevent GitHub from ignoring underscore-prefixed files (Next.js uses `_next/`).

## AI-Specific Guidance

When asked to add features or modify components:
1. **Read the existing SKILL**: Check `.github/skills/mantine-react-component-dev/SKILL.md` for comprehensive Mantine patterns
2. **Follow factory pattern**: Don't create plain functional components - use `polymorphicFactory`
3. **Update Styles API**: Add new selectors/vars to `docs/styles-api/` metadata files
4. **Generate demos**: Create both basic and configurator demos showing the feature
5. **Run full test suite**: Execute `npm run test` before claiming completion

**Don't assume** this is a standard React library - Mantine has specific patterns for polymorphism, styling, and type safety that must be followed.
