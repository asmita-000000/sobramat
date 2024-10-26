import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [category, setCategory] = useState([]);
  const [condition, setCondition] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 40000]); // Ajusta el valor máximo según sea necesario

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange([0, value]);
    onFilterChange({ category, condition, priceRange: [0, value] });
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    const newCategory = checked ? [...category, value] : category.filter(c => c !== value);
    setCategory(newCategory);
    onFilterChange({ category: newCategory, condition, priceRange });
  };

  const handleConditionChange = (e) => {
    const { value, checked } = e.target;
    const newCondition = checked ? [...condition, value] : condition.filter(c => c !== value);
    setCondition(newCondition);
    onFilterChange({ category, condition: newCondition, priceRange });
  };

  return (
    <div className="bg-orange-600 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Filtro por Categorías</h2>

      <div className="mb-4">
        <h3 className="font-semibold">Categoría</h3>
        <ul>
          <li><input type="checkbox" value="Cemento" onChange={handleCategoryChange} /> Cemento</li>
          <li><input type="checkbox" value="Hormigon" onChange={handleCategoryChange} /> Hormigón</li>
          <li><input type="checkbox" value="Ladrillos" onChange={handleCategoryChange} /> Ladrillos</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Estado</h3>
        <ul>
          <li><input type="checkbox" value="Nuevo" onChange={handleConditionChange} /> Nuevo</li>
          <li><input type="checkbox" value="Usado" onChange={handleConditionChange} /> Usado</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Rango de Precio</h3>
        <div className="flex items-center">
          <span className="mr-2">Bs. 0</span>
          <input 
            type="range" 
            min="0" 
            max="100000" 
            value={priceRange[1]} 
            onChange={handlePriceChange} 
            className="w-full"
          />
          <span className="ml-2">Bs. {priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
