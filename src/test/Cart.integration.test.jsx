
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../store/store';      
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

test('Cart updates when adding a product', () => {
  const fakeProduct = {
    id: 1,
    title: 'Test Item',
    price: 5,
    image: 'https://via.placeholder.com/150',
  };

  render(
    <Provider store={store}>
      <ProductCard product={fakeProduct} />
      <Cart />
    </Provider>
  );

  // click our single Add to Cart button
  userEvent.click(screen.getByRole('button', { name: /add to cart/i }));

  // Cart should now show the item’s title
  expect(screen.getByText(/Test Item/i)).toBeInTheDocument();
});
