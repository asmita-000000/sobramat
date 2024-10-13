// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <img src={product.image} alt={product.title} className="h-24 w-full object-cover" />
      <h3 className="text-xl font-bold mt-2">{product.title}</h3>
      <p>{product.description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 text-white py-1 px-3 rounded">Editar</button>
        <button className="bg-red-500 text-white py-1 px-3 rounded">Eliminar</button>
      </div>
    </div>
  );
};

export default ProductCard;
