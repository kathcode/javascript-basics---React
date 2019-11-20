import React from 'react';
import Code from './index';
import { render } from '@testing-library/react';

it('renders the title', () => {
  const { getByText } = render(<Code topic="time" />);
  expect(getByText('Code')).toBeInTheDocument();
});

it('Should return a code snipped', () => {
  const { debug } = render(<Code topic="time" />);
})
