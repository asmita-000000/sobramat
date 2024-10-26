import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardMaterial = ({ material }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/details/${material.id}`);
    };

    // Ruta de la imagen simulada para trabajar sin backend.
    const imageUrl = material.imagen_url || '/path/to/placeholder-image.jpg';

    const handleImageError = (e) => {
        e.target.src = '/path/to/placeholder-image.jpg'; // Imagen de reserva si falla la carga de imagen
    };

    return (
        <div className="bg-yellow-400 p-4 rounded-lg shadow-lg cursor-pointer" onClick={handleClick}>
            <img
                src={imageUrl}
                alt={material.nombre_producto}
                className="w-full h-32 object-cover rounded-t-lg"
                onError={handleImageError}
            />
            <h3 className="text-xl text-black font-semibold mt-2">{material.nombre_producto}</h3>
            <p className="font-bold text-black">Bs. {material.precio}</p>

            <p className="text-lg mt-2">
                <strong>Estado:</strong> {material.estado_producto}
            </p>
        </div>
    );
};

export default CardMaterial;
