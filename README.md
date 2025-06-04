# FakeStoreAppV2

Welcome! This is a simple but fully functional e‐commerce demo built with React, Redux Toolkit, React Query, and React Bootstrap. The goal was to connect to the FakeStoreAPI (https://fakestoreapi.com/) to fetch product data, let users browse categories, add items to a cart, and simulate a checkout. We also made sure the cart state persists in the browser’s session storage so it survives page refreshes.

---

## Table of Contents

1. [Why “V2”?](#why-v2)  
2. [Features](#features)  
3. [Tech Stack & Dependencies](#tech-stack--dependencies)  
4. [Getting Started (Installation)](#getting-started-installation)  
5. [Project Structure Overview](#project-structure-overview)  
6. [Available Scripts](#available-scripts)  
7. [How It All Works (A High‐Level Tour)](#how-it-all-works-a-high-level-tour)  
8. [Next Steps & Ideas for Improvement](#next-steps--ideas-for-improvement)

---

## Why “V2”?

If you’ve seen an earlier version of this app (V1), you might remember it was a rough prototype with hard‐coded data and no real persistence. V2 improves on that by:

- Fetching live product and category data from FakeStoreAPI  
- Managing cart state with Redux Toolkit (instead of plain React state)  
- Persisting the cart in session storage so items don’t disappear on a page reload  
- Using React Query to simplify data fetching and caching  
- Styling everything with React Bootstrap so it looks decent on desktop and mobile

In short, V2 is more complete, more maintainable, and more “real‐world” than the first draft.

---

## Features

1. **Product Catalog & Category Filter**  
   - On the Home page, you can see a grid of all products (title, price, category, rating, description snippet, and image).  
   - At the top of the catalog is a drop‐down that automatically fetches _all available categories_ from FakeStoreAPI. Selecting a category filters the shown products.  

2. **Product Details Link**  
   - Each product card has a “Details” button that (in a future iteration) would lead to a detailed view at `/products/:id`. Right now it’s a placeholder link, but hooks are in place so you can extend it easily.  

3. **Shopping Cart (Redux Toolkit + Session Storage)**  
   - Click “Add to Cart” on any product card. That item is added (or if it’s already there, its quantity increases).  
   - A “Cart (N)” link in the top navigation bar shows your total item count in real time.  
   - Cart state is _automatically saved_ to `sessionStorage`, so if you refresh or close and reopen the page, your items are still there.  

4. **Cart Page with Checkout Simulation**  
   - Visiting `/cart` (or clicking “Cart (N)”) brings you to a page showing your added items, each with:  
     - A small image thumbnail  
     - Title  
     - Unit price  
     - An input to adjust quantity (typing a new number updates Redux state immediately)  
     - Subtotal per item (price × quantity)  
     - A “Remove” button to delete that item from the cart  
   - Below the list, you’ll see **Total Items** and **Total Price** calculated automatically by selectors.  
   - A “Checkout” button clears the cart (Redux state and session storage) and shows a simple alert: “Checkout successful! Your cart has been cleared.”  

5. **Responsive, Styled Navigation Bar**  
   - The top nav bar uses React Bootstrap with a dark background and white text.  
   - It has links for “Home,” “Products,” “Add Product” (placeholder for future), and “Cart (N)”.  
   - On small screens, it collapses into a hamburger menu for easy mobile navigation.  

6. **Clean Code Structure & Beginner‐Friendly Patterns**  
   - All Redux logic lives under `src/store/` (a `cartSlice.js` for reducers/actions, a `cartSelectors.js` for total/count selectors, and `store.js` for configuring Redux and session storage).  
   - Data fetching is handled by React Query (`useQuery`) in `Home.jsx`.  
   - React Router handles client‐side navigation with `<Routes>` and `<Route>`.  
   - React Bootstrap components (`<Navbar>`, `<Container>`, `<Card>`, `<Table>`, etc.) keep styling consistent without writing lots of custom CSS.  

---

## Tech Stack & Dependencies

Below is a summary of the main libraries and why they’re here:

- **React (v19)**  
  The core framework for building UI components.  

- **React Router DOM (v6)**  
  Enables client‐side routing: `<BrowserRouter>`, `<Routes>`, `<Route>`, and `<Link>`.  

- **Redux Toolkit (v2.8+)**  
  Simplifies Redux setup with `createSlice`, `configureStore`, and built‐in support for immutable updates.  
  - We store our cart items here and expose actions like `addToCart`, `removeFromCart`, `updateQuantity`, and `clearCart`.  

- **React Redux (v9.2+)**  
  Provides the `<Provider>` wrapper and hooks (`useDispatch`, `useSelector`) so React components can interact with the Redux store.  

- **React Query (v5)**  
  Great for data fetching and caching. We use `useQuery` to load products (`/products`) and categories (`/products/categories`) from FakeStoreAPI.  

- **React Bootstrap (v2.6+) & Bootstrap (v5.2+)**  
  Pre‐built, responsive components (grid system, nav bars, cards, tables, forms) that keep the look consistent. We only write minimal custom CSS.  

- **Axios (v1.0+)**  
  For making HTTP requests to FakeStoreAPI. We could use `fetch()`, but Axios is a bit nicer with automatic JSON parsing and error handling.  

- **Vite (v4)**  
  A lightning‐fast development server and build tool for modern frontend apps.  

- **TypeScript (v5)**  
  Basic TypeScript support is enabled (you’ll notice `.jsx` files import React types, though most code is still plain JavaScript for simplicity).  

- **ESLint & ESLint Plugin React Hooks**  
  Linting setup to catch common errors, especially with React Hooks.  

---

## Getting Started (Installation)

Follow these steps to get the project running on your local machine:

1. **Clone the repo**  
   ```bash
   git clone https://github.com/dielac/fake_store_app
   cd fakestore-app
