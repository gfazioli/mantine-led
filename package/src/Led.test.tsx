import React from 'react';
import { render } from '@mantine-tests/core';
import { LedGroup } from './Group';
import { Led } from './Led';
import { LedMatrix } from './Matrix';
import { LedSevenSegment } from './SevenSegment';

describe('Led', () => {
  it('renders without crashing', () => {
    const { container } = render(<Led />);
    expect(container).toBeTruthy();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Led ref={ref} />);
    expect(ref.current).toBeTruthy();
  });

  // Value prop
  it('applies value prop as data attribute when true', () => {
    const { container } = render(<Led />);
    const led = container.querySelector('[data-value]');
    expect(led).toBeTruthy();
  });

  it('does not apply value data attribute when false', () => {
    const { container } = render(<Led value={false} />);
    const led = container.querySelector('[data-value]');
    expect(led).toBeFalsy();
  });

  // Animations
  it('applies animation type as data attribute when animate is true and value is true', () => {
    const { container } = render(<Led animate animationType="pulse" />);
    const led = container.querySelector('[data-animate="pulse"]');
    expect(led).toBeTruthy();
  });

  it('does not apply animation when animate is false', () => {
    const { container } = render(<Led animate={false} animationType="pulse" />);
    const led = container.querySelector('[data-animate]');
    expect(led).toBeFalsy();
  });

  it('does not apply animation when value is false', () => {
    const { container } = render(<Led animate animationType="pulse" value={false} />);
    const led = container.querySelector('[data-animate]');
    expect(led).toBeFalsy();
  });

  it('does not apply data-animate when animationType is none', () => {
    const { container } = render(<Led animate animationType="none" />);
    const led = container.querySelector('[data-animate]');
    expect(led).toBeFalsy();
  });

  // Variants
  it.each(['flat', '3d', 'neon', 'dot'] as const)('supports %s variant', (v) => {
    const { container } = render(<Led variant={v} />);
    const led = container.querySelector(`[data-variant="${v}"]`);
    expect(led).toBeTruthy();
  });

  // Label
  it('renders label when provided', () => {
    const { container } = render(<Led label="Status" />);
    expect(container.textContent).toContain('Status');
  });

  it('does not render label element when label is not provided', () => {
    const { container } = render(<Led />);
    const elements = container.querySelectorAll('[class]');
    const hasLabel = Array.from(elements).some((el) => el.textContent && el.textContent.length > 0);
    expect(hasLabel).toBeFalsy();
  });

  it('renders label when value is 0', () => {
    const { container } = render(<Led label={0} />);
    expect(container.textContent).toContain('0');
  });

  // Label position
  it('does not set data-label-position when label is not provided', () => {
    const { container } = render(<Led labelPosition="left" />);
    const root = container.querySelector('[role="status"]');
    expect(root?.hasAttribute('data-label-position')).toBeFalsy();
  });

  it('does not set data-label-position when label is empty string', () => {
    const { container } = render(<Led label="" labelPosition="left" />);
    const root = container.querySelector('[role="status"]');
    expect(root?.hasAttribute('data-label-position')).toBeFalsy();
  });

  it('applies data-label-position="left" when labelPosition is left', () => {
    const { container } = render(<Led label="Test" labelPosition="left" />);
    const root = container.querySelector('[role="status"]');
    expect(root?.getAttribute('data-label-position')).toBe('left');
  });

  // Accessibility (non-interactive)
  it('has role="status" when not interactive', () => {
    const { container } = render(<Led />);
    expect(container.querySelector('[role="status"]')).toBeTruthy();
  });

  it('sets aria-label from string label', () => {
    const { container } = render(<Led label="Online" />);
    expect(container.querySelector('[aria-label="Online"]')).toBeTruthy();
  });

  it('sets aria-description when description is provided', () => {
    const { container } = render(<Led description="Server status indicator" />);
    const root = container.querySelector('[role="status"]');
    expect(root?.getAttribute('aria-description')).toBe('Server status indicator');
  });

  // Polymorphic
  it('supports polymorphic component prop', () => {
    const { container } = render(<Led component="span" />);
    const root = container.querySelector('[role="status"]');
    expect(root?.tagName.toLowerCase()).toBe('span');
  });

  // All animation types
  it.each(['pulse', 'flash', 'breathe', 'blink', 'glow'] as const)(
    'applies data-animate="%s"',
    (type) => {
      const { container } = render(<Led animate animationType={type} />);
      expect(container.querySelector(`[data-animate="${type}"]`)).toBeTruthy();
    }
  );

  // Shape
  it.each(['circle', 'square', 'rectangle'] as const)('applies data-shape="%s"', (shape) => {
    const { container } = render(<Led shape={shape} />);
    expect(container.querySelector(`[data-shape="${shape}"]`)).toBeTruthy();
  });

  it('defaults to circle shape', () => {
    const { container } = render(<Led />);
    expect(container.querySelector('[data-shape="circle"]')).toBeTruthy();
  });

  // Gradient
  it('applies data-gradient when gradient is set', () => {
    const { container } = render(<Led gradient={{ from: 'red', to: 'blue' }} />);
    expect(container.querySelector('[data-gradient]')).toBeTruthy();
  });

  it('does not apply data-gradient when gradient is not set', () => {
    const { container } = render(<Led />);
    expect(container.querySelector('[data-gradient]')).toBeFalsy();
  });

  // onChange (interactive)
  it('has role="switch" when onChange is provided', () => {
    const { container } = render(<Led onChange={() => {}} />);
    expect(container.querySelector('[role="switch"]')).toBeTruthy();
    expect(container.querySelector('[role="status"]')).toBeFalsy();
  });

  it('sets aria-checked based on value when interactive', () => {
    const { container: c1 } = render(<Led onChange={() => {}} value />);
    expect(c1.querySelector('[role="switch"]')?.getAttribute('aria-checked')).toBe('true');

    const { container: c2 } = render(<Led onChange={() => {}} value={false} />);
    expect(c2.querySelector('[role="switch"]')?.getAttribute('aria-checked')).toBe('false');
  });

  it('sets tabIndex=0 when interactive', () => {
    const { container } = render(<Led onChange={() => {}} />);
    expect(container.querySelector('[role="switch"]')?.getAttribute('tabindex')).toBe('0');
  });

  it('calls onChange with toggled value on click', () => {
    const onChange = jest.fn();
    const { container } = render(<Led onChange={onChange} value />);
    container
      .querySelector('[role="switch"]')
      ?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it('calls onChange on Enter key', () => {
    const onChange = jest.fn();
    const { container } = render(<Led onChange={onChange} value={false} />);
    container
      .querySelector('[role="switch"]')
      ?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('sets data-interactive when onChange is provided', () => {
    const { container } = render(<Led onChange={() => {}} />);
    expect(container.querySelector('[data-interactive]')).toBeTruthy();
  });

  // Tooltip
  it('renders component when tooltip prop is set', () => {
    const { container } = render(<Led tooltip="Status info" />);
    expect(container.querySelector('[role="status"]')).toBeTruthy();
  });

  // onAnimationEnd
  it('attaches onAnimationEnd to led element', () => {
    const onEnd = jest.fn();
    const { container } = render(
      <Led animate animationType="pulse" animationCount={1} onAnimationEnd={onEnd} />
    );
    const led = container.querySelector('[data-animate]');
    led?.dispatchEvent(new Event('animationend', { bubbles: true }));
    expect(onEnd).toHaveBeenCalled();
  });

  // Glow and light elements
  it('renders glow and light elements inside led', () => {
    const { container } = render(<Led />);
    const led = container.querySelector('[data-variant]');
    expect(led?.children.length).toBe(2);
  });
});

describe('LedGroup', () => {
  it('renders correct number of LEDs from count', () => {
    const { container } = render(<LedGroup value={3} count={5} />);
    expect(container.querySelectorAll('[data-variant]').length).toBe(5);
  });

  it('activates first N LEDs when value is a number', () => {
    const { container } = render(<LedGroup value={3} count={5} />);
    expect(container.querySelectorAll('[data-value]').length).toBe(3);
  });

  it('renders from boolean array', () => {
    const { container } = render(<LedGroup value={[true, false, true, false]} />);
    expect(container.querySelectorAll('[data-variant]').length).toBe(4);
    expect(container.querySelectorAll('[data-value]').length).toBe(2);
  });

  it('passes shared props to all LEDs', () => {
    const { container } = render(<LedGroup value={2} count={3} variant="3d" />);
    expect(container.querySelectorAll('[data-variant="3d"]').length).toBe(3);
  });

  it('defaults to 5 LEDs', () => {
    const { container } = render(<LedGroup value={2} />);
    expect(container.querySelectorAll('[data-variant]').length).toBe(5);
  });

  it('applies colorScale to individual LEDs', () => {
    const { container } = render(
      <LedGroup value={3} count={3} colorScale={['red', 'yellow', 'green']} />
    );
    // All 3 LEDs should render (color is applied via CSS var, not testable via DOM attr)
    expect(container.querySelectorAll('[data-variant]').length).toBe(3);
  });

  it('passes shape prop to LEDs', () => {
    const { container } = render(<LedGroup value={1} count={3} shape="square" />);
    expect(container.querySelectorAll('[data-shape="square"]').length).toBe(3);
  });

  it('applies animate to active LEDs only', () => {
    const { container } = render(<LedGroup value={2} count={4} animate animationType="pulse" />);
    const animated = container.querySelectorAll('[data-animate="pulse"]');
    expect(animated.length).toBe(2);
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<LedGroup ref={ref} value={1} count={2} />);
    expect(ref.current).toBeTruthy();
  });
});

describe('LedMatrix', () => {
  it('renders correct grid from 2D array', () => {
    const value = [
      [true, false, true],
      [false, true, false],
    ];
    const { container } = render(<LedMatrix value={value} />);
    expect(container.querySelectorAll('[data-variant]').length).toBe(6);
    expect(container.querySelectorAll('[data-value]').length).toBe(3);
  });

  it('renders from rows and cols when value is not provided', () => {
    const { container } = render(<LedMatrix rows={2} cols={4} />);
    expect(container.querySelectorAll('[data-variant]').length).toBe(8);
  });

  it('defaults to 3x3 grid', () => {
    const { container } = render(<LedMatrix />);
    expect(container.querySelectorAll('[data-variant]').length).toBe(9);
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<LedMatrix ref={ref} />);
    expect(ref.current).toBeTruthy();
  });
});

describe('LedSevenSegment', () => {
  it('renders digits for numeric value', () => {
    const { container } = render(<LedSevenSegment value={42} />);
    // 2 digits, each with 7 segments
    const digits = container.querySelectorAll('[data-segment]');
    expect(digits.length).toBe(14);
  });

  it('renders colon character', () => {
    const { container } = render(<LedSevenSegment value="12:34" />);
    // 4 digits + 1 colon = 4*7 segments + colon element
    const segments = container.querySelectorAll('[data-segment]');
    expect(segments.length).toBe(28);
  });

  it('activates correct segments for digit 1', () => {
    const { container } = render(<LedSevenSegment value={1} />);
    const active = container.querySelectorAll('[data-active]');
    // Digit 1: segments b, c = 2 active
    expect(active.length).toBe(2);
  });

  it('activates all segments for digit 8', () => {
    const { container } = render(<LedSevenSegment value={8} />);
    const active = container.querySelectorAll('[data-active]');
    expect(active.length).toBe(7);
  });

  it('pads numeric value with leading zeros', () => {
    const { container } = render(<LedSevenSegment value={5} padStart={3} />);
    // "005" = 3 digits * 7 segments = 21
    const segments = container.querySelectorAll('[data-segment]');
    expect(segments.length).toBe(21);
    // First two digits are "0" (6 active segments each), last is "5" (5 active)
    const active = container.querySelectorAll('[data-active]');
    expect(active.length).toBe(6 + 6 + 5);
  });

  it('pads value with separators correctly', () => {
    const { container } = render(<LedSevenSegment value="1:2" padStart={4} />);
    // "01:2" padded → "001:2" = 3 digits with padStart=4 → "001:2" → no, let's think:
    // charsOnly = "12" (digits), padded to 4 = "0012", separators: ":" at digit index 1
    // result: "00:12" → 4 digits + 1 colon = 28 segments
    const segments = container.querySelectorAll('[data-segment]');
    expect(segments.length).toBe(28);
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<LedSevenSegment ref={ref} value={0} />);
    expect(ref.current).toBeTruthy();
  });
});
