# FakeStore App V2

This is a simple and beginner-friendly e-commerce app built with React and Vite.  
It includes product management, a shopping cart, and a full CI/CD pipeline.

---

## Live Site

You can view the app here:  
https://vercel.com/diela-camajs-projects/ci-cd-pipeline-for-react-e-commerce-app-pw21

---

## Features

**Product Pages:**
- View a list of all products
- Click on a product to see more details
- Add a new product using a form
- Edit an existing product
- Delete a product with confirmation

**Cart:**
- Add items to the shopping cart
- See total price and quantity
- Remove items from the cart
- Quantity updates and totals calculated

**Category Filter:**
- Filter products by category using a dropdown menu

**State Management:**
- Redux Toolkit is used for the shopping cart
- React Query is used for API data fetching and caching

**Styling:**
- Bootstrap is used for layout and styling
- Navbar and footer are included

**Testing:**
- Unit tests for Home and ProductCard components
- Integration test for the cart
- All tests use Jest and React Testing Library

**CI/CD:**
- GitHub Actions runs tests and builds the app
- The app is deployed to Vercel automatically if tests pass

---

## Tech Stack

- React
- Vite
- Redux Toolkit
- React Router DOM
- React Query
- Bootstrap
- Axios
- Jest
- React Testing Library
- GitHub Actions
- Vercel

---

## Folder Structure

fakestore-appv2/
├── src/
│ ├── components/
│ │ ├── Home.jsx
│ │ ├── ProductList.jsx
│ │ ├── ProductDetails.jsx
│ │ ├── AddProduct.jsx
│ │ ├── EditProduct.jsx
│ │ ├── Cart.jsx
│ │ └── CartLink.jsx
│ ├── store/
│ │ ├── cartSlice.js
│ │ ├── cartSelectors.js
│ │ └── store.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .github/workflows/
│ └── main.yml (CI/CD pipeline)
├── package.json
├── vite.config.js
└── README.md


---

## How to Run This Project

1. Clone this repository

git clone https://github.com/dielac/CI-CD-Pipeline-for-React-E-Commerce-App
cd fakestore-appv2


2. Install all dependencies

npm install


3. Start the development server

npm run dev


4. To run the tests

npm run test


---

