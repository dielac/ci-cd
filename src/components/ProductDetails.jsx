import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Container, Card, Button } from "react-bootstrap"; // <-- single named import
import { useQuery } from "@tanstack/react-query";

const ProductDetails = () => {
  // getting product ID from the URL
  const { id } = useParams();
  const navigate = useNavigate();

  // State variables / manages product data and UI states
  const [product, setProduct] = useState(null); // stores product details
  const [loading, setLoading] = useState(true); // loading status
  const [error, setError] = useState(null); // error messages
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // uses React Query to fetch product data
  const { data, isLoading, isError } = useQuery(
    ["product", id],
    () => axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => res.data),
    {
      onSuccess: (data) => {
        setProduct(data);
        setLoading(false);
      },
      onError: () => {
        setError("Failed to load product details");
        setLoading(false);
      },
    }
  );

  // If React Query is still loading or has errored out, handle that:
  if (isLoading || loading) return <p>Loading product details… Please wait!!</p>;
  if (isError || error) return <p>{error || "Error fetching product."}</p>;

  // Handles product deletion
  const handleDeleteProduct = () => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        alert("Product deleted successfully!");
        navigate("/products");
      })
      .catch(() => {
        alert("Failed to delete product.");
      });
  };

  // Showing and hiding the delete confirmation modal
  const handleClose = () => setShowDeleteModal(false);
  const handleShow = () => setShowDeleteModal(true);

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>Category: {product.category}</Card.Text>
          <Card.Text>Price: ${product.price}</Card.Text>
          <Card.Text>Rating: {product.rating.rate} / 5</Card.Text>

          <Link to={`/edit-product/${id}`}>
            <Button variant="warning" className="me-2">
              Edit
            </Button>
          </Link>

          <Button variant="danger" onClick={handleShow}>
            Delete
          </Button>

          <Link to="/products">
            <Button variant="primary" className="mt-2">
              Back to Products
            </Button>
          </Link>
        </Card.Body>
      </Card>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure? Deleting in progress…</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteProduct}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductDetails;
