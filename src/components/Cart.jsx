import React from "react";
import { useCart } from "../contexts/CartContext";

// import '../App.css';

const Cart = () => {
  const { cart, setShowModal } = useCart();

  return (
    <div className="cart" onClick={() => setShowModal(true)}>
      <button>Cart ({cart.length} items)</button>
    </div>
  );
};

export default Cart;
