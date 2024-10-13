// src/components/ProductEditor.js
import React, { useState } from 'react';

const ProductEditor = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('CEMENTO');
  const [department, setDepartment] = useState('COCHABAMBA');
  const [hasError, setHasError] = useState(false);

  const handleUpdateProduct = () => {
    if (!productName || !price || !description) {
      setHasError(true);
    } else {
      setHasError(false);
      alert('Producto actualizado');
    }
  };

  return (
    <div className="bg-yellow-500 p-6 rounded-md text-black">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Agrega un título que informe lo que es el producto"
            className="w-full p-2 border rounded"
          />
          {hasError && !productName && (
            <p className="text-red-500">* Ingresa el nombre del producto</p>
          )}
        </div>
        <div>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Agrega números para mostrar el precio"
            className="w-full p-2 border rounded"
          />
          {hasError && !price && (
            <p className="text-red-500">* Ingresa el precio del producto</p>
          )}
        </div>
      </div>
      
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Escribe una descripción válida del producto"
        className="w-full p-2 border rounded mt-4"
      />
      {hasError && !description && (
        <p className="text-red-500">* Ingresa una descripción del producto</p>
      )}

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Categoría:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="CEMENTO">CEMENTO</option>
          </select>
        </div>

        <div>
          <label>Departamento:</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="COCHABAMBA">COCHABAMBA</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button className="bg-red-500 text-white p-3 rounded" onClick={() => alert('Actualización cancelada')}>
          Cancelar Actualización
        </button>
        <button className="bg-green-500 text-white p-3 rounded" onClick={handleUpdateProduct}>
          Actualizar Producto
        </button>
      </div>
    </div>
  );
};

export default ProductEditor;
