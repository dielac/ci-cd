# FakeStore App v2

This is a simple e-commerce web app built with React, Redux Toolkit, React Query, Bootstrap, and Vite. The goal was to build something that feels like a working store with products, a cart system, and a nice UI — while also practicing things like testing and CI/CD automation.

---

## Features

- Browse a list of fake products
- View product details
- Add items to cart
- See cart count update in header
- View and remove items in cart
- Fully responsive (Bootstrap)
-  CI/CD using GitHub Actions + Vercel
-  Unit & Integration tests using Jest and React Testing Library

---

## Tech Stack

- React (Vite)
- Redux Toolkit (for global state / cart)
- React Query (for fetching products)
- React Router DOM (for navigation)
- Bootstrap (for layout/UI)
- Jest + React Testing Library (for testing)
- GitHub Actions (CI/CD)
- Vercel (Deployment)

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/fakestore-appv2.git
cd fakestore-appv2
2. Install dependencies
npm install
3. Run the app locally
npm run dev
Running Tests
To run tests once:
npm test
To watch tests:
npm run test:watch
Continuous Integration & Deployment
Every push to the main branch will trigger GitHub Actions.


It will:
Install dependencies
Run tests
If tests pass, it deploys to Vercel
The workflow config lives in .github/workflows/ci-cd.yml
You’ll need to add your VERCEL_TOKEN in the GitHub repository’s Secrets for the deploy step to work.


Folder Structure
src/
  components/       # Reusable UI components (ProductCard, Cart, etc)
  pages/            # Route pages (Home, ProductDetails, etc)
  context/          # Context API (if used)
  store/            # Redux store setup
  api/              # React Query fetch functions
  test/             # Integration tests
  types/            # TypeScript types (if used)


Live Demo


You can try the app live here:
https://fakestore-appv2.vercel.app



