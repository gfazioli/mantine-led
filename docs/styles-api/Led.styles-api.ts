import { LedFactory } from '@gfazioli/mantine-led';
import type { StylesApiData } from '../components/styles-api.types';

export const LedStylesApi: StylesApiData<LedFactory> = {
  selectors: {
    root: 'Root element',
    led: 'LED element',
    label: 'Label element',
    glow: 'Outer glow effect element',
    light: 'Inner light reflection element',
  },

  vars: {
    root: {
      '--led-size': 'Controls LED width and height',
      '--led-radius': 'Controls border radius',
      '--led-color': 'Controls LED base color',
      '--led-off-color': 'Controls LED color when off',
      '--led-intensity': 'Controls brightness intensity (0-1)',
      '--led-animation-duration': 'Controls animation duration',
      '--led-animation-count': 'Controls animation iteration count',
      '--led-glow-size': 'Controls outer glow size',
      '--led-justify-content': 'Controls label and LED alignment',
    },
  },

  modifiers: [
    {
      modifier: 'data-label-position',
      selector: 'root',
      value: 'left | right',
      condition: 'Based on `labelPosition` prop',
    },
    {
      modifier: 'data-interactive',
      selector: 'root',
      condition: '`onChange` prop is provided',
    },
    {
      modifier: 'data-value',
      selector: 'led',
      condition: '`value` prop is true',
    },
    {
      modifier: 'data-animate',
      selector: 'led',
      value: 'pulse | flash | breathe | blink | glow',
      condition: '`animate` prop is true, `value` is true, and `animationType` is not `none`',
    },
    {
      modifier: 'data-variant',
      selector: 'led',
      value: 'flat | 3d',
      condition: 'Based on `variant` prop',
    },
    {
      modifier: 'data-shape',
      selector: 'led',
      value: 'circle | square | rectangle',
      condition: 'Based on `shape` prop',
    },
  ],
};
