import React from 'react';
import { render } from '@mantine-tests/core';
import { Led } from './Led';

describe('Led', () => {
  it('renders without crashing', () => {
    const { container } = render(<Led />);
    expect(container).toBeTruthy();
  });
});
