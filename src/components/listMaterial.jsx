// ListMaterial.js
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import CardMaterial from './CardMaterial';
import Pagination from './Pagination';
import Filtros from './Filtros';

const ListMaterial = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'Todos',
    state: 'Usado-Buen Estado',
    department: 'Cochabamba',
    priceRange: [0, 1000000],
  });

  const fetchProductos = async () => {
    try {
      const response = await fetch('http://localhost:5000/products/');
      if (!response.ok) {
        throw new Error('Error al cargar los productos');
      }
      const data = await response.json();
      setProductos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Aquí puedes agregar lógica para filtrar productos según el query
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productos.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(productos.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-gray-800 text-white">
      <Navbar onSearch={handleSearch} />
      <div className="flex mt-5">
        <Filtros onFilterChange={handleFilterChange} />
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentItems.map((item) => (
              <CardMaterial key={item.id} material={item} />
            ))}
          </div>
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </div>
      </div>
    </div>
  );
};

export default ListMaterial;
