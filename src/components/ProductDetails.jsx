
import React, { useState, useEffect } from "react"    
import { useParams, Link, useNavigate } from "react-router-dom"    
import axios from "axios"    
import Container from "react-bootstrap/Container"   
import Card from "react-bootstrap/Card"    
import Button from "react-bootstrap/Button"   
import Modal from "react-bootstrap/Modal"    



const ProductDetails = () => {
    // gettingproduct ID from the URL 
    const { id } = useParams();    // Get the product ID from the URL

    const navigate = useNavigate();   


    // State variables / manages product data and UI states


    const [product, setProduct] = useState(null);    //stores product details
    const [loading, setLoading] = useState(true);    //  loading status
    const [error, setError] = useState(null);    //  error messages
    const [showDeleteModal, setShowDeleteModal] = useState(false);   




    //  gets product data from the API
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)    
            .then((response) => {
                setProduct(response.data);    
                setLoading(false);  
            })

            .catch(() => {
                setError("Failed to load product details");    
                setLoading(false);    


            });
    }, [id]);   

    // this code below does the product deletion
    const handleDeleteProduct = () => {
        axios.delete(`https://fakestoreapi.com/products/${id}`)    // Sends  DELETE request to the API
            .then(() => {
                alert("Product deleted successfully!");    // Show success message
                navigate("/products");  
            })
            .catch(() => {
                alert("Failed to delete product.");    // this shows the error message if that all fails
            });
    }

    // showing and hiding the delete modal

    const handleClose = () => setShowDeleteModal(false);    // Close the delete

    const handleShow = () => setShowDeleteModal(true);    // Show the delete 

    //loading state
    if (loading) return <p>Loading product details..... Please wait!!</p>;
    //error state
    if (error) return <p>{error}</p>;



    // edit and delete options
    return (
        <Container>
            
            <Card>
                <Card.Img variant="top" src={product.image} alt={product.title} />    {/* the products image */}
                <Card.Body>
                    
                    <Card.Title>{product.title}</Card.Title>

                   
                    <Card.Text>{product.description}</Card.Text>

                   
                    <Card.Text>Category: {product.category}</Card.Text>

                   
                    <Card.Text>Price: ${product.price}</Card.Text>

                    
                    <Link to={`/edit-product/${id}`}>
                        <Button variant="warning" className="me-2">Edit</Button>
                    </Link>

                    
                    <Button variant="danger" onClick={handleShow}>Delete</Button>

                  
                    <Link to="/products">
                        <Button variant="primary" className="mt-2">Back to the Products!</Button>
                    </Link>
                </Card.Body>
            </Card>



            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={handleClose}>
                <Modal.Header closeButton>

                    <Modal.Title>Delete Product</Modal.Title>    {/* title */}
                </Modal.Header>

                <Modal.Body>Are you sure? Deleting in progress ?</Modal.Body>    {/* ext */}
                <Modal.Footer>

                   
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>

                    


                    <Button variant="danger" onClick={handleDeleteProduct}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}


export default ProductDetails
