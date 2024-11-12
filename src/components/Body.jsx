import React from "react";
import { useCart } from "../contexts/CartContext";

// import '../App.css'; 

const Body = () => {
  const { products, updateCart } = useCart();

  const handleAddToCart = (product, size) => {
    if (product.sizes[size] > 0) {
      updateCart(product, size);
      product.sizes[size] -= 1; // Deduct quantity from product
    }
  };

  return (
    <main>
      <h2>Available Shoes</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.shoeName}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <div>
              {["large", "medium", "small"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleAddToCart(product, size)}
                  disabled={product.sizes[size] === 0}
                >
                  {size} ({product.sizes[size]} available)
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Body;
