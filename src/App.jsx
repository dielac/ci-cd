// Importing these to link into the page, some were here when i installed the react app page 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Home from './components/Home';
import { Navbar, Container, Nav } from 'react-bootstrap';

// code below holds the whole application
function App() {
    return (
        <>
            <header>
                <h1>Welcome to Our Store!</h1>
                <p>You are in the right place for your All-in-one place products & Lowest deals!!</p>
            </header>

            <Router>
                {/* Navv bar */}
                <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
                    <Container fluid>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                {/* Home Link */}
                                <Nav.Item>
                                    <Nav.Link href="/">Home</Nav.Link>
                                </Nav.Item>

                                {/* takes you to the prod. list*/}
                                <Nav.Item>
                                    <Nav.Link href="/products">Products</Nav.Link>
                                </Nav.Item>

                                {/* the form to make new product */}
                                <Nav.Item>
                                    <Nav.Link href="/add-product">Add Product</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>


                    </Container>
                </Navbar>

                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/add-product" element={<AddProduct />} />
                    <Route path="/edit-product/:id" element={<EditProduct />} />
                </Routes>
            </Router>

            

            <footer className="footer">
                <p>&copy; 2025 Store Inc. All rights reserved..</p>
            </footer>
        </>
    );
}

// Exporting App so it can go into other pages 
export default App;
