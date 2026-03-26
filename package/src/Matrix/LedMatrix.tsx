import React from 'react';
import {
  Box,
  BoxProps,
  Factory,
  factory,
  getBaseValue,
  StylesApiProps,
  useProps,
  useRandomClassName,
  useStyles,
  type MantineColor,
  type MantineRadius,
  type MantineSize,
  type MantineSpacing,
  type StyleProp,
} from '@mantine/core';
import type { LedAnimationType, LedShape, LedVariant } from '../Led';
import { LedIndicator } from '../LedIndicator';
import { LedMatrixMediaVariables } from './LedMatrixMediaVariables';
import classes from './LedMatrix.module.css';

export type LedMatrixStylesNames = 'root';

export type LedMatrixCssVariables = {
  root: '--led-matrix-cols' | '--led-matrix-gap';
};

export interface LedMatrixProps extends BoxProps, StylesApiProps<LedMatrixFactory> {
  /** 2D boolean array controlling each LED state */
  value?: boolean[][];

  /** Number of rows (used when value is not provided) */
  rows?: number;

  /** Number of columns (used when value is not provided), supports responsive values */
  cols?: StyleProp<number>;

  /** Gap between LEDs, supports responsive values */
  gap?: StyleProp<MantineSpacing>;

  /** LED color from theme */
  color?: MantineColor;

  /** Color when LED is off */
  offColor?: MantineColor;

  /** LED size */
  size?: MantineSize | (string & {}) | number;

  /** Border radius */
  radius?: MantineRadius | (string & {}) | number;

  /** LED variant */
  variant?: LedVariant;

  /** Light intensity (0-100) */
  intensity?: number;

  /** LED shape */
  shape?: LedShape;

  /** Enable animation on active LEDs */
  animate?: boolean;

  /** Animation type */
  animationType?: LedAnimationType;

  /** Animation duration in seconds */
  animationDuration?: number;

  /** Number of animation iterations */
  animationCount?: number;
}

export type LedMatrixFactory = Factory<{
  props: LedMatrixProps;
  ref: HTMLDivElement;
  stylesNames: LedMatrixStylesNames;
  vars: LedMatrixCssVariables;
}>;

const defaultProps: Partial<LedMatrixProps> = {
  rows: 3,
  cols: 3,
  gap: 4,
  size: 'xs',
  variant: 'dot',
  shape: 'square',
};

export const LedMatrix = factory<LedMatrixFactory>((_props, ref) => {
  const props = useProps('LedMatrix', defaultProps, _props);
  const {
    value,
    rows,
    cols,
    gap,
    color,
    offColor,
    size,
    radius,
    variant,
    intensity,
    shape,
    animate,
    animationType,
    animationDuration,
    animationCount,

    classNames,
    style,
    styles,
    unstyled,
    vars,
    className,
    ...others
  } = props;

  const getStyles = useStyles<LedMatrixFactory>({
    name: 'LedMatrix',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
  });

  const responsiveClassName = useRandomClassName();

  const rowCount = value ? value.length : (rows ?? 3);
  const colCount = value && value.length > 0 ? value[0].length : (getBaseValue(cols) ?? 3);

  const leds: React.ReactNode[] = [];
  for (let r = 0; r < rowCount; r++) {
    for (let c = 0; c < colCount; c++) {
      const isOn = value ? (value[r]?.[c] ?? false) : true;
      leds.push(
        <LedIndicator
          key={`${r}-${c}`}
          value={isOn}
          color={color}
          offColor={offColor}
          size={size}
          radius={radius}
          variant={variant}
          intensity={intensity}
          shape={shape}
          animate={animate && isOn}
          animationType={animationType}
          animationDuration={animationDuration}
          animationCount={animationCount}
        />
      );
    }
  }

  return (
    <>
      <LedMatrixMediaVariables {...props} selector={`.${responsiveClassName}`} />
      <Box ref={ref} {...getStyles('root', { className: responsiveClassName })} {...others}>
        {leds}
      </Box>
    </>
  );
});

LedMatrix.classes = classes;
LedMatrix.displayName = 'LedMatrix';
