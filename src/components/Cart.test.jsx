import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../store/store';
import Cart from './Cart';

test('shows empty cart message', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Cart />
      </Provider>
    </MemoryRouter>
  );

  expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
});
