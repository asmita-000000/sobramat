import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  const addToCart = (product) => {
    if (Cart.some((item) => item.id === product.id)) {
      setNotification({ type: "error", message: "El producto ya está en el carrito" });
      return;
    }
    setCart([...Cart, { ...product, quantity: 1 }]);
    setNotification({ type: "success", message: "Producto agregado correctamente al carrito" });
  };

  const removeFromCart = (productId) => {
    setCart(Cart.filter((item) => item.id !== productId));
    setNotification({ type: "error", message: "Producto quitado del carrito" });
  };

  const clearNotification = () => setNotification(null);

  return (
    <CartContext.Provider value={{ Cart, addToCart, removeFromCart, Notification, clearNotification }}>
      {children}
    </CartContext.Provider>
  );
};
