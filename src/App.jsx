// src/App.js
import React from 'react';
import ProductEditor from './components/ProductEditor';
import ProductList from './components/ProductList';

function App() {
  const imagesProduct = [
    { id: 1, title: 'Cemento Monterrey', description: 'Calidad garantizada', image: '/path/to/image.jpg' },
    { id: 2, title: 'Cemento Monterrey', description: 'Calidad garantizada', image: '/path/to/image.jpg' },
    // Añadir más productos aquí
  ];

  return (
    <div className="bg-gray-800 min-h-screen">
      <header className="bg-yellow-600 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Gestión de Productos</h1>
      </header>

      <div className="container mx-auto p-4">
        <ProductEditor />
        
        <div className="my-6 grid-cols-2">
          <input
            type="text"
            placeholder="Buscar productos"
            className="w-11/12 p-2 border rounded"
          />
          <button className="w-auto ml-2 bg-green-500 text-white p-3 rounded">Buscar</button>
        </div>
        
        <ProductList />
      </div>

      <footer className="bg-black text-white text-center py-4 mt-8">
        Footer
      </footer>
    </div>
  );
}

export default App;