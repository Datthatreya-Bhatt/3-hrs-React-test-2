import React from "react";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

// import './App.css';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Body />
        <Cart />
        <Modal />
      </div>
    </CartProvider>
  );
};

export default App;
