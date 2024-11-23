import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, Cart } = useContext(CartContext);
  const isInCart = Cart.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} Bs.</p>
      <button
        style={{ backgroundColor: isInCart dsfs? "black" : "red" }}
        onClick={() => addToCart(product)}
        disabled={isInCart}
      >
        🛒 {isInCart ? "En el carrito" : "Comprar"}
      </button>
    </div>
  );
};

export default ProductCard;
