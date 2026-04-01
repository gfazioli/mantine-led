import React from 'react';
import {
  Box,
  getRadius,
  getThemeColor,
  rem,
  useMantineTheme,
  type MantineColor,
  type MantineGradient,
  type MantineRadius,
  type MantineSize,
} from '@mantine/core';
import type { LedAnimationType, LedShape, LedVariant } from './Led';
import classes from './Led.module.css';

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

// Keep in sync with --led-size-* custom properties in Led.module.css
const LED_SIZES: Record<string, string> = {
  xs: '8px',
  sm: '12px',
  md: '20px',
  lg: '32px',
  xl: '48px',
};

function resolveLedSize(size: MantineSize | (string & {}) | number | undefined): string {
  if (size === undefined) {
    return LED_SIZES.sm;
  }
  if (typeof size === 'number') {
    return rem(size);
  }
  return LED_SIZES[size] ?? size;
}

export interface LedIndicatorProps {
  /** Controls LED on/off state */
  value?: boolean;

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

  /** Enable animation */
  animate?: boolean;

  /** Animation type */
  animationType?: LedAnimationType;

  /** Animation duration in seconds */
  animationDuration?: number;

  /** Number of animation iterations */
  animationCount?: number;

  /** Delay in seconds before animation starts */
  animationDelay?: number;

  /** Called when animation completes */
  onAnimationEnd?: () => void;

  /** LED shape */
  shape?: LedShape;

  /** Gradient for multicolor LED */
  gradient?: MantineGradient;
}

export function LedIndicator({
  value = true,
  color = 'green',
  offColor,
  size = 'sm',
  radius = 'xl',
  variant = 'flat',
  intensity = 80,
  animate = false,
  animationType = 'none',
  animationDuration = 1.5,
  animationCount,
  animationDelay,
  onAnimationEnd,
  shape = 'circle',
  gradient,
}: LedIndicatorProps) {
  const theme = useMantineTheme();
  const resolvedSize = resolveLedSize(size);

  const cssVars = {
    '--led-size': resolvedSize,
    '--led-radius': radius !== undefined ? getRadius(radius) : undefined,
    '--led-color': getThemeColor(color, theme),
    '--led-off-color': offColor ? getThemeColor(offColor, theme) : undefined,
    '--led-intensity':
      intensity !== undefined ? `${Math.min(100, Math.max(0, intensity)) / 100}` : '0.8',
    '--led-animation-duration': animationDuration !== undefined ? `${animationDuration}s` : '1.5s',
    '--led-animation-count': animationCount !== undefined ? String(animationCount) : undefined,
    '--led-animation-delay': animationDelay !== undefined ? `${animationDelay}s` : undefined,
    '--led-glow-size': `calc(${resolvedSize} * 0.6)`,
    '--led-gradient': resolveGradient(gradient, theme),
  } as React.CSSProperties;

  return (
    <Box
      className={classes.led}
      style={cssVars}
      variant={variant}
      data-value={value ? true : undefined}
      data-animate={animate && value && animationType !== 'none' ? animationType : undefined}
      data-shape={shape}
      data-gradient={gradient ? true : undefined}
      onAnimationEnd={onAnimationEnd}
    >
      <Box className={classes.glow} />
      <Box className={classes.light} />
    </Box>
  );
}
