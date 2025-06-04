import React from "react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../store/cartSelectors";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartLink = () => {
  const count = useSelector(selectCartCount);
  return (
    <Nav.Link as={Link} to="/cart">
      Cart ({count})
    </Nav.Link>
  );
};

export default CartLink;
