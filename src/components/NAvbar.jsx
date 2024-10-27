// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import ShoppingCart from './ShoppingCart';

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [cartItemCount] = React.useState(0); // Puedes obtener el número de artículos del carrito desde un estado global o contexto

  return (
    <div className="flex justify-between items-center p-4 bg-blue-900 text-white">
      <div className="flex space-x-4">
        <button onClick={() => navigate('/productos')} className="text-white">Productos</button>
        <button onClick={() => navigate('/contactanos')} className="text-white">Contáctanos</button>
        <button onClick={() => navigate('/upload')} className="text-white">Publicar Producto</button>
      </div>
      <div className="flex space-x-4 items-center">
        <SearchBar onSearch={onSearch} />
        <ShoppingCart itemCount={cartItemCount} />
        <button onClick={() => navigate('/login')} className="text-white">Iniciar sesión</button>
        <button onClick={() => navigate('/register')} className="text-white">Registrarse</button>
      </div>
    </div>
  );
};

export default Navbar;
