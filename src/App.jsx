import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from '../views/home';
import Header from './components/header'; // Importamos el encabezado
import Cart from './components/cart'; // Importamos el carrito
import Notification from './components/notification'; // Importamos el componente de notificaciones
import { useContext } from 'react';
import { CartContext } from './components/CartContext'; // Importamos el contexto del carrito

const App = () => {
  const location = useLocation(); // Seguimos usando useLocation
  const { notification, clearNotification } = useContext(CartContext); // Acceso a notificaciones desde el contexto

  console.log(location.pathname);

  return (
    <>
      {/* Encabezado visible en todas las rutas */}
      <Header />

      {/* Rutas principales */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} /> {/* Ruta para la página del carrito */}
      </Routes>

      {/* Notificaciones (se muestran si existen) */}
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          clearNotification={clearNotification}
        />
      )}
    </>
  );
};

export default App;
