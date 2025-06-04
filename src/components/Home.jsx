import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { Container, Card, Button, Form } from 'react-bootstrap'; // assuming you’re using react‐bootstrap
import { Link } from 'react-router-dom'; // if you have routing set up

import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice'; 


const fetchProducts = async (category) => {
  if (category && category !== 'all') {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return data;
  } else {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    return data;
  }
};

const fetchCategories = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products/categories');
  return data; // e.g. ["electronics", "jewelery", ...]
};

const Home = () => {
  // Track which category is selected (default to “all”)
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ── INITIALIZE dispatch ─────────────────────────────────────────────────
  const dispatch = useDispatch();
  // ──────────────────────────────────────────────────────────────────────────
// this is where the product listing starts and the map code renders a card for each product as well 
  // 1) Query for categories
  const {
    data: categories = [],
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery({ queryKey: ['categories'], queryFn: fetchCategories });

  // 2) Query for products - this is where the category navigation requirement is 
  const {
    data: products = [],
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery({
    queryKey: ['products', selectedCategory],
    queryFn: () => fetchProducts(selectedCategory),
  });

  if (categoriesLoading || productsLoading) {
    return <p>Loading…</p>;
  }
  if (categoriesError || productsError) {
    return <p>Something went wrong. Try again later.</p>;
  }

  return (
    <Container>
      <h1 className="my-4">Product Catalog</h1>

      {/* Category Dropdown */}
      <Form.Group className="mb-3">
        <Form.Label>Select Category:</Form.Label>
        <Form.Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* Grid of Products */}
      <div className="d-flex flex-wrap gap-3">
        {products.map((prod) => (
          <Card key={prod.id} style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={prod.image}
              alt={prod.title}
              style={{ objectFit: 'contain', height: '200px' }}
            />
            <Card.Body>
              <Card.Title style={{ fontSize: '1rem' }}>{prod.title}</Card.Title>
              <Card.Text>
                <strong>Price:</strong> ${prod.price} <br />
                <strong>Category:</strong> {prod.category} <br />
                <strong>Rating:</strong> {prod.rating.rate} <br />
                {prod.description.slice(0, 80)}…
              </Card.Text>
              <div className="d-flex justify-content-between">
                {/* 1) “Details” button/link */}
                <Link to={`/products/${prod.id}`}>
                  <Button variant="outline-primary" size="sm">
                    Details
                  </Button>
                </Link>

                {/* 2) “Add to Cart” dispatch Redux action  */}
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: prod.id,
                        title: prod.title,
                        price: prod.price,
                        image: prod.image,
                      })
                    )
                  }
                >
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Home;
