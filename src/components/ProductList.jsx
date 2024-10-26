import React, { useState } from 'react';
import Filters from './Filters'; // Asegúrate de importar el componente de filtros
import ProductCard from './ProductCard'; // Asegúrate de importar el componente de tarjeta de producto

const ProductList = () => {
    const [productos, setProductos] = useState(initialProductos);
    const [filters, setFilters] = useState({ category: [], condition: [], priceRange: [0, 100000] });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        // Aquí podrías aplicar los filtros a la lista de productos si lo deseas
    };

    return (
        <div className="flex">
            <div className="w-1/4 p-4"> {/* Ajusta el ancho según sea necesario */}
                <Filters onFilterChange={handleFilterChange} />
            </div>
            <div className="w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {productos.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onEdit={() => {/* Lógica para editar */}}
                        onDelete={() => {/* Lógica para eliminar */}}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
