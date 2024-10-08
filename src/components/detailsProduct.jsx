//import React from 'react';
import PropTypes from 'prop-types';

const DetailsProduct = ({ product }) => {
    const {
    productName,
    price,
    description,
    state,
    category,
    department,
    images,
    locationReference,
  } = product; 

    return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center items-center bg-yellow-400 p-16 rounded-lg shadow-lg max-w-7xl mx-auto mt-50 px-10">
        <div className="border border-gray-100 bg-gray-100/65 rounded-lg w-[600px] h-[600px] mx-auto p-5 mb-30 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Imágenes del producto</h2>
            <div className="flex flex-wrap justify-center">
            {images.map((image, index) => (
                <div key={index} className="relative m-2">
                <img src={image} alt={`Imagen ${index + 1}`} className="w-24 h-24 object-cover rounded-lg" />
            </div>
            ))}
        </div>
        <div className="mt-2 text-center">
            {images.length > 0 ? `${images.length} imagen(es) cargada(s)` : 'No hay imágenes disponibles.'}
        </div>
        </div>
        <div className="md:w-1/2 md:pl-4">
        <h1 className="text-3xl font-bold mb-6 text-center">{productName}</h1>
        <p className="text-lg mb-2"><strong>Precio:</strong> Bs. {price}</p>
        <p className="text-lg mb-2"><strong>Estado:</strong> {state}</p>
        <p className="text-lg mb-2"><strong>Categoría:</strong> {category}</p>
        <p className="text-lg mb-2"><strong>Departamento:</strong> {department}</p>
        <p className="text-lg mb-2"><strong>Número de contacto:</strong> {locationReference}</p>
        <p className="text-lg mb-2"><strong>Descripción:</strong> {description}</p>
        </div>
        </div>
    </div>
    );
  };
    DetailsProduct.propTypes = {
        product: PropTypes.shape({
        productName: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        locationReference: PropTypes.string.isRequired,
        }).isRequired,
    };

export default DetailsProduct;