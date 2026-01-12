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

export type LedVariant = 'default' | 'flat' | 'gradient';

export type LedStylesNames = 'root' | 'light';

export type LedCssVariables = {
  root: '--led-size' | '--led-radius' | '--led-color';
};

export interface LedBaseProps {
  color?: MantineColor;
  size?: MantineSize | (string & {}) | number;
  radius?: MantineRadius | (string & {}) | number;
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
};

const varsResolver = createVarsResolver<LedFactory>((theme, { size, radius, color }) => ({
  root: {
    '--led-size': getSize(size, 'led-size'),
    '--led-radius': radius === undefined ? undefined : getRadius(radius),
    '--led-color': getThemeColor(color, theme),
  },
  light: {},
}));

export const Led = polymorphicFactory<LedFactory>((_props, ref) => {
  const props = useProps('Led', defaultProps, _props);
  const { variant, classNames, style, styles, unstyled, vars, className, ...others } = props;

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
    <Box ref={ref} {...getStyles('root')} {...others} variant={variant}>
      <Box {...getStyles('light')} />
    </Box>
  );
});

Led.classes = classes;
Led.displayName = 'Led';
