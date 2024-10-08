import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from '../views/home';
import UploadProduct from './components/uploadProduct';

const App = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadProduct />} />
      </Routes>
    </div>
  );
}

//-----JG
// src/App.js
import React from 'react';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="bg-yellow-300 min-h-screen">
      <header className="bg-yellow-600 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Gestión de Productos</h1>
      </header>

      <div className="container mx-auto">
        <ProductList />
      </div>

      <footer className="bg-black text-white text-center py-4 mt-8">
        Footer
      </footer>
    </div>
  );
}

export default App;




export default App;
