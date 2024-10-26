import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const UploadProduct = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [state, setState] = useState('');
    const [department, setDepartment] = useState('');
    const [image, setImage] = useState(null);
    const [locationReference, setLocationReference] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const validFormats = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/svg+xml'];
            if (validFormats.includes(file.type)) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImage(reader.result);
                    setErrorMessage('');
                };
                reader.readAsDataURL(file);
            } else {
                setErrorMessage('Formato de imagen no permitido. Por favor sube una imagen válida.');
            }
        }
    };

    const validateForm = () => {
        const missingFields = [];
        if (!productName) missingFields.push('Nombre del producto');
        if (!price) missingFields.push('Precio');
        if (!description) missingFields.push('Descripción');
        if (!state) missingFields.push('Estado');
        if (!category) missingFields.push('Categoría');
        if (!department) missingFields.push('Departamento');
        if (!image) missingFields.push('Imagen');
        if (!/^[67]\d{7}$/.test(locationReference)) {
            missingFields.push('Número de celular (debe tener 8 dígitos y empezar con 6 o 7)');
        }
        return missingFields;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const missingFields = validateForm();

        if (missingFields.length > 0) {
            setErrorMessage(`Por favor, completa los siguientes campos: ${missingFields.join(', ')}`);
            return;
        }

        setShowConfirmation(true);
        setErrorMessage('');
    };

    const confirmPublish = () => {
        // Simular la publicación del producto
        const newProduct = {
            nombre_producto: productName,
            estado_producto: state,
            descripcion: description,
            precio: price,
            categoria: category,
            departamento: department,
            numero_celular: locationReference,
            imagen: image,
        };

        console.log('Producto publicado:', newProduct); // Imprimir el producto en la consola (simular almacenamiento)

        setShowSuccessMessage(true);
        resetForm();
        setShowConfirmation(false);
    };

    const resetForm = () => {
        setProductName('');
        setPrice('');
        setDescription('');
        setCategory('');
        setState('');
        setDepartment('');
        setImage(null);
        setLocationReference('');
    };

    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="relative flex flex-col md:flex-row justify-center items-center bg-yellow-400 p-16 rounded-lg shadow-lg max-w-7xl mx-auto mt-50 px-10">
                <div className="border border-gray-100 bg-gray-100/65 rounded-lg w-[600px] h-[600px] mx-auto p-5 mb-30 flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4">Vista previa de imagen</h2>
                    <div className="flex flex-wrap justify-center">
                        {image && (
                            <div className="relative m-2">
                                <img src={image} alt="Vista previa" className="w-full h-auto object-cover rounded-lg" />
                            </div>
                        )}
                    </div>
                    <div className="mt-2 text-center">
                        {image ? 'Imagen seleccionada' : 'Puedes agregar una imagen.'}
                    </div>
                    <div className="flex flex-col items-center">
                        <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                        <label
                            htmlFor="file-upload"
                            className="cursor-pointer border border-gray-100 bg-gray-100/65 rounded-lg w-full p-10 mb-1 text-gray-700/50 focus:outline-none focus:ring-2 focus:ring-yellow-600 mt-1 text-center"
                        >
                            <div className="flex flex-col items-center">
                                <i className="fa fa-image text-gray-700" style={{ fontSize: '40px' }}></i>
                                {image ? 'Cambiar imagen' : 'Elegir Imagen'}
                            </div>
                        </label>
                    </div>
                </div>

                <div className="md:w-1/2 md:pl-4">
                    <h1 className="text-3xl font-bold mb-6 text-center">Producto en venta</h1>
                    {errorMessage && (
                        <div className="text-red-500 mb-4">{errorMessage}</div>
                    )}
                    <div className="flex items-center mb-3">
                        <div className="relative mr-4">
                            <input
                                type="text"
                                maxLength={80}
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="border border-gray-300 rounded-lg w-80 p-1 pr-12 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                placeholder="Nombre del producto*"
                                required
                            />
                            <span className="absolute right-3 top-2 text-gray-500 text-sm">
                                {productName.length}/80
                            </span>
                        </div>

                        <select
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="border bg-gray-200/80 rounded-lg w-50 w-full p-1 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            required
                        >
                            <option value="">Seleccionar estado*</option>
                            <option value="nuevo">Nuevo</option>
                            <option value="usado - como nuevo">Usado - Como nuevo</option>
                            <option value="usado - buen estado">Usado - Buen estado</option>
                            <option value="usado - aceptable">Usado - Aceptable</option>
                        </select>
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-lg w-full p-3 mb-4 focus-within:ring-2 focus-within:ring-yellow-600 bg-white">
                        <span className="text-gray-500 mr-2">Bs.</span>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => {
                                const value = e.target.value;

                                if (/^\d*\.?\d*$/.test(value) && value.length <= 7) {
                                    setPrice(value);
                                }
                            }}
                            className="flex-1 border-none focus:outline-none"
                            placeholder="Ingrese el precio*"
                            required
                        />
                    </div>

                    <textarea
                        value={description}
                        maxLength={400}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        placeholder="Descripción del producto*"
                        required
                        rows={5}
                        style={{ resize: 'none', height: '150px' }}
                    ></textarea>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        required
                    >
                        <option value="">Seleccionar categoría*</option>
                        <option value="1">Electrónica</option>
                        <option value="2">Muebles</option>
                        <option value="3">Ropa</option>
                    </select>

                    <input
                        type="text"
                        value={locationReference}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value) || value === '') {
                                setLocationReference(value);
                            }
                        }}
                        placeholder="Número de celular*"
                        className="border border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        required
                    />

                    <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="border border-gray-300 rounded-lg w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                        required
                    >
                        <option value="">Seleccionar departamento*</option>
                        <option value="Lima">Lima</option>
                        <option value="Arequipa">Arequipa</option>
                        <option value="Cuzco">Cuzco</option>
                    </select>

                    <button
                        type="submit"
                        className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 w-full"
                    >
                        Publicar producto
                    </button>
                </div>
            </form>

            {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">Confirmación de publicación</h2>
                        <p>¿Está seguro de que desea publicar este producto?</p>
                        <div className="flex justify-between mt-4">
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
                                onClick={() => setShowConfirmation(false)}
                            >
                                Cancelar
                            </button>
                            <button
                                className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
                                onClick={confirmPublish}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showSuccessMessage && (
                <div className="fixed inset-0 flex items-center justify-center bg-green-500 bg-opacity-80">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">¡Éxito!</h2>
                        <p>Tu producto ha sido publicado con éxito.</p>
                        <button
                            className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={() => navigate('/')}
                        >
                            Volver a la página principal
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadProduct;
