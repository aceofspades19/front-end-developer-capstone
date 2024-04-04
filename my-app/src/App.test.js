import { render, screen } from '@testing-library/react';
import {Router} from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import App from './App';
import { MemoryRouter } from 'react-router';



test('Renders the BookingForm heading', () => {
  render(
    <MemoryRouter initialEntries={['/booking']}>
      <App />
    </MemoryRouter>,
  )
  const headingElement = screen.getByText("Make a Reservation");
  expect(headingElement).toBeInTheDocument();
}) 


test('Test initialize times', () => {
  render(
    <MemoryRouter initialEntries={['/booking']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getAllByRole('option').length).toBe(9)
})

test('Test update times', () => {
  render(
    <MemoryRouter initialEntries={['/booking']}>
      <App />
    </MemoryRouter>,
  )
  userEvent.selectOptions(
    screen.getByTestId('availableTimes'),
    screen.getByRole('option', { name: '21:00' }),
  )
  expect(screen.getByRole('option', { name: '21:00' }).selected).toBe(true);
})