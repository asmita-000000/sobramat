// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard-ddd';

const ProductList = () => {
  const products = [
    { id: 1, title: 'Cemento Monterrey', description: 'Calidad garantizada', image: '/path/to/image.jpg' },
    { id: 2, title: 'Cemento Monterrey', description: 'Calidad garantizada', image: '/path/to/image.jpg' },
    // Añadir más productos aquí
  ];

  return (
    <div className="bg-gray-700 p-6 rounded-md">
      <h2 className="text-white text-2xl mb-4">MIS PRODUCTOS</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
