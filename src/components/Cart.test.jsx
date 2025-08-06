import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import Cart from './Cart'

test('shows empty cart message', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Cart />
      </Provider>
    </MemoryRouter>
  )
  expect(screen.getByText(/Your Cart is Empty/i)).toBeInTheDocument()
})
