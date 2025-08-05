import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from '../store/store';
import App from '../App';

const queryClient = new QueryClient();

test('adding product updates cart count in navbar', async () => {
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  );

  // Wait for products to load and click the first “Add to Cart” button
  const addButtons = await screen.findAllByRole('button', { name: /add to cart/i });
  expect(addButtons.length).toBeGreaterThan(0);
  userEvent.click(addButtons[0]);

  // The navbar link should update to show one item in cart
  const cartLink = await screen.findByRole('link', { name: /Cart\s*\(\s*1\s*\)/i });
  expect(cartLink).toBeInTheDocument();
});
