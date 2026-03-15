import { LedSevenSegmentFactory } from '@gfazioli/mantine-led';
import type { StylesApiData } from '../components/styles-api.types';

export const LedSevenSegmentStylesApi: StylesApiData<LedSevenSegmentFactory> = {
  selectors: {
    root: 'Root element wrapping all digits',
    digit: 'Single digit container',
    segment: 'Individual segment element',
    colon: 'Colon separator element',
    dot: 'Dot/period element',
  },

  vars: {
    root: {
      '--seven-seg-size': 'Controls digit height',
      '--seven-seg-color': 'Controls segment color',
      '--seven-seg-off-color': 'Controls inactive segment color',
      '--seven-seg-gap': 'Controls gap between digits',
      '--seven-seg-intensity': 'Controls active segment intensity',
    },
  },

  modifiers: [
    {
      modifier: 'data-segment',
      selector: 'segment',
      value: 'a | b | c | d | e | f | g',
      condition: 'Identifies which segment of the digit',
    },
    {
      modifier: 'data-active',
      selector: 'segment',
      condition: 'Segment is active for the current character',
    },
  ],
};
