import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import store from '../store/store'
import ProductCard from '../components/ProductCard'
import Cart from '../components/Cart'

describe('Cart ↔ ProductCard integration', () => {
  const fakeProduct = {
    id: 42,
    title: 'Test Item',
    price: 9.99,
    image: 'placeholder.png'
  }

  beforeEach(() => {
    // Reset cart state before each test.
    store.dispatch({ type: 'cart/clear' })
  })

  it('shows the item in the Cart when you click Add to Cart', () => {
    render(
      <Provider store={store}>
        {/* render both ProductCard and Cart side by side */}
        <ProductCard product={fakeProduct} />
        <Cart />
      </Provider>
    )

    // click the “Add to Cart” button
    const addBtn = screen.getByRole('button', { name: /add to cart/i })
    userEvent.click(addBtn)

    // the Cart component should now show our item’s title
    expect(screen.getByText(/Test Item/i)).toBeInTheDocument()
  })

  it('increments the Cart link count when you add an item', () => {
    // we’ll render the little cart-link from <Cart /> itself
    render(
      <Provider store={store}>
        <ProductCard product={fakeProduct} />
        <Cart />
      </Provider>
    )

    const addBtn = screen.getByRole('button', { name: /add to cart/i })
    userEvent.click(addBtn)

    // after clicking, the “Go Back to Products” link is still there but
    // Cart() also renders the link with the count in its header
    const cartLink = screen.getByRole('link', { name: /cart\s*\(\s*1\s*\)/i })
    expect(cartLink).toBeInTheDocument()
  })
})
