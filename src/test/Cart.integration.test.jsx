import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from '../App';
import store from '../store/store'; 

// Mock axios so products/categories render quickly and consistently
jest.mock('axios', () => ({
  get: jest.fn((url) => {
    if (url.includes('/products/categories')) {
      return Promise.resolve({ data: ['electronics', "men's clothing"] });
    }
    if (url.includes('/products')) {
      return Promise.resolve({
        data: [
          {
            id: 1,
            title: 'Test Item',
            price: 9.99,
            category: "men's clothing",
            rating: { rate: 4.2, count: 12 },
            image: 'x',
            description: 'y',
          },
          {
            id: 2,
            title: 'Another Item',
            price: 5,
            category: 'electronics',
            rating: { rate: 3.8, count: 3 },
            image: 'z',
            description: 'w',
          },
        ],
      });
    }
    return Promise.resolve({ data: [] });
  }),
}));

describe('Cart ↔ Product flow', () => {
  let queryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
  });

  function renderApp() {
  
    return render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    );
  }

  it('increments the Cart link count when you add an item', async () => {
    renderApp();
    const user = userEvent.setup();

    // If we started on Cart, navigate back to products
    const backBtn = screen.queryByRole('button', { name: /go back to products/i });
    if (backBtn) {
      await user.click(backBtn);
    } else {
      const productsLink = screen.queryByRole('link', { name: /products/i });
      if (productsLink) await user.click(productsLink);
    }

    await screen.findByText(/our products!!/i);

    // Click the first "Add to Cart"
    const addButtons = await screen.findAllByRole('button', { name: /add to cart/i });
    expect(addButtons.length).toBeGreaterThan(0);
    await user.click(addButtons[0]);

    expect(screen.getByText(/Cart\s*\(\s*[1-9]\d*\s*\)/i)).toBeInTheDocument();
  });
});
