// src/components/ProductEditor.js
import React, { useState } from 'react';

const ProductEditor = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [phoneNumber, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('CEMENTO');
  const [department, setDepartment] = useState('COCHABAMBA');
  const [hasError, setHasError] = useState(false);

  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const totalImages = files.length + images.length;

    if (images.length >= 10) {
    alert('Ya has alcanzado el límite de 10 imágenes.');
        return;
    }

    if (totalImages > 10) {
        const remainingSlots = 10 - images.length;
        alert(`Puedes subir un máximo de 10 imágenes. Solo se tomarán las primeras ${remainingSlots} imágenes nuevas.`);
        const limitedFiles = files.slice(0, remainingSlots);
        const imageURLs = limitedFiles.map(file => URL.createObjectURL(file));
        setImages(prevImages => prevImages.concat(imageURLs));
    } else {
        const imageURLs = files.map(file => URL.createObjectURL(file));
        setImages(prevImages => prevImages.concat(imageURLs));
    }
  };

  const handleUpdateProduct = () => {
    if (!productName || !price || !description) {
      setHasError(true);
    } else {
      setHasError(false);
      alert('Producto actualizado');
    }
  };

  return (
    <div className="bg-yellow-400 p-6 rounded-md text-black">
      
        <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-100 bg-gray-100/65 rounded-lg gap-4 mb-30 flex flex-col items-center">
                        <h2 className="text-2xl font-bold mb-4">Vista previa de imágenes</h2>
                        <div className="flex flex-wrap justify-center">
                            {images.map((image, index) => (
                                <div key={index} className="relative m-2">
                                    <img src={image} alt={`Vista previa ${index + 1}`} className="w-24 h-24 object-cover rounded-lg" />
                                    <button
                                        onClick={() => removeImage(index)}
                                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                        type="button"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-2 text-center">
                            {images.length > 0 ? `${images.length} archivo(s) seleccionado(s)` : ' Puedes agregar un máximo de 10 fotos.'}
                        </div>

                        <div className="flex flex-col items-center">
                        <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                                className="hidden"
                                disabled={images.length >= 10}
                            />
                            <label
                                htmlFor="file-upload"
                                className={`cursor-pointer border border-gray-100 bg-gray-100/65 rounded-lg w-full p-10 mb-1 m-300 text-gray-700/50 focus:outline-none focus:ring-2 focus:ring-yellow-600 mt-1 text-center ${images.length >= 10 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {images.length >= 10 ? 'Límite de 10 imágenes alcanzado' : 'Elegir archivo'}
                            </label>
                        </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="Nombre del producto"
                        className="w-full p-2 border rounded"
                    />
                    {hasError && !productName && (
                        <p className="text-red-500">* Ingresa el nombre del producto</p>
                    )}
                </div>
                <div>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Bs. Ingrese el precio"
                        className="w-full p-2 border rounded"
                    />
                    {hasError && !price && (
                        <p className="text-red-500">* Ingresa el precio del producto</p>
                    )}
                </div>
                <div>
                    <input
                        type="number"
                        value={phoneNumber}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Número de celular"
                        className="w-full p-2 border rounded"
                    />
                    {hasError && !price && (
                        <p className="text-red-500">* Ingresa su número de celular</p>
                    )}
                </div>

                <div className='col-span-3'>
                    <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descripción del producto"
                    className="w-full p-2 border rounded h-[600px]"
                    />
                    {hasError && !description && (
                        <p className="text-red-500">* Ingresa una descripción del producto</p>
                    )}
                </div>

                <div className='col-span-3'>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label>Categoría:</label>
                            <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 border rounded"
                            >
                            <option value="CEMENTO">CEMENTO</option>
                            </select>
                        </div>

                        <div>
                            <label>Departamento:</label>
                            <select
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="w-full p-2 border rounded"
                            >
                            <option value="COCHABAMBA">COCHABAMBA</option>
                            <option value="PANDO">PANDO</option>
                            <option value="BENI">BENI</option>
                            <option value="SANTA CRUZ">SANTA CRUZ</option>
                            <option value="TARIJA">TARIJA</option>
                            <option value="CHUQUISACA">CHUQUISACA</option>
                            <option value="ORURO">ORURO</option>
                            <option value="POTOSÍ">POTOSÍ</option>
                            <option value="LA PAZ">LA PAZ</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <div className='grid grid-cols-2 gap-4'>
                        <button className="bg-red-500 text-white p-3 rounded" onClick={() => alert('Actualización cancelada')}>
                            Cancelar Actualización
                        </button>
                        <button className="bg-green-500 text-white p-3 rounded" onClick={handleUpdateProduct}>
                            Actualizar Producto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductEditor;
