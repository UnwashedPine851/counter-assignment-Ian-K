// import necessary react testing library helpers here
// import the Counter component here
import React from 'react';
import userEvent from '@testing-library/user-event';
import Counter from '../Components/Counter.js';
import {render, screen} from '@testing-library/react';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument;
});

test('clicking + increments the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const oldCount = screen.getByTestId('count');
  await userEvent.click(screen.getByText('+'));
  expect(parseInt(screen.getByTestId('count'))).toBe(parseInt(oldCount) + 1);
});

test('clicking - decrements the count', async () => {
  // Complete the unit test below based on the objective in the line above
  const oldCount = screen.getByTestId('count');
  await userEvent.click(screen.getByText('-'));
  expect(parseInt(screen.getByTestId('count'))).toBe(parseInt(oldCount) - 1);
});

