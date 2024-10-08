// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: 'Cemento Monterrey',
      price: '50 Bs',
      image: '/path/to/image.jpg', // Cambia con la ruta correcta de la imagen
      description: 'Producto de alta calidad',
    },
    // Puedes agregar más productos aquí
  ];

  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;