import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";

const Cart = () => {
  const { Cart, removeFromCart } = useContext(CartContext);

  const total = Cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="Cart-page">
      <h2>Carrito</h2>
      {Cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {Cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price} Bs.
                <button onClick={() => removeFromCart(item.id)}>❌ Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Total a pagar: {total} Bs.</p>
        </>
      )}
    </div>
  );
};

export default Cart;
