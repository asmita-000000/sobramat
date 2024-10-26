import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditarProducto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [producto, setProducto] = useState({
        nombre_producto: '',
        descripcion: '',
        precio: '',
        estado_producto: '',
        categoria_id: '',
        departamento: '',
        imagen_url: '',
        numero_celular: '',
    });
    const [productoOriginal, setProductoOriginal] = useState({});
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [archivoImagen, setArchivoImagen] = useState(null);
    const [vistaPreviaImagen, setVistaPreviaImagen] = useState('');
    const [mostrarModal, setMostrarModal] = useState(false);
    const [enviando, setEnviando] = useState(false);

    const categorias = [
        { id: 1, nombre: 'Cemento' },
        { id: 2, nombre: 'Hormigón' },
        { id: 3, nombre: 'Ladrillos' },
    ];

    const departamentos = ['La Paz', 'Cochabamba', 'Santa Cruz', 'Oruro', 'Potosi', 'Tarija', 'Beni', 'Pando', 'Sucre'];
    const estados = ['Nuevo', 'Usado - como nuevo', 'Usado - buen estado', 'Usado - aceptable'];

    const obtenerProducto = () => {
        // Simulación de un producto para editar
        const productoSimulado = {
            id: id,
            nombre_producto: 'Producto Simulado',
            descripcion: 'Descripción del producto simulado',
            precio: 10000,
            estado_producto: 'Nuevo',
            categoria_id: 1,
            departamento: 'Cochabamba',
            imagen_url: '/images/product1.jpg',
            numero_celular: '123456789',
        };
        
        setProducto(productoSimulado);
        setProductoOriginal(productoSimulado);
        setVistaPreviaImagen(productoSimulado.imagen_url);
        setCargando(false);
    };

    useEffect(() => {
        obtenerProducto();
    }, [id]);

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setProducto((prevProducto) => ({
            ...prevProducto,
            [name]: value,
        }));
    };

    const manejarCambioImagen = (e) => {
        const file = e.target.files[0];
        setArchivoImagen(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setVistaPreviaImagen(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setVistaPreviaImagen(producto.imagen_url);
        }
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        setMostrarModal(true);
    };

    const confirmarActualizacion = () => {
        setEnviando(true); // Comienza el proceso de envío
        // Aquí se simula la actualización del producto
        console.log("Producto actualizado:", producto);

        // Simulación de espera
        setTimeout(() => {
            alert('Producto actualizado con éxito');
            setEnviando(false); // Detiene el envío
            navigate(`/detalles/${id}`);
        }, 1000);
    };

    const cancelarActualizacion = () => {
        setMostrarModal(false);
    };

    const tieneCambios = Object.keys(producto).some((key) => producto[key] !== productoOriginal[key]);

    if (cargando) return <div>Cargando...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="bg-gray-800 text-white p-5">
            <h1 className="text-3xl font-bold text-center mb-4">Editar Producto</h1>
            <form
                onSubmit={manejarEnvio}
                className="max-w-lg mx-auto bg-yellow-400 p-5 rounded-lg shadow-lg"
                encType="multipart/form-data"
            >
                <div className="mb-4">
                    <label className="block mb-2 text-black" htmlFor="nombre_producto">
                        Nombre del Producto <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="nombre_producto"
                        value={producto.nombre_producto}
                        onChange={manejarCambio}
                        className="w-full p-2 rounded bg-white-900 text-gray-500 border border-gray-600"
                        required
                        maxLength="80"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="descripcion">
                        Descripción <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="descripcion"
                        value={producto.descripcion}
                        onChange={manejarCambio}
                        className="w-full p-2 rounded bg-white-900 text-gray-500 border border-gray-600"
                        required
                        maxLength="400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="precio">
                        Precio <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        name="precio"
                        value={producto.precio}
                        onChange={manejarCambio}
                        className="w-full p-2 rounded bg-white-900 text-gray-500 border border-gray-600"
                        required
                        min="0"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="estado_producto">
                        Estado <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="estado_producto"
                        value={producto.estado_producto}
                        onChange={manejarCambio}
                        className="w-full p-2 rounded bg-white-900 text-gray-500 border border-gray-600"
                        required
                    >
                        <option value="">Selecciona un estado</option>
                        {estados.map((estado, index) => (
                            <option key={index} value={estado}>
                                {estado}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="categoria_id">
                        Categoría <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="categoria_id"
                        value={producto.categoria_id}
                        onChange={manejarCambio}
                        className="w-full p-2 rounded bg-white-900 text-gray-500 border border-gray-600"
                        required
                    >
                        <option value="">Selecciona una categoría</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="departamento">
                        Departamento <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="departamento"
                        value={producto.departamento}
                        onChange={manejarCambio}
                        className="w-full p-2 rounded bg-white-900 text-gray-500 border border-gray-600"
                        required
                    >
                        <option value="">Selecciona un departamento</option>
                        {departamentos.map((departamento, index) => (
                            <option key={index} value={departamento}>
                                {departamento}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="numero_celular">
                        Número de celular <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="numero_celular"
                        value={producto.numero_celular}
                        onChange={manejarCambio}
                        className="w-full p-2 rounded bg-white-900 text-gray-500 border border-gray-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-white" htmlFor="imagen_url">
                        Imagen
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={manejarCambioImagen}
                        className="p-2 rounded bg-white-900 text-gray-500 border border-gray-600"
                    />
                    {vistaPreviaImagen && <img src={vistaPreviaImagen} alt="Vista previa" className="mt-2 w-full h-auto" />}
                </div>
                <button
                    type="submit"
                    className={`w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ${!tieneCambios ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!tieneCambios || enviando}
                >
                    {enviando ? 'Actualizando...' : 'Actualizar Producto'}
                </button>
            </form>

            {mostrarModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg text-black">
                        <h2 className="text-xl font-bold mb-4">Confirmar actualización</h2>
                        <p>¿Estás seguro de que deseas actualizar el producto?</p>
                        <div className="flex justify-end mt-4">
                            <button onClick={cancelarActualizacion} className="bg-red-500 text-white py-2 px-4 rounded mr-2">
                                Cancelar
                            </button>
                            <button onClick={confirmarActualizacion} className="bg-green-500 text-white py-2 px-4 rounded">
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditarProducto;
