import React, { useState } from "react"     
import { Container, Form, Button } from "react-bootstrap" 
import axios from "axios"   


const AddProduct = () => {
    //stores the form inputs
    const [title, setTitle] = useState("")     
    const [price, setPrice] = useState("")    

    const [description, setDescription] = useState("")  
    const [category, setCategory] = useState("")   


    // the code below gets the function to add a new product
    const handleAddProduct = () => {
        // this makes sure the fields arent empty
        if (!title || !price || !description || !category) {
            alert("Wait! FILL OUT FIELD!")     // shows this alert if they are
            return    

        }

        // requesitng from the API to add the new product
        axios.post("https://fakestoreapi.com/products", {
            title,    
            price,     
            description, 
            category,   
        })
        .then(() => {
            alert("Product added successfully!")   

        
            setTitle("")     
            setPrice("")
            setDescription("")
            setCategory("")
        })

        .catch(() => {
            alert("Failed. Pls try again")    
        })
    }

    // code below renders the form in a container 
    return (
        <Container className="form-container">
            {/* Form to add a new product */}
            <Form style={{ width: '100%', maxWidth: '670px' }}>
                <h2 className="text-center mb-4">Add New Product</h2>

               


                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>   
                    <Form.Control 
                        type="text"    
                        placeholder="Enter product title"  
                        value={title}   // this code binds state to input value
                        onChange={(e) => setTitle(e.target.value)}  // this code updates state on change
                    />
                </Form.Group>

               
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>  
                    <Form.Control 
                        type="number"  
                        placeholder="Enter the product price"    
                        value={price}   
                        onChange={(e) => setPrice(e.target.value)}  
                    />
                </Form.Group>

               
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>   
                    <Form.Control 
                        as="textarea"   
                        rows={3}    
                        placeholder="Enter product description"   
                        value={description}   
                        onChange={(e) => setDescription(e.target.value)}  
                    />
                </Form.Group>

               


                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>  
                    <Form.Control 
                        type="text"  
                        placeholder="Enter the product category"
                        value={category}   
                        onChange={(e) => setCategory(e.target.value)} 
                    />
                </Form.Group>

                {/* this is the Submit button */}
                <Button variant="primary" onClick={handleAddProduct}>

                    Add A Product
                </Button>
            </Form>

        </Container>
    )
}



export default AddProduct
