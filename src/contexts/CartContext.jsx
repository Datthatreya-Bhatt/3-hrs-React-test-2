import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const proxy = "https://api.allorigins.win/raw?url=";

  let apiUrl = "https://crudcrud.com/api/167b60b0ee684f038ce088da4a981745"; // replace with your CRUDCrud API URL

  apiUrl = proxy + encodeURIComponent(apiUrl);

  useEffect(() => {
    // To load products from CRUDCrud API
    try {
      async function callApi() {
        const res = await axios.get(`${apiUrl}/products`);
        console.log(res.data, 'This is resData')
        setProducts(res.data);

        const savedCart = JSON.parse(localStorage.getItem("cart"));
        if (savedCart) {
          setCart(savedCart);
        }
      }
      callApi();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cart));
  }, [products]);

  const addProduct = async (product) => {
    try {
      setProducts((prevProducts) => [...prevProducts, product]);
      console.log(product, 'in ----------------')
      product = JSON.stringify (product);
      console.log(product)  
      const res = await axios.post(`${apiUrl}/products`, product);
      console.log(res.data, "Response after product save");
    } catch (error) {
      console.log(error);
    }
  };

  const updateCart = (product, size) => {
    console.log(product, size);
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(
      (item) => item.id === product.id && item.size === size
    );

    if (index === -1) {
      updatedCart.push({ ...product, size, quantity: 1 });
    } else {
      updatedCart[index].quantity += 1;
    }

    setCart(updatedCart);
  };

  const emptyCart = () => {
    setCart([]);
    alert("Purchase successful");
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addProduct,
        updateCart,
        emptyCart,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
