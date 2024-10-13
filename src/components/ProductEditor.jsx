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
      <div className="grid grid-cols-3 gap-4">
        <div>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Nombre del producto"
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
            placeholder="Bs. Ingrese el precio"
            className="w-full p-2 border rounded"
          />
          {hasError && !price && (
            <p className="text-red-500">* Ingresa el precio del producto</p>
          )}
        </div>
        <div>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Número de celular"
            className="w-full p-2 border rounded"
          />
          {hasError && !price && (
            <p className="text-red-500">* Ingresa su número de celular</p>
          )}
        </div>
      </div>

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción del producto"
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
            <option value="PANDO">PANDO</option>
            <option value="BENI">BENI</option>
            <option value="SANTA CRUZ">SANTA CRUZ</option>
            <option value="TARIJA">TARIJA</option>
            <option value="CHUQUISACA">CHUQUISACA</option>
            <option value="ORURO">ORURO</option>
            <option value="POTOSÍ">POTOSÍ</option>
            <option value="LA PAZ">LA PAZ</option>
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
