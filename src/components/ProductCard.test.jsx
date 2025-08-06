import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

test("renders title and price", () => {
  const fakeProduct = { id: 1, title: "Test", price: 5, image: "x" };
  render(<ProductCard product={fakeProduct} />);
  expect(screen.getByText(/Test/i)).toBeInTheDocument();
  expect(screen.getByText(/\$5/)).toBeInTheDocument();
});

const fakeProduct = {
  id: 1,
  title: "Test Shoes",
  price: 50,
  image: "test.jpg",
};

test("renders title and price", () => {
  render(<ProductCard product={fakeProduct} />);
  expect(screen.getByText(/Test Shoes/i)).toBeInTheDocument();
  expect(screen.getByText(/\$50/)).toBeInTheDocument();
});
