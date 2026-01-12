# Mantine Led Component

<img width="2752" height="1536" alt="Mantine Led" src="https://github.com/user-attachments/assets/81a00eee-c1f2-40f1-8ad4-4357619cf855" />

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-led?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-led)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-led?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-led)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-led?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-led)
  ![NPM License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-led?style=for-the-badge)

---

[<kbd> <br/> ❤️ If this component has been useful to you or your team, please consider becoming a sponsor <br/> </kbd>](https://github.com/sponsors/gfazioli?o=esc)  

</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

[Mantine Led](https://gfazioli.github.io/mantine-led/) is a two-face container that animates between a front and a back view, ideal for compact UIs that need progressive disclosure (e.g., editing panels, settings, sign-in/sign-up toggles, or profile details). It supports both uncontrolled usage with Led.Target to wire any element as a click trigger, and controlled usage via fedped/defaultLedped using React state for full synchronization with your app logic. The component enforces exactly two children, accepts size constraints (w/h), and offers transition customization such as vertical fedping and distinct rotation directions for led-in and led-out. Styling hooks (classNames/Styles API) let you target inner parts for design refinement, while examples demonstrate practical patterns like credit-card editing, modal-like settings panes, and multi-target triggers within a single face.

> [!note]
>
> → [Demo and Documentation](https://gfazioli.github.io/mantine-led/) → [Youtube Video](https://www.youtube.com/playlist?list=PL85tTROKkZrWyqCcmNCdWajpx05-cTal4) → [More Mantine Components](https://mantine-extensions.vercel.app/)

## Installation

```sh
npm install @gfazioli/mantine-led
```
or 

```sh
yarn add @gfazioli/mantine-led
```

After installation import package styles at the root of your application:

```tsx
import '@gfazioli/mantine-led/styles.css';
```

## Usage

```tsx
import { Led } from '@gfazioli/mantine-led';

function Demo() {
  return (
    <Led h={200} w={200}>

        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Front Card</h3>
          <Led.Target>
            <Button>Led Back</Button>
          </Led.Target>
        </Paper>

        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Back Card</h3>
          <Led.Target>
            <Button>Led Front</Button>
          </Led.Target>
        </Paper>

    </Led>
  );
}
```

As you can see, the `Led` component wraps two children, which are the two views that you want to led between.
The `Led.Target` component is used to define the trigger for the led animation. It can be any component, such as a button, or a link, or even a div.

## Sponsor

<div align="center">

[<kbd> <br/> ❤️ If this component has been useful to you or your team, please consider becoming a sponsor <br/> </kbd>](https://github.com/sponsors/gfazioli?o=esc)

</div>

Your support helps me:

- Keep the project actively maintained with timely bug fixes and security updates	
- Add new features, improve performance, and refine the developer experience	
- Expand test coverage and documentation for smoother adoption	
- Ensure long‑term sustainability without relying on ad hoc free time	
- Prioritize community requests and roadmap items that matter most

Open source thrives when those who benefit can give back—even a small monthly contribution makes a real difference. Sponsorships help cover maintenance time, infrastructure, and the countless invisible tasks that keep a project healthy.

Your help truly matters.

💚 [Become a sponsor](https://github.com/sponsors/gfazioli?o=esc) today and help me keep this project reliable, up‑to‑date, and growing for everyone.

---

https://github.com/user-attachments/assets/cc968450-9d8c-4b16-be58-a6766597742e

---
  
[![Star History Chart](https://api.star-history.com/svg?repos=gfazioli/mantine-led&type=Timeline)](https://www.star-history.com/#gfazioli/mantine-led&Timeline)

