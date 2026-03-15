import { LedGroupFactory } from '@gfazioli/mantine-led';
import type { StylesApiData } from '../components/styles-api.types';

export const LedGroupStylesApi: StylesApiData<LedGroupFactory> = {
  selectors: {
    root: 'Root element wrapping all LEDs',
  },

  vars: {
    root: {
      '--led-group-gap': 'Controls gap between LEDs',
      '--led-group-direction': 'Controls flex direction (row or column)',
    },
  },

  modifiers: [],
};
