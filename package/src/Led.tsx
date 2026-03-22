import React from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  getFontSize,
  getRadius,
  getSize,
  getThemeColor,
  PolymorphicFactory,
  polymorphicFactory,
  StylesApiProps,
  Tooltip,
  useProps,
  useStyles,
  type MantineColor,
  type MantineGradient,
  type MantineRadius,
  type MantineSize,
  type StyleProp,
  type TooltipProps,
} from '@mantine/core';
import { LedGroup } from './Group';
import { LedMatrix } from './Matrix';
import { LedSevenSegment } from './SevenSegment';
import classes from './Led.module.css';

export type LedVariant = 'flat' | '3d' | 'neon' | 'dot';

export type LedAnimationType = 'pulse' | 'flash' | 'breathe' | 'blink' | 'glow' | 'none';

export type LedShape = 'circle' | 'square' | 'rectangle';

export type LedStylesNames = 'root' | 'led' | 'label' | 'light' | 'glow';

export type LedCssVariables = {
  root:
    | '--led-size'
    | '--led-radius'
    | '--led-color'
    | '--led-off-color'
    | '--led-intensity'
    | '--led-animation-duration'
    | '--led-animation-count'
    | '--led-animation-delay'
    | '--led-glow-size'
    | '--led-justify-content'
    | '--led-gradient';
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

  /** Animation type; one of 'pulse', 'flash', 'breathe', 'blink', 'glow', or 'none' */
  animationType?: LedAnimationType;

  /** Animation duration in seconds */
  animationDuration?: number;

  /** Number of animation iterations before stopping, defaults to infinite */
  animationCount?: number;

  /** Delay in seconds before animation starts */
  animationDelay?: number;

  /** Called when animation completes (only fires with finite animationCount) */
  onAnimationEnd?: () => void;

  /** Label content */
  label?: React.ReactNode;

  /** Label position */
  labelPosition?: 'left' | 'right';

  /** `justify-content` CSS property */
  justify?: StyleProp<React.CSSProperties['justifyContent']>;

  /** Color when LED is off */
  offColor?: MantineColor;

  /** Called when LED is clicked, makes LED interactive */
  onChange?: (value: boolean) => void;

  /** Tooltip content */
  tooltip?: React.ReactNode;

  /** Props passed to the Tooltip component */
  tooltipProps?: Omit<TooltipProps, 'children' | 'label'>;

  /** LED shape */
  shape?: LedShape;

  /** Gradient for multicolor LED (applied when on) */
  gradient?: MantineGradient;

  /** Additional description for screen readers */
  description?: string;
}

export interface LedProps extends BoxProps, LedBaseProps, StylesApiProps<LedFactory> {}

export type LedFactory = PolymorphicFactory<{
  props: LedProps;
  defaultComponent: 'div';
  defaultRef: HTMLDivElement;
  stylesNames: LedStylesNames;
  variant: LedVariant;
  vars: LedCssVariables;
  staticComponents: {
    Group: typeof LedGroup;
    Matrix: typeof LedMatrix;
    SevenSegment: typeof LedSevenSegment;
  };
}>;

const defaultProps: Partial<LedProps> = {
  color: 'green',
  size: 'sm',
  radius: 'xl',
  value: true,
  variant: 'flat',
  intensity: 80,
  animate: false,
  animationType: 'none',
  animationDuration: 1.5,
  labelPosition: 'right',
  shape: 'circle',
};

function resolveGradient(
  gradient: MantineGradient | undefined,
  theme: Parameters<typeof getThemeColor>[1]
): string | undefined {
  if (!gradient) {
    return undefined;
  }
  const from = getThemeColor(gradient.from, theme);
  const to = getThemeColor(gradient.to, theme);
  const deg = gradient.deg ?? 45;
  return `linear-gradient(${deg}deg, ${from} 0%, ${to} 100%)`;
}

const varsResolver = createVarsResolver<LedFactory>(
  (
    theme,
    {
      size,
      radius,
      color,
      offColor,
      intensity,
      animationDuration,
      animationCount,
      animationDelay,
      justify,
      gradient,
    }
  ) => {
    return {
      root: {
        '--led-size': getSize(size, 'led-size'),
        '--led-radius': radius === undefined ? undefined : getRadius(radius),
        '--led-color': getThemeColor(color, theme),
        '--led-off-color': offColor ? getThemeColor(offColor, theme) : undefined,
        '--led-intensity':
          intensity !== undefined ? `${Math.min(100, Math.max(0, intensity)) / 100}` : '0.8',
        '--led-animation-duration':
          animationDuration !== undefined ? `${animationDuration}s` : '1.5s',
        '--led-animation-count': animationCount !== undefined ? String(animationCount) : undefined,
        '--led-animation-delay': animationDelay !== undefined ? `${animationDelay}s` : undefined,
        '--led-glow-size': `calc(var(--led-size) * 0.6)`,
        '--led-justify-content': justify != null ? String(justify) : 'center',
        '--led-gradient': resolveGradient(gradient, theme),
      },
    };
  }
);

export const Led = polymorphicFactory<LedFactory>((_props, ref) => {
  const props = useProps('Led', defaultProps, _props);
  const {
    size,
    radius,
    color,
    offColor,
    intensity,
    animationDuration,
    animationCount,
    animationDelay,
    onAnimationEnd,
    value,
    animate,
    animationType,
    variant,
    label,
    labelPosition,
    justify,
    onChange,
    tooltip,
    tooltipProps,
    shape,
    gradient,
    description,

    classNames,
    style,
    styles,
    unstyled,
    vars,
    className,
    mod,
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

  const isInteractive = !!onChange;

  const handleClick = isInteractive ? () => onChange(!value) : undefined;
  const handleKeyDown = isInteractive
    ? (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onChange(!value);
        }
      }
    : undefined;

  const content = (
    <Box
      ref={ref}
      role={isInteractive ? 'switch' : 'status'}
      aria-checked={isInteractive ? value : undefined}
      aria-label={
        typeof label === 'string' ? label : typeof tooltip === 'string' ? tooltip : undefined
      }
      aria-description={description}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...getStyles('root')}
      {...others}
      mod={[
        {
          'label-position':
            label !== undefined && label !== null && label !== '' ? labelPosition : undefined,
          interactive: isInteractive,
        },
        mod,
      ]}
      __vars={{
        '--label-fz': getFontSize(size),
        '--label-lh': getSize(size, 'label-lh'),
      }}
    >
      <Box
        {...getStyles('led')}
        variant={variant}
        data-value={value ? true : undefined}
        data-animate={animate && value && animationType !== 'none' ? animationType : undefined}
        data-shape={shape}
        data-gradient={gradient ? true : undefined}
        onAnimationEnd={onAnimationEnd}
      >
        <Box {...getStyles('glow')} />
        <Box {...getStyles('light')} />
      </Box>
      {label !== undefined && label !== null && label !== '' && (
        <Box {...getStyles('label')}>{label}</Box>
      )}
    </Box>
  );

  if (tooltip) {
    return (
      <Tooltip label={tooltip} {...tooltipProps}>
        {content}
      </Tooltip>
    );
  }

  return content;
});

Led.classes = classes;
Led.displayName = 'Led';
Led.Group = LedGroup;
Led.Matrix = LedMatrix;
Led.SevenSegment = LedSevenSegment;
