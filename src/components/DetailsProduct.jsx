import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from './Modal'; 

// Datos simulados de productos
const productos = [
    { id: 1, nombre_producto: "Producto 1", precio: 20000, estado_producto: "Nuevo", categoria: "Cemento", departamento: "Construcción", descripcion: "Descripción del producto 1", numero_celular: "123456789", imagen_url: "/images/product1.jpg" },
    { id: 2, nombre_producto: "Producto 2", precio: 15000, estado_producto: "Usado", categoria: "Hormigón", departamento: "Construcción", descripcion: "Descripción del producto 2", numero_celular: "987654321", imagen_url: "/images/product2.jpg" },
    { id: 3, nombre_producto: "Producto 3", precio: 25000, estado_producto: "Nuevo", categoria: "Cemento", departamento: "Construcción", descripcion: "Descripción del producto 3", numero_celular: "456789123", imagen_url: "/images/product3.jpg" },
    { id: 4, nombre_producto: "Producto 4", precio: 30000, estado_producto: "Nuevo", categoria: "Hormigón", departamento: "Construcción", descripcion: "Descripción del producto 4", numero_celular: "321654987", imagen_url: "/images/product4.jpg" },
    { id: 5, nombre_producto: "Producto 5", precio: 18000, estado_producto: "Usado", categoria: "Grava", departamento: "Construcción", descripcion: "Descripción del producto 5", numero_celular: "654321789", imagen_url: "/images/product5.jpg" },
    { id: 6, nombre_producto: "Producto 6", precio: 28000, estado_producto: "Nuevo", categoria: "Cemento", departamento: "Construcción", descripcion: "Descripción del producto 6", numero_celular: "789123456", imagen_url: "/images/product6.jpg" },
    { id: 7, nombre_producto: "Producto 7", precio: 23000, estado_producto: "Usado", categoria: "Hormigón", departamento: "Construcción", descripcion: "Descripción del producto 7", numero_celular: "123789456", imagen_url: "/images/product7.jpg" },
    { id: 8, nombre_producto: "Producto 8", precio: 32000, estado_producto: "Nuevo", categoria: "Cemento", departamento: "Construcción", descripcion: "Descripción del producto 8", numero_celular: "456123789", imagen_url: "/images/product8.jpg" },
    { id: 9, nombre_producto: "Producto 9", precio: 30000, estado_producto: "Nuevo", categoria: "Grava", departamento: "Construcción", descripcion: "Descripción del producto 9", numero_celular: "789654123", imagen_url: "/images/product9.jpg" },
    { id: 10, nombre_producto: "Producto 10", precio: 27000, estado_producto: "Usado", categoria: "Hormigón", departamento: "Construcción", descripcion: "Descripción del producto 10", numero_celular: "321789654", imagen_url: "/images/product10.jpg" },
    { id: 11, nombre_producto: "Producto 11", precio: 35000, estado_producto: "Nuevo", categoria: "Cemento", departamento: "Construcción", descripcion: "Descripción del producto 11", numero_celular: "654987321", imagen_url: "/images/product11.jpg" },
    { id: 12, nombre_producto: "Producto 12", precio: 40000, estado_producto: "Nuevo", categoria: "Hormigón", departamento: "Construcción", descripcion: "Descripción del producto 12", numero_celular: "987123654", imagen_url: "/images/product12.jpg" },
    { id: 13, nombre_producto: "Producto 13", precio: 22000, estado_producto: "Usado", categoria: "Grava", departamento: "Construcción", descripcion: "Descripción del producto 13", numero_celular: "456789321", imagen_url: "/images/product13.jpg" },
    { id: 14, nombre_producto: "Producto 14", precio: 37000, estado_producto: "Nuevo", categoria: "Cemento", departamento: "Construcción", descripcion: "Descripción del producto 14", numero_celular: "123654789", imagen_url: "/images/product14.jpg" },
    { id: 15, nombre_producto: "Producto 15", precio: 34000, estado_producto: "Usado", categoria: "Hormigón", departamento: "Construcción", descripcion: "Descripción del producto 15", numero_celular: "321456789", imagen_url: "/images/product15.jpg" },
];


const DetailsProduct = () => {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [isModalOpen, setIsModalOpen] = useState(false); 

    // Simula la carga de un producto
    useEffect(() => {
        const foundProduct = productos.find(prod => prod.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            setError("Producto no encontrado");
        }
        setLoading(false); 
    }, [id]);

    const handleDelete = () => {
        // Lógica de eliminación, aquí simplemente navegamos hacia atrás
        navigate('/listMaterial'); 
    };

    if (loading) return <div>Cargando...</div>; 
    if (error) return <div className="text-red-500">{error}</div>; 

    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center">
            <div className="flex flex-col md:flex-row justify-center items-center bg-yellow-400 p-16 rounded-lg shadow-lg max-w-7xl mx-auto mt-50 px-10">
                <div className="border border-gray-100 bg-gray-100/65 rounded-lg w-[600px] h-[600px] mx-auto p-5 mb-30 flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4">Imagen del producto</h2>
                    <div className="flex flex-wrap justify-center">
                        {product.imagen_url ? (
                            <img src={product.imagen_url} alt="Imagen del producto" className="w-full h-auto max-w-full max-h-[400px] object-cover rounded-lg" />
                        ) : (
                            <p>No hay imágenes disponibles.</p>
                        )}
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-4">
                    <h1 className="text-3xl font-bold mb-6 text-center">{product.nombre_producto}</h1>
                    <p className="text-lg mb-2"><strong>Precio:</strong> Bs. {product.precio}</p>
                    <p className="text-lg mb-2"><strong>Estado:</strong> {product.estado_producto}</p>
                    <p className="text-lg mb-2"><strong>Categoría:</strong> {product.categoria}</p>
                    <p className="text-lg mb-2"><strong>Departamento:</strong> {product.departamento}</p>
                    <p className="text-lg mb-2"><strong>Descripción:</strong> {product.descripcion}</p>
                    <p className="text-lg mb-2"><strong>Celular:</strong> {product.numero_celular}</p>
                    <div className="flex justify-center mt-4">
                        <button className="w-full bg-green-500 text-white py-2 px-4 rounded mr-2" onClick={() => navigate(`/edit/${id}`)}>Editar</button>
                    </div>
                    <div className="flex justify-center mt-4">      
                        <button
                            className="w-full bg-red-500 text-white py-2 px-4 rounded"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Eliminar
                        </button>
                    </div> 
                    <div className="flex justify-center mt-4">
                        <button 
                            className="w-full bg-gray-500 text-white py-2 px-4 rounded"
                            onClick={() => navigate('/listMaterial')} 
                        >
                            Atrás
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)} 
                onConfirm={handleDelete} 
            />
        </div>
    );
};

export default DetailsProduct;
