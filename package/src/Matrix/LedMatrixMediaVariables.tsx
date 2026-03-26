import React from 'react';
import {
  filterProps,
  getBaseValue,
  getSortedBreakpoints,
  getSpacing,
  InlineStyles,
  keys,
  useMantineTheme,
  type MantineBreakpoint,
} from '@mantine/core';
import type { LedMatrixProps } from './LedMatrix';

interface LedMatrixMediaVariablesProps extends LedMatrixProps {
  selector: string;
}

export function LedMatrixMediaVariables({
  cols,
  gap,
  value,
  selector,
}: LedMatrixMediaVariablesProps) {
  const theme = useMantineTheme();
  const colCount = value && value.length > 0 ? value[0].length : getBaseValue(cols);

  const baseStyles: Record<string, string | undefined> = filterProps({
    '--led-matrix-cols': colCount?.toString(),
    '--led-matrix-gap': getSpacing(getBaseValue(gap)),
  });

  const queries = keys(theme.breakpoints).reduce<Record<string, Record<string, any>>>(
    (acc, breakpoint) => {
      if (!acc[breakpoint]) {
        acc[breakpoint] = {};
      }

      if (typeof cols === 'object' && cols[breakpoint] !== undefined) {
        acc[breakpoint]['--led-matrix-cols'] = cols[breakpoint];
      }

      if (typeof gap === 'object' && gap[breakpoint] !== undefined) {
        acc[breakpoint]['--led-matrix-gap'] = getSpacing(gap[breakpoint]);
      }

      return acc;
    },
    {}
  );

  const sortedBreakpoints = getSortedBreakpoints(keys(queries), theme.breakpoints).filter(
    (breakpoint) => keys(queries[breakpoint.value]).length > 0
  );

  const media = sortedBreakpoints.map((breakpoint) => ({
    query: `(min-width: ${theme.breakpoints[breakpoint.value as MantineBreakpoint]})`,
    styles: queries[breakpoint.value],
  }));

  return <InlineStyles styles={baseStyles} media={media} selector={selector} />;
}
