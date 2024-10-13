import './App.css';
import React from 'react';
// src/App.js
import ProductEditor from './components/ProductEditor';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="bg-yellow-300 min-h-screen">
      <header className="bg-yellow-600 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Gestión de Productos</h1>
      </header>

      <div className="container mx-auto p-4">
        <ProductEditor />
        
        <div className="my-6">
          <input
            type="text"
            placeholder="Buscar productos"
            className="w-full p-2 border rounded"
          />
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

