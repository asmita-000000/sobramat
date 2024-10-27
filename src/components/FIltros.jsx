// Filtros.js
import React, { useState } from 'react';

const Filtros = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: 'Todos',
    state: 'Usado-Buen Estado',
    department: 'Cochabamba',
    priceRange: [0, 1000000],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="bg-orange-500 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">Categoría</h2>
      <select
        name="category"
        value={filters.category}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 rounded"
      >
        <option value="Todos">Todos</option>
        <option value="Cemento">Cemento</option>
        <option value="Hormigón">Hormigón</option>
        <option value="Ladrillos">Ladrillos</option>
        <option value="Madera">Madera</option>
        <option value="Herramientas Eléctricas">Herramientas Eléctricas</option>
        <option value="Herramientas Manuales">Herramientas Manuales</option>
        <option value="Pinturas">Pinturas</option>
        <option value="Azulejos">Azulejos</option>
        <option value="Tuberías">Tuberías</option>
        <option value="Tejas">Tejas</option>
        <option value="Otros">Otros</option>
      </select>

      <h2 className="text-lg font-bold mb-2">Estado</h2>
      <select
        name="state"
        value={filters.state}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 rounded"
      >
        <option value="Nuevo">Nuevo</option>
        <option value="Usado-Como Nuevo">Usado - Como Nuevo</option>
        <option value="Usado-Buen Estado">Usado - Buen Estado</option>
        <option value="Usado-Aceptable">Usado - Aceptable</option>
      </select>

      <h2 className="text-lg font-bold mb-2">Departamento/Ciudad</h2>
      <select
        name="department"
        value={filters.department}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 rounded"
      >
        <option value="La Paz">La Paz</option>
        <option value="Cochabamba">Cochabamba</option>
        <option value="Santa Cruz">Santa Cruz</option>
        <option value="Oruro">Oruro</option>
        <option value="Potosí">Potosí</option>
        <option value="Chuquisaca">Chuquisaca</option>
        <option value="Tarija">Tarija</option>
        <option value="Beni">Beni</option>
        <option value="Pando">Pando</option>
      </select>

      <h2 className="text-lg font-bold mb-2">Rango de Precio</h2>
      <input
        type="range"
        min="0"
        max="1000000"
        name="priceRange"
        value={filters.priceRange[1]}
        onChange={handleInputChange}
        className="w-full"
      />
      <div className="flex justify-between text-sm">
        <span>Bs. 0</span>
        <span>Bs. 1,000,000</span>
      </div>
    </div>
  );
};

export default Filtros;
