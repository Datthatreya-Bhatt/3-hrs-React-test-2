import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";

// import '../App.css';

const Header = () => {
  const { addProduct } = useCart();
  const [shoeName, setShoeName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [largeQuantity, setLargeQuantity] = useState(0);
  const [mediumQuantity, setMediumQuantity] = useState(0);
  const [smallQuantity, setSmallQuantity] = useState(0);

  const handleAddProduct = () => {  
    const newProduct = {
      id: Date.now(), // use timestamp as unique id
      shoeName,
      description,
      price: parseFloat(price),
      sizes: {
        large: parseInt(largeQuantity),
        medium: parseInt(mediumQuantity),
        small: parseInt(smallQuantity),
      },
    };

    addProduct(newProduct);
    setShoeName("");
    setDescription("");
    setPrice("");
    setLargeQuantity(0);
    setMediumQuantity(0);
    setSmallQuantity(0);
  };

  return (
    <header>
      <h1>Shoe Store</h1>
      <input
        type="text"
        placeholder="Shoe Name"
        value={shoeName}
        onChange={(e) => setShoeName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />    
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <div>
        <input
          type="number"
          placeholder="Large"
          value={largeQuantity}
          onChange={(e) => setLargeQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Medium"
          value={mediumQuantity}
          onChange={(e) => setMediumQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Small"
          value={smallQuantity}
          onChange={(e) => setSmallQuantity(e.target.value)}
        />
      </div>
      <button onClick={handleAddProduct}>Add Product</button>
    </header>
  );
};

export default Header;
