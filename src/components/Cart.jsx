import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItems, selectCartCount, selectCartTotal } from '../store/cartSelectors';
import { removeFromCart, clearCart, updateQuantity } from '../store/cartSlice';
import { Container, Table, Button, Form } from 'react-bootstrap';

const Cart = () => {
  const items = useSelector(selectCartItems);
  const totalCount = useSelector(selectCartCount);
  const totalPrice = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <Container className="mt-4">
        <h2>Your Cart is Empty</h2>
        <Link to="/">
          <Button>Go Back to Products</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2>Shopping Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.title} style={{ width: '60px' }} />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td style={{ width: '10%' }}>
                <Form.Control
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: Number(e.target.value),
                      })
                    )
                  }
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  ✕
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center">
        <div>
          <strong>Total Items:</strong> {totalCount}
        </div>
        <div>
          <strong>Total Price:</strong> ${totalPrice}
        </div>

        <Button
          variant="success"
          onClick={() => {
            dispatch(clearCart());
            alert('Checkout successful!! Your cart is now empty');
          }}
        >
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
