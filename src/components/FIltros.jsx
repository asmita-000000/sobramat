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
    <div className="bg-orange-500 p-4">
      <h2 className="text-lg font-bold">Categoría</h2>
      <select name="category" value={filters.category} onChange={handleInputChange}>
        <option value="Todos">Todos</option>
        <option value="Cemento">Cemento</option>
        <option value="Hormigón">Hormigón</option>
        <option value="Ladrillos">Ladrillos</option>
        
      </select>

      <h2 className="text-lg font-bold mt-4">Estado</h2>
      <select name="state" value={filters.state} onChange={handleInputChange}>
        <option value="Nuevo">Nuevo</option>
        <option value="Usado-Buen Estado">Usado - Buen Estado</option>
        <option value="Usado-Aceptable">Usado - Aceptable</option>
      </select>

      <h2 className="text-lg font-bold mt-4">Departamento/Ciudad</h2>
      <select name="department" value={filters.department} onChange={handleInputChange}>
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

      <h2 className="text-lg font-bold mt-4">Rango de Precio</h2>
      <input 
        type="range" 
        min="0" 
        max="1000000" 
        name="priceRange"
        value={filters.priceRange[1]}
        onChange={handleInputChange} 
      />
    </div>
  );
};

export default Filtros;
