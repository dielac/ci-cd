
require('@testing-library/jest-dom');

import '@testing-library/jest-dom'

// Suppress only the React Router future-flag warnings in tests
const originalWarn = console.warn
beforeAll(() => {
  console.warn = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('React Router Future Flag Warning')
    ) {
      return
    }
    originalWarn(...args)
  }
})
afterAll(() => {
  console.warn = originalWarn
})
