import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardMaterial from './CardMaterial';
import Pagination from './Pagination';
import Filtros from './Filtros';

const ListMaterial = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [filters, setFilters] = useState({
    category: 'Todos',
    state: 'Usado-Buen Estado',
    department: 'Cochabamba',
    priceRange: [0, 1000000],
  });

  const navigate = useNavigate();

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
    <div className="bg-gray-800 text-white p-5">
      {/* Barra de navegación con botones */}
      <div className="flex justify-between items-center p-4 bg-blue-900">
        <div className="flex space-x-4">
          {/* Botón Productos */}
          <button onClick={() => navigate('/productos')} className="text-white">Productos</button>
          
          {/* Botón Contáctanos */}
          <button onClick={() => navigate('/contactanos')} className="text-white">Contáctanos</button>
          
          {/* Botón Publicar Producto */}
          <button onClick={() => navigate('/upload')} className="text-white">Publicar Producto</button>
        </div>
        
        <div className="flex space-x-4">
          {/* Campo de Búsqueda */}
          <input 
            type="text" 
            placeholder="Buscar" 
            className="px-3 py-2 rounded text-black"
          />
          
          {/* Botón Carrito */}
          <button onClick={() => navigate('/carrito')} className="text-white">Carrito</button>
          
          {/* Botón Iniciar sesión */}
          <button onClick={() => navigate('/login')} className="text-white">Iniciar sesión</button>
          
          {/* Botón Registrarse */}
          <button onClick={() => navigate('/register')} className="text-white">Registrarse</button>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex mt-5">
        <Filtros onFilterChange={handleFilterChange} />

        {/* Lista de productos */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Productos</h1>
            
            {/* Botón para registrar un nuevo producto */}
            <button 
              onClick={() => navigate('/upload')}
              className="bg-green-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
            >
              Registrar Producto
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
    </div>
  );
};

export default ListMaterial;
