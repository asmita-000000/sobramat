import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"; // Asegúrate de que se carguen los estilos de Tailwind CSS
import CustomNavbar from "./components/CustomNavbar";
import ProductEditor from "./components/ProductEditor";
import ProductList from "./components/ProductList";
import Wishlist from "./components/Wishlist";
import Home from "../views/home"; // Página de inicio
import UploadProduct from "./components/uploadProduct"; // Funcionalidad para subir productos

function App() {
  const imagesProduct = [
    { id: 1, title: "Cemento Monterrey", description: "Calidad garantizada", image: "/path/to/image.jpg" },
    { id: 2, title: "Cemento Monterrey", description: "Calidad garantizada", image: "/path/to/image.jpg" },
    // Añadir más productos aquí
  ];

  return (
    <Router>
      <div className="bg-gray-800 min-h-screen">
        {/* Navbar personalizado */}
        <CustomNavbar />

        {/* Header principal */}
        <header className="bg-yellow-600 p-4 text-white text-center">
          <h1 className="text-2xl font-bold">Gestión de Productos</h1>
        </header>

        {/* Contenido principal */}
        <main className="container mx-auto p-4">
          {/* Rutas */}
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h2 className="text-xl text-center font-bold mb-4">Bienvenido a la gestión de productos</h2>
                  <Home />
                </div>
              }
            />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route
              path="/upload"
              element={
                <div>
                  <UploadProduct />
                  <ProductEditor />
                </div>
              }
            />
            <Route
              path="/products"
              element={
                <div>
                  <div className="my-6 flex items-center">
                    <input
                      type="text"
                      placeholder="Buscar productos"
                      className="w-11/12 p-2 border rounded"
                    />
                    <button className="w-auto ml-2 bg-green-500 text-white p-3 rounded">Buscar</button>
                  </div>
                  <ProductList imagesProduct={imagesProduct} />
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-black text-white text-center py-4 mt-8">
          <p>© 2024 Mi Tienda Online</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;