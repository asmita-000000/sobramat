// src/components/EditarProducto.jsx
import React, { useState } from 'react';

const EditarProducto = () => {
  const [formData, setFormData] = useState({
    nombre: 'Ladrillos de 6 huecos',
    precio: 'Bs. 2000',
    descripcion: 'tengo 3000 ladrillos de marca Incerpaz...',
    categoria: 'Ladrillos',
    ubicacion: 'Cochabamba',
    telefono: '+591 68342983',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Datos actualizados:', formData);
  };

  const handleCancel = () => {
   
    console.log('Actualización cancelada');
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-yellow-400">
       
            <h2 className="text-center text-2xl mb-4">Editar Producto</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                <label className="block text-sm">Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full p-2 rounded border"
                />
                </div>
                <div className="mb-2">
                <label className="block text-sm">Precio:</label>
                <input
                    type="text"
                    name="precio"
                    value={formData.precio}
                    onChange={handleChange}
                    className="w-full p-2 rounded border"
                />
                </div>
                <div className="mb-2">
                <label className="block text-sm">Descripción:</label>
                <textarea
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    className="w-full p-2 rounded border"
                />
                </div>
                <div className="mb-2">
                <label className="block text-sm">Categoría:</label>
                <input
                    type="text"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    className="w-full p-2 rounded border"
                />
                </div>
                <div className="mb-2">
                <label className="block text-sm">Ubicación:</label>
                <input
                    type="text"
                    name="ubicacion"
                    value={formData.ubicacion}
                    onChange={handleChange}
                    className="w-full p-2 rounded border"
                />
                </div>
                <div className="mb-2">
                <label className="block text-sm">Teléfono:</label>
                <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full p-2 rounded border"
                />
                </div>
                <div className="flex justify-between mt-4">
                <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Cancelar Actualización
                </button>
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Actualizar Producto
                </button>
                </div>
            </form>
            <div className="mt-4">
                <h3 className="text-lg">Comentarios de producto:</h3>
                <div className="bg-white p-2 rounded mt-2">
                <p>Buen producto, gracias por su buena atención.</p>
                </div>
                <div className="bg-white p-2 rounded mt-2">
                <p>Buen vendedor, gracias por su buena atención.</p>
                </div>
            </div>
           
    </div>
  );
};

export default EditarProducto;
