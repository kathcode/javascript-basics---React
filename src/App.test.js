import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders the title message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Fundaments of Javascript - By Kath_Code')).toBeInTheDocument();
});

