import React, { useState } from 'react';
import CardMaterial from './CardMaterial';
import Filters from './Filters';
import Pagination from './Pagination';

const ListMaterial = () => {
  // Lista de productos simulada
  const initialProductos = [
    { id: 1, name: "Producto 1", category: "Cemento", condition: "Nuevo", price: 20000, imageUrl: "https://example.com/images/producto1.jpg" },
    { id: 2, name: "Producto 2", category: "Hormigón", condition: "Usado", price: 15000, imageUrl: "https://example.com/images/producto2.jpg" },
    { id: 3, name: "Producto 3", category: "Cemento", condition: "Nuevo", price: 25000, imageUrl: "https://example.com/images/producto3.jpg" },
    { id: 4, name: "Producto 4", category: "Hormigón", condition: "Nuevo", price: 30000, imageUrl: "https://example.com/images/producto4.jpg" },
    { id: 5, name: "Producto 5", category: "Grava", condition: "Usado", price: 18000, imageUrl: "https://example.com/images/producto5.jpg" },
    { id: 6, name: "Producto 6", category: "Cemento", condition: "Nuevo", price: 28000, imageUrl: "https://example.com/images/producto6.jpg" },
    { id: 7, name: "Producto 7", category: "Hormigón", condition: "Usado", price: 23000, imageUrl: "https://example.com/images/producto7.jpg" },
    { id: 8, name: "Producto 8", category: "Cemento", condition: "Nuevo", price: 32000, imageUrl: "https://example.com/images/producto8.jpg" },
    { id: 9, name: "Producto 9", category: "Grava", condition: "Nuevo", price: 30000, imageUrl: "https://example.com/images/producto9.jpg" },
    { id: 10, name: "Producto 10", category: "Hormigón", condition: "Usado", price: 27000, imageUrl: "https://example.com/images/producto10.jpg" },
    { id: 11, name: "Producto 11", category: "Cemento", condition: "Nuevo", price: 35000, imageUrl: "https://example.com/images/producto11.jpg" },
    { id: 12, name: "Producto 12", category: "Hormigón", condition: "Nuevo", price: 40000, imageUrl: "https://example.com/images/producto12.jpg" },
    { id: 13, name: "Producto 13", category: "Grava", condition: "Usado", price: 22000, imageUrl: "https://example.com/images/producto13.jpg" },
    { id: 14, name: "Producto 14", category: "Cemento", condition: "Nuevo", price: 37000, imageUrl: "https://example.com/images/producto14.jpg" },
    { id: 15, name: "Producto 15", category: "Hormigón", condition: "Usado", price: 34000, imageUrl: "https://example.com/images/producto15.jpg" },
    { id: 16, name: "Producto 16", category: "Cemento", condition: "Nuevo", price: 45000, imageUrl: "https://example.com/images/producto16.jpg" },
    { id: 17, name: "Producto 17", category: "Hormigón", condition: "Usado", price: 48000, imageUrl: "https://example.com/images/producto17.jpg" },
    { id: 18, name: "Producto 18", category: "Cemento", condition: "Nuevo", price: 52000, imageUrl: "https://example.com/images/producto18.jpg" },
    { id: 19, name: "Producto 19", category: "Hormigón", condition: "Nuevo", price: 55000, imageUrl: "https://example.com/images/producto19.jpg" },
    { id: 20, name: "Producto 20", category: "Grava", condition: "Usado", price: 46000, imageUrl: "https://example.com/images/producto20.jpg" },
];



  const [filteredProductos, setFilteredProductos] = useState(initialProductos);
  const [filters, setFilters] = useState({
    category: [],
    condition: [],
    priceRange: [0, 100000],
  });

  // Estado de paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filtrar productos en función de los filtros seleccionados
  const applyFilters = () => {
    const filtered = initialProductos.filter((product) => {
      const matchesCategory = filters.category.length === 0 || filters.category.includes(product.category);
      const matchesCondition = filters.condition.length === 0 || filters.condition.includes(product.condition);
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      return matchesCategory && matchesCondition && matchesPrice;
    });
    setFilteredProductos(filtered);
    setCurrentPage(1); // Resetear a la primera página tras el filtrado
  };

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calcular productos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProductos.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProductos.length / itemsPerPage);

  return (
    <div className="bg-gray-800 text-white p-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">MIS PRODUCTOS</h1>

        {/* Componente de Filtros */}
        <Filters onFilterChange={handleFilterChange} />

        {/* Productos Filtrados y Paginación */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {currentItems.map((item) => (
            <CardMaterial key={item.id} material={item} />
          ))}
        </div>

        {/* Componente de Paginación */}
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      </div>
    </div>
  );
};

export default ListMaterial;
