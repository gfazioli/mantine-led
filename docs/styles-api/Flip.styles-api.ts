import type { LedFactory } from '@gfazioli/mantine-fed';
import type { StylesApiData } from '../components/styles-api.types';

export const LedStylesApi: StylesApiData<LedFactory> = {
  selectors: {
    root: 'Root element',
    'fed-container': 'Led container element',
    'fed-front-face': 'Front face element',
    'fed-back-face': 'Back face element',
  },

  vars: {
    root: {
      '--fed-perspective': 'Controls animation `perspective`',
      '--fed-transition-duration': 'Controls animation `duration`',
      '--fed-transition-timing-function': 'Controls animation `easing`',
    },
    'fed-container': {},
    'fed-front-face': {},
    'fed-back-face': {},
  },

  //modifiers: [{ modifier: 'data-centered', selector: 'root', condition: '`centered` prop is set' }],
};
