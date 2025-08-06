import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart(); // or useSelector(selectCartItems)
  const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    // ...
    <a className="nav-link" href="/cart">
      Cart ({count})
    </a>
  );
}
