
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { addToCart } from "../store/cartSlice";

// If you use react-bootstrap, keep these. If not, see note below.
import { Container, Row, Col } from "react-bootstrap";

const ProductList = () => {
  const dispatch = useDispatch();

  // ✅ Fetch products here so the list isn't empty in tests
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("/products"); // mocked in the test
      return res.data;
    },
  });

  if (isLoading) return <p>Loading…</p>;
  if (error) return <p>{String(error)}</p>;

  return (
    <Container>
      <h2 className="text-center">Our Products!!</h2>

      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <div className="card">
              <img
                className="card-img-top"
                src={product.image}
                alt={product.title}
              />
              <div className="card-body">
                <div className="card-title h5">{product.title}</div>
                <p className="card-text">${product.price}</p>

                {/* ✅ The button your test clicks */}
                <button
                  type="button"
                  className="btn btn-success me-2"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </button>

                <a href={`/products/${product.id}`}>
                  <button className="btn btn-primary" type="button">
                    View the Details
                  </button>
                </a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
