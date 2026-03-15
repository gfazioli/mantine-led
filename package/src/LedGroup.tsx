import React from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  Factory,
  factory,
  getSpacing,
  StylesApiProps,
  useProps,
  useStyles,
  type MantineColor,
  type MantineGradient,
  type MantineRadius,
  type MantineSize,
  type MantineSpacing,
} from '@mantine/core';
import { Led, type LedAnimationType, type LedShape, type LedVariant } from './Led';
import classes from './LedGroup.module.css';

export type LedGroupStylesNames = 'root';

export type LedGroupCssVariables = {
  root: '--led-group-gap' | '--led-group-direction';
};

export interface LedGroupProps extends BoxProps, StylesApiProps<LedGroupFactory> {
  /** Number of active LEDs (from start) or boolean array for individual control */
  value?: number | boolean[];

  /** Total number of LEDs (used when value is a number, defaults to 5) */
  count?: number;

  /** Gap between LEDs */
  gap?: MantineSpacing;

  /** Direction of LED layout */
  direction?: 'row' | 'column';

  /** LED color from theme */
  color?: MantineColor;

  /** Color scale array — maps colors progressively across LEDs (overrides color) */
  colorScale?: MantineColor[];

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

  /** Enable animation on active LEDs */
  animate?: boolean;

  /** Animation type */
  animationType?: LedAnimationType;

  /** Animation duration in seconds */
  animationDuration?: number;

  /** Number of animation iterations */
  animationCount?: number;

  /** Base animation delay in seconds — each LED gets delay * index for cascade effect */
  animationDelay?: number;

  /** LED shape */
  shape?: LedShape;

  /** Gradient for multicolor LED */
  gradient?: MantineGradient;
}

export type LedGroupFactory = Factory<{
  props: LedGroupProps;
  ref: HTMLDivElement;
  stylesNames: LedGroupStylesNames;
  vars: LedGroupCssVariables;
}>;

const defaultProps: Partial<LedGroupProps> = {
  count: 5,
  gap: 'xs',
  direction: 'row',
};

const varsResolver = createVarsResolver<LedGroupFactory>((_, { gap, direction }) => ({
  root: {
    '--led-group-gap': gap !== undefined ? getSpacing(gap) : undefined,
    '--led-group-direction': direction === 'column' ? 'column' : undefined,
  },
}));

function getScaleColor(index: number, total: number, scale: MantineColor[]): MantineColor {
  if (total <= 1) {
    return scale[0];
  }
  const position = index / (total - 1);
  const scaleIndex = Math.min(Math.floor(position * scale.length), scale.length - 1);
  return scale[scaleIndex];
}

export const LedGroup = factory<LedGroupFactory>((_props, ref) => {
  const props = useProps('LedGroup', defaultProps, _props);
  const {
    value,
    count,
    gap,
    direction,
    color,
    colorScale,
    offColor,
    size,
    radius,
    variant,
    intensity,
    animate,
    animationType,
    animationDuration,
    animationCount,
    animationDelay,
    shape,
    gradient,

    classNames,
    style,
    styles,
    unstyled,
    vars,
    className,
    ...others
  } = props;

  const getStyles = useStyles<LedGroupFactory>({
    name: 'LedGroup',
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

  const ledCount = Array.isArray(value) ? value.length : (count ?? 5);

  const leds = Array.from({ length: ledCount }, (_, i) => {
    const isOn = Array.isArray(value) ? value[i] : typeof value === 'number' ? i < value : true;
    const ledColor = colorScale ? getScaleColor(i, ledCount, colorScale) : color;
    const ledDelay = animationDelay !== undefined ? animationDelay * i : undefined;

    return (
      <Led
        key={i}
        value={isOn}
        color={ledColor}
        offColor={offColor}
        size={size}
        radius={radius}
        variant={variant}
        intensity={intensity}
        animate={animate && isOn}
        animationType={animationType}
        animationDuration={animationDuration}
        animationCount={animationCount}
        animationDelay={ledDelay}
        shape={shape}
        gradient={gradient}
      />
    );
  });

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      {leds}
    </Box>
  );
});

LedGroup.classes = classes;
LedGroup.displayName = 'LedGroup';
