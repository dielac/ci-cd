import React, { useState, useEffect } from 'react'    
import Container from "react-bootstrap/Container"    
import Card from "react-bootstrap/Card"    // Bootstrap card for product display
import Button from "react-bootstrap/Button"    
import Row from "react-bootstrap/Row" 
import Col from "react-bootstrap/Col"    // Bootstrap column for grid layout
import { Link } from 'react-router-dom'    
import axios from "axios"    // Axios for making API requests



// ProductList component
const ProductList = () => {
    // manages list of products and UI states
    const [products, setProducts] = useState([]);    // fetched products
    const [loading, setLoading] = useState(true);    // loading status
    const [error, setError] = useState(null);    // error messages



   
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")    // Making a GET request to fetch the product list
            .then((response) => {
                setProducts(response.data);    // Update the products state with the response data
                setLoading(false);    // stopsloading spinner once data is loaded
            })


            .catch((error) => {
                setError("Failed to fetch products.");    // Handles errors that occur during the fetch
                setLoading(false);    // Stop loading even if an error occurs
            });
    }, []);  



    // If still loading, show a loading message
    if (loading) return <p>Loading products.... Please wait!!!!</p>;


    //  display the error message/if error occurs again
    if (error) return <p>{error}</p>;

    // Returning the list / displayed in a grid
    return (
        <Container>
           
            <h2 className="text-center">Our Products!!</h2>

            {/* product list in a row layout */}
            <Row>

                {/* Mapping product to create a card */}

                {products.map((product) => (
                    <Col key={product.id} md={4} className="mb-4">    {/* Use 'md=4' for 3 columns per row!!! */}
                        <Card>
                            {/* product image */}
                            <Card.Img variant="top" src={product.image} alt={product.title} />



                            <Card.Body>
                                {/* product title */}
                                <Card.Title>{product.title}</Card.Title>

                                {/*  product price */}
                                <Card.Text>${product.price}</Card.Text>



                                {/* Link to the product details page */}
                                <Link to={`/products/${product.id}`}>

                                    <Button variant="primary">View the Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductList
