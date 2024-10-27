import React from 'react';
import './index.css'; // Ensure Tailwind CSS styles are applied
import CustomNavbar from './CustomNavbar';
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
      {/* Navbar */}
      <CustomNavbar />

      {/* Header */}
      <header className="bg-yellow-600 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Gestión de Productos</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Product Editor */}
        <ProductEditor />

        {/* Search Bar */}
        <div className="my-6 flex items-center">
          <input
            type="text"
            placeholder="Buscar productos"
            className="w-11/12 p-2 border rounded"
          />
          <button className="w-auto ml-2 bg-green-500 text-white p-3 rounded">Buscar</button>
        </div>

        {/* Product List */}
        <ProductList imagesProduct={imagesProduct} />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 mt-8">
        Footer
      </footer>
    </div>
  );
}

export default App;