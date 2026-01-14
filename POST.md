# Building Reactive Status Indicators with the Mantine LED Component

**Subtitle:** A simple, type-safe LED status indicator for modern React dashboards

Designing clear, glanceable status indicators is one of the most underrated parts of UI design. Whether you are building an admin dashboard, a real‑time monitoring panel, or a fun DEFCON‑style alert system, users need an immediate visual cue about what is going on.

In this article, we will explore the `Led` component from the `@gfazioli/mantine-led` package: a small, focused React component built specifically for the Mantine UI library (https://mantine.dev/). It is designed to be:

- Simple to install and use
- Fully controlled and predictable
- Seamlessly theme‑aware
- Easily customizable via Mantine’s Styles API

You can also find this and other Mantine-based extensions on the Mantine Extensions website at https://mantine-extensions.vercel.app/.

---

## Installation and setup

The LED component is published as a standalone package. Install it via your favorite package manager:

```bash
npm install @gfazioli/mantine-led
# or
yarn add @gfazioli/mantine-led
```

Then, import the styles once at the root of your application:

```tsx
import '@gfazioli/mantine-led/styles.css';
```

If you are using CSS layers and want finer control over the cascade, you can instead import the layered stylesheet:

```tsx
import '@gfazioli/mantine-led/styles.layer.css';
```

That’s all you need to start using the component in any React + Mantine UI project.

---

## Basic usage: a single LED indicator

At its core, the `Led` component is a compact visual indicator controlled through props. A minimal example looks like this:

```tsx
import { Led } from '@gfazioli/mantine-led';

function ServerStatus() {
  return <Led value="on" color="green" label="Server online" />;
}
```

Key ideas here:

- `value` controls the LED state (for example, `"on"`, `"off"`, or other states supported by your design).
- `color` is integrated with the Mantine theme, so you can reuse existing semantic colors.
- `label` lets you attach a text (or any React node) describing what the LED represents.

This small piece of UI is immediately understandable to users, but remains type‑safe and composable in a larger React codebase.

---

## Fully controlled with the `value` prop

One of the most important design decisions of this component is that it is fully controlled via the `value` prop. That means you always decide when and how the LED changes.

```tsx
import { useState } from 'react';
import { Button, Group } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

export function ControlledExample() {
  const [status, setStatus] = useState<'on' | 'off'>('off');

  return (
    <Group align="center" gap="md">
      <Led value={status} color={status === 'on' ? 'green' : 'red'} label={status === 'on' ? 'Active' : 'Inactive'} />

      <Button onClick={() => setStatus((current) => (current === 'on' ? 'off' : 'on'))}>
        Toggle status
      </Button>
    </Group>
  );
}
```

Because the `Led` is controlled, it behaves exactly like any other input or view component in a modern React + TypeScript app: your state is the single source of truth, and the UI simply reflects it.

---

## Theme-aware colors

The LED component integrates seamlessly with the Mantine theme. The `color` prop accepts any Mantine theme color, so your indicators always match the rest of your design system:

```tsx
import { Stack } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function ColorPalettePreview() {
  return (
    <Stack>
      <Led value="on" color="green" label="Success" />
      <Led value="on" color="yellow" label="Warning" />
      <Led value="on" color="red" label="Error" />
      <Led value="on" color="blue" label="Info" />
    </Stack>
  );
}
```

By reusing Mantine’s palette, LEDs automatically adapt when you change themes (for example, switching between light and dark mode) without any extra work.

---

## Built-in animations for real-time feedback

Static indicators are useful, but animated feedback can make status changes much more noticeable. The LED component ships with multiple built‑in animations that you can apply via props:

- `pulse`: smooth pulsing effect (default)
- `flash`: quick flashing for urgent alerts
- `breathe`: slow breathing effect for softer attention
- `blink`: regular blinking pattern
- `glow`: a strong glow for highly visible states

A simple animated example:

```tsx
import { Group } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function AnimatedIndicators() {
  return (
    <Group>
      <Led value="on" color="green" animation="pulse" label="Healthy" />
      <Led value="on" color="yellow" animation="breathe" label="Degraded" />
      <Led value="on" color="red" animation="flash" label="Critical" />
    </Group>
  );
}
```

These animations make it easy to differentiate between normal, warning, and critical states at a glance, while keeping the API surface intentionally small and easy to remember.

---

## Flexible labels and layout

Real-world dashboards rarely show an icon alone; labels are essential for clarity. The `Led` component provides a `label` prop that accepts any React node and a `labelPosition` prop to control layout.

```tsx
import { Badge } from '@mantine/core';
import { Led } from '@gfazioli/mantine-led';

function LabeledLed() {
  return (
    <Led
      value="on"
      color="teal"
      labelPosition="right"
      label={<Badge color="teal">Payment gateway</Badge>}
    />
  );
}
```

Because `label` is a React node, you are not limited to plain text: badges, icons, formatted text, or composite components all work out of the box.

---

## Styling with Mantine Styles API

The `Led` component is built following Mantine’s factory pattern and fully supports the Styles API (https://mantine.dev/styles/styles-api/). This means you can target internal parts of the component using `classNames`, `styles`, or CSS variables.

For example, you can override styles of the root element, the LED itself, or the label container:

```tsx
import { Led } from '@gfazioli/mantine-led';

function CustomStyledLed() {
  return (
    <Led
      value="on"
      color="blue"
      label="Custom styled"
      classNames={{
        root: 'my-root',
        led: 'my-led',
        label: 'my-label',
      }}
    />
  );
}
```

Combined with CSS variables like `--led-size` and `--led-color`, you can fine‑tune dimensions, spacing, and visual tone without losing the type safety and clarity of the public props.

---

## Real-world use cases

The official documentation showcases some practical patterns that are extremely easy to reproduce in your own codebase:

### System status panel

A panel displaying multiple services, each represented by a label and an LED. This pattern is ideal for infrastructure dashboards, IoT control panels, and internal tooling.

- Each row uses a `Led` component with a descriptive label
- Colors and animations convey health (green/pulse for healthy, yellow/breathe for partial, red/flash for critical)
- The component’s simplicity keeps the JSX readable even with many indicators on screen

### DEFCON-style alert system

For more playful or storytelling UIs, you can stack multiple LEDs with different colors and animations to represent escalating alert levels (like a DEFCON scale). Because the API is so small, the resulting code stays approachable, even as the visual result feels dynamic and polished.

---

## Why this LED component works so well with Mantine

What makes this component stand out is how naturally it fits into a Mantine UI (https://mantine.dev/) ecosystem:

- It uses Mantine’s polymorphic factory and Styles API under the hood, so its behavior is consistent with core Mantine components.
- It respects theme colors and sizing scales, providing a familiar configuration surface for existing Mantine users.
- It embraces controlled state via the `value` prop, making it easy to integrate with Zustand, Redux, React Query, or any other data layer.

All of this is wrapped in a tiny, focused API that you can learn in minutes.

---

## Conclusion

If you need a compact, expressive way to visualize status in your React + Mantine UI projects, the `@gfazioli/mantine-led` component is a great fit. It combines:

- Minimal, predictable props
- Theme‑aware colors and sizes
- Built‑in animations for richer feedback
- Flexible labels and a powerful Styles API

Together, these features make it trivial to build anything from simple on/off indicators to complex monitoring dashboards, without sacrificing type safety or design consistency.

Explore more Mantine‑powered components and ideas on Mantine UI at https://mantine.dev/ and discover additional community extensions on Mantine Extensions at https://mantine-extensions.vercel.app/.
