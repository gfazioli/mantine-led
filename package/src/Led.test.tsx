import React from 'react';
import { render } from '@mantine-tests/core';
import { Led } from './Led';
import { LedGroup } from './LedGroup';

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
  it('supports flat variant', () => {
    const { container } = render(<Led variant="flat" />);
    const led = container.querySelector('[data-variant="flat"]');
    expect(led).toBeTruthy();
  });

  it('supports 3d variant', () => {
    const { container } = render(<Led variant="3d" />);
    const led = container.querySelector('[data-variant="3d"]');
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

  it('renders ReactNode label', () => {
    const { container } = render(<Led label={<span data-testid="custom">Custom</span>} />);
    expect(container.querySelector('[data-testid="custom"]')).toBeTruthy();
  });

  it('renders label when value is 0', () => {
    const { container } = render(<Led label={0} />);
    expect(container.textContent).toContain('0');
  });

  // Label position
  it('applies data-label-position="left" when labelPosition is left', () => {
    const { container } = render(<Led label="Test" labelPosition="left" />);
    const root = container.querySelector('[role="status"]');
    expect(root?.getAttribute('data-label-position')).toBe('left');
  });

  it('applies data-label-position="right" when labelPosition is right', () => {
    const { container } = render(<Led label="Test" labelPosition="right" />);
    const root = container.querySelector('[role="status"]');
    expect(root?.getAttribute('data-label-position')).toBe('right');
  });

  // Accessibility (non-interactive)
  it('has role="status" when not interactive', () => {
    const { container } = render(<Led />);
    const root = container.querySelector('[role="status"]');
    expect(root).toBeTruthy();
  });

  it('sets aria-label from string label', () => {
    const { container } = render(<Led label="Online" />);
    const root = container.querySelector('[aria-label="Online"]');
    expect(root).toBeTruthy();
  });

  it('does not set aria-label when label is not a string', () => {
    const { container } = render(<Led label={<span>Node</span>} />);
    const root = container.querySelector('[role="status"]');
    expect(root?.hasAttribute('aria-label')).toBeFalsy();
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
      const led = container.querySelector(`[data-animate="${type}"]`);
      expect(led).toBeTruthy();
    }
  );

  // Glow and light elements always rendered inside led
  it('renders glow and light elements inside led', () => {
    const { container } = render(<Led />);
    const led = container.querySelector('[data-variant]');
    expect(led?.children.length).toBe(2);
  });

  // Shape
  it.each(['circle', 'square', 'rectangle'] as const)('applies data-shape="%s"', (shape) => {
    const { container } = render(<Led shape={shape} />);
    const led = container.querySelector(`[data-shape="${shape}"]`);
    expect(led).toBeTruthy();
  });

  it('defaults to circle shape', () => {
    const { container } = render(<Led />);
    const led = container.querySelector('[data-shape="circle"]');
    expect(led).toBeTruthy();
  });

  // onChange (interactive)
  it('has role="switch" when onChange is provided', () => {
    const { container } = render(<Led onChange={() => {}} />);
    const root = container.querySelector('[role="switch"]');
    expect(root).toBeTruthy();
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
    const root = container.querySelector('[role="switch"]');
    expect(root?.getAttribute('tabindex')).toBe('0');
  });

  it('does not set tabIndex when not interactive', () => {
    const { container } = render(<Led />);
    const root = container.querySelector('[role="status"]');
    expect(root?.hasAttribute('tabindex')).toBeFalsy();
  });

  it('calls onChange with toggled value on click', () => {
    const onChange = jest.fn();
    const { container } = render(<Led onChange={onChange} value />);
    const root = container.querySelector('[role="switch"]');
    root?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it('calls onChange on Enter key', () => {
    const onChange = jest.fn();
    const { container } = render(<Led onChange={onChange} value={false} />);
    const root = container.querySelector('[role="switch"]');
    root?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('calls onChange on Space key', () => {
    const onChange = jest.fn();
    const { container } = render(<Led onChange={onChange} value />);
    const root = container.querySelector('[role="switch"]');
    root?.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it('sets data-interactive when onChange is provided', () => {
    const { container } = render(<Led onChange={() => {}} />);
    const root = container.querySelector('[data-interactive]');
    expect(root).toBeTruthy();
  });

  // Tooltip
  it('renders tooltip wrapper when tooltip prop is set', () => {
    const { container } = render(<Led tooltip="Status info" />);
    // Tooltip wraps the component, root should still be present
    const root = container.querySelector('[role="status"]');
    expect(root).toBeTruthy();
  });

  it('does not render tooltip wrapper when tooltip is not set', () => {
    const { container } = render(<Led />);
    const root = container.querySelector('[role="status"]');
    expect(root).toBeTruthy();
  });
});

describe('LedGroup', () => {
  it('renders correct number of LEDs from count', () => {
    const { container } = render(<LedGroup value={3} count={5} />);
    const leds = container.querySelectorAll('[data-variant]');
    expect(leds.length).toBe(5);
  });

  it('activates first N LEDs when value is a number', () => {
    const { container } = render(<LedGroup value={3} count={5} />);
    const activeLeds = container.querySelectorAll('[data-value]');
    expect(activeLeds.length).toBe(3);
  });

  it('renders from boolean array', () => {
    const { container } = render(<LedGroup value={[true, false, true, false]} />);
    const leds = container.querySelectorAll('[data-variant]');
    expect(leds.length).toBe(4);
    const activeLeds = container.querySelectorAll('[data-value]');
    expect(activeLeds.length).toBe(2);
  });

  it('passes shared props to all LEDs', () => {
    const { container } = render(<LedGroup value={2} count={3} variant="3d" />);
    const leds3d = container.querySelectorAll('[data-variant="3d"]');
    expect(leds3d.length).toBe(3);
  });

  it('defaults to 5 LEDs when count is not specified', () => {
    const { container } = render(<LedGroup value={2} />);
    const leds = container.querySelectorAll('[data-variant]');
    expect(leds.length).toBe(5);
  });

  it('passes shape prop to LEDs', () => {
    const { container } = render(<LedGroup value={1} count={3} shape="square" />);
    const squares = container.querySelectorAll('[data-shape="square"]');
    expect(squares.length).toBe(3);
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<LedGroup ref={ref} value={1} count={2} />);
    expect(ref.current).toBeTruthy();
  });
});
