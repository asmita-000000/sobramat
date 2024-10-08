// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ title, price, image, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="h-32 w-full object-cover" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-500">{description}</p>
      <p className="text-yellow-600 font-bold">{price}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Editar</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Eliminar</button>
      </div>
    </div>
  );
};

export default ProductCard;