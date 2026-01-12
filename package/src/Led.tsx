import React from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  getRadius,
  getSize,
  getThemeColor,
  PolymorphicFactory,
  polymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
  type MantineColor,
  type MantineRadius,
  type MantineSize,
} from '@mantine/core';
import classes from './Led.module.css';

export type LedVariant = 'flat' | '3d';

export type LedAnimationType = 'pulse' | 'flash' | 'breathe' | 'blink' | 'glow' | 'none';

export type LedStylesNames = 'root' | 'light' | 'glow';

export type LedCssVariables = {
  root:
    | '--led-size'
    | '--led-radius'
    | '--led-color'
    | '--led-intensity'
    | '--led-animation-duration'
    | '--led-glow-size';
};

export interface LedBaseProps {
  /** LED color from theme */
  color?: MantineColor;

  /** LED size */
  size?: MantineSize | (string & {}) | number;

  /** Border radius */
  radius?: MantineRadius | (string & {}) | number;

  /** Controls LED on/off state */
  value?: boolean;

  /** Light intensity (0-100) */
  intensity?: number;

  /** Enable animation */
  animate?: boolean;

  /** Animation type */
  animationType?: LedAnimationType;

  /** Animation duration in seconds */
  animationDuration?: number;
}

export interface LedProps extends BoxProps, LedBaseProps, StylesApiProps<LedFactory> {}

export type LedFactory = PolymorphicFactory<{
  props: LedProps;
  defaultComponent: 'div';
  defaultRef: HTMLDivElement;
  stylesNames: LedStylesNames;
  variant: LedVariant;
  vars: LedCssVariables;
}>;

const defaultProps: Partial<LedProps> = {
  color: 'green',
  size: 'md',
  radius: 'xl',
  value: true,
  variant: '3d',
  intensity: 80,
  animate: false,
  animationType: 'none',
  animationDuration: 1.5,
};

const varsResolver = createVarsResolver<LedFactory>(
  (theme, { size, radius, color, intensity, animationDuration }) => ({
    root: {
      '--led-size': getSize(size, 'led-size'),
      '--led-radius': radius === undefined ? undefined : getRadius(radius),
      '--led-color': getThemeColor(color, theme),
      '--led-intensity': intensity !== undefined ? `${intensity / 100}` : '0.8',
      '--led-animation-duration':
        animationDuration !== undefined ? `${animationDuration}s` : '1.5s',
      '--led-glow-size': `calc(var(--led-size) * 0.6)`,
    },
  })
);

export const Led = polymorphicFactory<LedFactory>((_props, ref) => {
  const props = useProps('Led', defaultProps, _props);
  const {
    variant,
    classNames,
    style,
    styles,
    unstyled,
    vars,
    className,
    value,
    animate,
    animationType,
    ...others
  } = props;

  const getStyles = useStyles<LedFactory>({
    name: 'Led',
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

  return (
    <Box
      ref={ref}
      {...getStyles('root')}
      {...others}
      variant={variant}
      data-value={value || undefined}
      data-animate={animate && value ? animationType : undefined}
    >
      <Box {...getStyles('glow')} />
      <Box {...getStyles('light')} />
    </Box>
  );
});

Led.classes = classes;
Led.displayName = 'Led';
