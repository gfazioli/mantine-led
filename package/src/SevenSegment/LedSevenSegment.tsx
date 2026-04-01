import React from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  Factory,
  factory,
  GetStylesApi,
  getSize,
  getSpacing,
  getThemeColor,
  StylesApiProps,
  useProps,
  useStyles,
  type MantineColor,
  type MantineSize,
  type MantineSpacing,
} from '@mantine/core';
import classes from './LedSevenSegment.module.css';

export type LedSevenSegmentStylesNames = 'root' | 'digit' | 'segment' | 'colon' | 'dot';

export type LedSevenSegmentCssVariables = {
  root:
    | '--seven-seg-size'
    | '--seven-seg-color'
    | '--seven-seg-off-color'
    | '--seven-seg-gap'
    | '--seven-seg-intensity';
};

export interface LedSevenSegmentProps extends BoxProps, StylesApiProps<LedSevenSegmentFactory> {
  /** Value to display (number or string of digits, colons, dots, dashes) */
  value?: number | string;

  /** LED color from theme */
  color?: MantineColor;

  /** Color for off segments */
  offColor?: MantineColor;

  /** Display size */
  size?: MantineSize | (string & {}) | number;

  /** Gap between digits */
  gap?: MantineSpacing;

  /** Intensity of on segments (0-100) */
  intensity?: number;

  /** Pad with leading zeros to this digit count */
  padStart?: number;
}

export type LedSevenSegmentFactory = Factory<{
  props: LedSevenSegmentProps;
  ref: HTMLDivElement;
  stylesNames: LedSevenSegmentStylesNames;
  vars: LedSevenSegmentCssVariables;
}>;

// Segment order: [a, b, c, d, e, f, g]
// Layout:
//  aaaa
// f    b
//  gggg
// e    c
//  dddd
const CHAR_MAP: Record<string, boolean[]> = {
  '0': [true, true, true, true, true, true, false],
  '1': [false, true, true, false, false, false, false],
  '2': [true, true, false, true, true, false, true],
  '3': [true, true, true, true, false, false, true],
  '4': [false, true, true, false, false, true, true],
  '5': [true, false, true, true, false, true, true],
  '6': [true, false, true, true, true, true, true],
  '7': [true, true, true, false, false, false, false],
  '8': [true, true, true, true, true, true, true],
  '9': [true, true, true, true, false, true, true],
  A: [true, true, true, false, true, true, true],
  b: [false, false, true, true, true, true, true],
  C: [true, false, false, true, true, true, false],
  d: [false, true, true, true, true, false, true],
  E: [true, false, false, true, true, true, true],
  F: [true, false, false, false, true, true, true],
  H: [false, true, true, false, true, true, true],
  L: [false, false, false, true, true, true, false],
  P: [true, true, false, false, true, true, true],
  '-': [false, false, false, false, false, false, true],
  _: [false, false, false, true, false, false, false],
  ' ': [false, false, false, false, false, false, false],
};

const SEGMENT_IDS = ['a', 'b', 'c', 'd', 'e', 'f', 'g'] as const;

const defaultProps: Partial<LedSevenSegmentProps> = {
  color: 'red',
  size: 'md',
  gap: 'xs',
  intensity: 90,
};

const varsResolver = createVarsResolver<LedSevenSegmentFactory>(
  (theme, { size, color, offColor, gap, intensity }) => ({
    root: {
      '--seven-seg-size': getSize(size, 'seven-seg-size'),
      '--seven-seg-color': getThemeColor(color, theme),
      '--seven-seg-off-color': offColor ? getThemeColor(offColor, theme) : undefined,
      '--seven-seg-gap': gap !== undefined ? getSpacing(gap) : undefined,
      '--seven-seg-intensity':
        intensity !== undefined ? `${Math.min(100, Math.max(0, intensity)) / 100}` : '0.9',
    },
  })
);

type SevenSegmentGetStyles = GetStylesApi<LedSevenSegmentFactory>;

function renderDigit(char: string, index: number, getStyles: SevenSegmentGetStyles) {
  const segments = CHAR_MAP[char] ?? CHAR_MAP[' '];

  return (
    <Box key={`d-${index}`} {...getStyles('digit')}>
      {SEGMENT_IDS.map((id, i) => (
        <Box
          key={id}
          {...getStyles('segment')}
          data-segment={id}
          data-active={segments[i] || undefined}
        />
      ))}
    </Box>
  );
}

function renderColon(index: number, getStyles: SevenSegmentGetStyles) {
  return <Box key={`c-${index}`} {...getStyles('colon')} />;
}

function renderDot(index: number, getStyles: SevenSegmentGetStyles) {
  return <Box key={`p-${index}`} {...getStyles('dot')} />;
}

export const LedSevenSegment = factory<LedSevenSegmentFactory>((_props) => {
  const props = useProps('LedSevenSegment', defaultProps, _props);
  const {
    value,
    color,
    offColor,
    size,
    gap,
    intensity,
    padStart,

    classNames,
    style,
    styles,
    unstyled,
    vars,
    className,
    ...others
  } = props;

  const getStyles = useStyles<LedSevenSegmentFactory>({
    name: 'LedSevenSegment',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  let displayStr = value !== undefined ? String(value) : '';
  if (padStart && padStart > 0) {
    const separators: { index: number; char: string }[] = [];
    let digitCount = 0;
    for (let i = 0; i < displayStr.length; i++) {
      if (/[^0-9a-fA-F \-_]/.test(displayStr[i])) {
        separators.push({ index: digitCount, char: displayStr[i] });
      } else {
        digitCount++;
      }
    }
    const charsOnly = displayStr.replace(/[^0-9a-fA-F \-_]/g, '');
    const padded = charsOnly.padStart(padStart, '0');
    const result = padded.split('');
    for (const sep of separators) {
      const insertAt = sep.index + (padded.length - charsOnly.length);
      result.splice(insertAt, 0, sep.char);
    }
    displayStr = result.join('');
  }

  const elements = displayStr.split('').map((char, i) => {
    if (char === ':') {
      return renderColon(i, getStyles);
    }
    if (char === '.') {
      return renderDot(i, getStyles);
    }
    return renderDigit(char, i, getStyles);
  });

  return (
    <Box {...getStyles('root')} {...others}>
      {elements}
    </Box>
  );
});

LedSevenSegment.classes = classes;
LedSevenSegment.displayName = 'LedSevenSegment';
