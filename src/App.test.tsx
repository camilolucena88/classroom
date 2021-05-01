import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Render Error Boundary', () => {
  render(<App />);
  const linkElement = screen.getByText(/Classroom/i);
  expect(linkElement).toBeInTheDocument();
});
