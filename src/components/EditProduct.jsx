import React, { useState, useEffect } from "react"    
import { useParams, Link, useNavigate } from "react-router-dom"   
import { Container, Form, Button } from "react-bootstrap"   
import axios from "axios"    

const EditProduct = () => {


    // takes out the product ID from the URL
    const { id } = useParams();
    const navigate = useNavigate();    



    //  manage the product detail
    const [product, setProduct] = useState({
        title: "",    
        price: "",    
        description: "",   
        category: ""   
    });

    const [loading, setLoading] = useState(true);    
    const [error, setError] = useState(null);  




    // fetchs product details when the component loads
    useEffect(() => {
        
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);    
                setLoading(false);    
            })
            .catch((error) => {
                setError("Failed to load ");   
                setLoading(false);    

            });
    }, [id]);   

    // handles the product update
    const handleUpdateProduct = () => {
       
        axios.put(`https://fakestoreapi.com/products/${id}`, product)
            .then(() => {
                alert("Product updated successfully!");   
                navigate("/products");    
            })
            .catch(() => {
                alert("Failed to update product. Please try again.");   


            });
    }

    // change event for input fields to update the  state
    const handleChange = (e) => {
        const { name, value } = e.target;    
        setProduct((prev) => ({
            ...prev,    
            [name]: value    
        }));
    }

    // thiss renders loading message if the data is being fetched
    if (loading) return <p>Loading product details... Please wait.</p>;
    // Renders a error message if there is an issue fetching data
    if (error) return <p>{error}</p>;



    // Returning form to edit the product
    return (
        <Container className="form-container">
            <h2 className="text-center mb-4">Edit Product</h2>    


            {/* thi code updates the product details*/}
            <Form>
               

                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>  

                    <Form.Control 
                        type="text"    
                        name="title"    
                        value={product.title}   
                        onChange={handleChange}   

                    />
                </Form.Group>

                
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>    
                    <Form.Control 
                        type="number"   
                        name="price"    
                        value={product.price}    // Binding the value to state
                        onChange={handleChange}    // Updating state on change

                    />
                </Form.Group>

             
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>    
                    <Form.Control 
                        as="textarea"    

                        rows={3}    
                        name="description"    
                        value={product.description}    
                        onChange={handleChange}    


                    />
                </Form.Group>

              
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>   
                    <Form.Control 
                        type="text"    
                        name="category"   

                        value={product.category}    
                        onChange={handleChange}    

                    />
                </Form.Group>

                {/* this is the button that saves all the changes 
                 */}
                <Button variant="primary" onClick={handleUpdateProduct}>

                    Save Changes
                </Button>
            </Form>
        </Container>
    )
}


export default EditProduct
