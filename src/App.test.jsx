import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the city search input', () => {
  render(<App />);
  expect(screen.getByText(/search for city/i)).toBeInTheDocument();
});
