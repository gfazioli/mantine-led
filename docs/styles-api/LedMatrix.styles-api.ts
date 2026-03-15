import { LedMatrixFactory } from '@gfazioli/mantine-led';
import type { StylesApiData } from '../components/styles-api.types';

export const LedMatrixStylesApi: StylesApiData<LedMatrixFactory> = {
  selectors: {
    root: 'Root grid element wrapping all LEDs',
  },

  vars: {
    root: {
      '--led-matrix-cols': 'Controls number of grid columns',
      '--led-matrix-gap': 'Controls gap between LEDs',
    },
  },

  modifiers: [],
};
