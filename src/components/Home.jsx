
import React from 'react'    
import { Container } from 'react-bootstrap'    // Importing Bootstrap container for layout


const Home = () => {
    // Renders home page content
    return (
        // this container center the content
        <Container className="text-center mt-5">
           
            <h2>Welcome to Our Store!</h2>

            
            <p>We have it all! Welcome & we hope you enjoy the huge variety of products we have, just for you!</p>
        </Container>
    )
}


export default Home
