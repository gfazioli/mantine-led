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

  /** LED shape */
  shape?: LedShape;
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

export const LedGroup = factory<LedGroupFactory>((_props, ref) => {
  const props = useProps('LedGroup', defaultProps, _props);
  const {
    value,
    count,
    gap,
    direction,
    color,
    offColor,
    size,
    radius,
    variant,
    intensity,
    animate,
    animationType,
    animationDuration,
    animationCount,
    shape,

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

    return (
      <Led
        key={i}
        value={isOn}
        color={color}
        offColor={offColor}
        size={size}
        radius={radius}
        variant={variant}
        intensity={intensity}
        animate={animate && isOn}
        animationType={animationType}
        animationDuration={animationDuration}
        animationCount={animationCount}
        shape={shape}
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
