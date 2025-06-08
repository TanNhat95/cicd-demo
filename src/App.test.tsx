import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project title and GitHub link', () => {
  render(<App />);
  const titleElement = screen.getByText('React TypeScript Project');
  const githubLink = screen.getByText('Visit GitHub Profile');
  
  expect(titleElement).toBeInTheDocument();
  expect(githubLink).toBeInTheDocument();
});
