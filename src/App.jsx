import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Cart from "./components/Cart";
import CartLink from "./components/CartLink";

function App() {
  return (
    <>
      {/* 1) Header/Text above the Navbar */}
      <header className="bg-light py-3 mb-3">
        <Container>
          <h1 className="mb-0">Welcome to Our Store!</h1>
          <small>Your all-in-one shopping experience!!</small>
        </Container>
      </header>

      {/* 2) The navbar  */}
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
           
            <Navbar.Brand as={Link} to="/">
              FakeStoreApp
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse id="main-navbar-nav">
              {/* Push all links to the right */}
              <Nav className="ms-auto">
                <Nav.Item>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/products">
                    Products
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/add-product">
                    Add Product
                  </Nav.Link>
                </Nav.Item>
                {/* CartLink will render “Cart (0)” or “Cart (3)” etc. */}
                <Nav.Item>
                  <CartLink />
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* 3) All your routes, also another area that has the shopping cart component*/}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

   
      <footer className="bg-dark text-light text-center py-2 mt-auto">
        <small>&copy; 2025 Store Inc. All rights reserved.</small>
      </footer>
    </>
  );
}

export default App;
