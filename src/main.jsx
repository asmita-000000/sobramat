import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; // Importa el contexto del carrito

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* Envolvemos todo con el proveedor del contexto */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
);
