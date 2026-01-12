import React from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  PolymorphicFactory,
  polymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import classes from './Led.module.css';

export type LedStylesNames = 'root' | 'light';

export type LedCssVariables = {
  root: never;
};

export interface LedBaseProps {}

export interface LedProps extends BoxProps, LedBaseProps, StylesApiProps<LedFactory> {}

export type LedFactory = PolymorphicFactory<{
  props: LedProps;
  defaultComponent: 'div';
  defaultRef: HTMLDivElement;
  stylesNames: LedStylesNames;
  vars: LedCssVariables;
}>;

const defaultProps: Partial<LedProps> = {};

const varsResolver = createVarsResolver<LedFactory>((_, {}) => ({
  root: {},
  light: {},
}));

export const Led = polymorphicFactory<LedFactory>((_props, ref) => {
  const props = useProps('Led', defaultProps, _props);
  const { classNames, style, styles, unstyled, vars, className, ...others } = props;

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
    <Box ref={ref} {...getStyles('root')} {...others}>
      <Box {...getStyles('light')} />
    </Box>
  );
});

Led.classes = classes;
Led.displayName = 'Led';
