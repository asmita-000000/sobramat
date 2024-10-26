import React from 'react';

const ProductCard = ({ product, onEdit, onDelete }) => {
    return (
        <div className="border rounded-lg p-4 shadow-lg bg-white">
            <h3 className="font-bold">{product.name}</h3> {/* Cambié productName a name */}
            <p>Precio: Bs. {product.price}</p>
            <p>Estado: {product.condition}</p> {/* Cambié description a condition */}
            <p>Categoría: {product.category}</p>
            {/* Puedes agregar más detalles aquí según la estructura de tu objeto de producto */}
            <div className="mt-4">
                <button onClick={() => onEdit(product.id)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                    Editar
                </button>
                <button onClick={() => onDelete(product.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                    Eliminar
                </button>
                <button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">
                    Ver
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
