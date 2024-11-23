import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import Cart from "./cart";
const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header>
      <h1>Tienda</h1>
      <div>
        🛒 Carrito ({Cart.length} productos)
      </div>
    </header>
  );
};

export default Header;
