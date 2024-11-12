import React from "react";
import { useCart } from "../contexts/CartContext";

// import '../App.css';

const Modal = () => {
  const { cart, emptyCart, setShowModal } = useCart();

  const handleBuy = () => {
    emptyCart();
    setShowModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Cart Items</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id + item.size}>
              {item.shoeName} ({item.size}) - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <button onClick={() => setShowModal(false)}>Cancel</button>
        <button onClick={handleBuy}>Buy</button>
      </div>
    </div>
  );
};

export default Modal;
