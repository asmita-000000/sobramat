// src/CustomNavbar.jsx

import React, { useState } from 'react';
import { FaShoppingCart, FaBookmark, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const CustomNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#06333c] px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <a href="#" className="flex items-center space-x-2">
        <img src="logo.png" alt="Logo" className="h-10" /> {/* Replace "logo.png" with the path to your logo */}
      </a>

      {/* Menu Icon for Mobile */}
      <button 
        className="text-white text-2xl md:hidden" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-white px-3 py-1 rounded hover:bg-[#08545b] transition">
          Productos
        </a>
        <a href="#" className="text-white px-3 py-1 rounded hover:bg-[#08545b] transition">
          Contactanos
        </a>
        <a href="#" className="text-white px-3 py-1 rounded hover:bg-[#08545b] transition">
          Publicar Producto
        </a>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center w-1/3 bg-gray-100 rounded-full">
        <input
          type="text"
          placeholder="Buscar"
          className="bg-transparent w-full px-4 py-2 outline-none text-gray-700 rounded-l-full"
        />
        <button className="px-4 text-gray-600">
          <FaSearch />
        </button>
      </div>

      {/* Icons and Buttons - Desktop */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-white text-lg">
          <FaShoppingCart />
        </a>
        <a href="#" className="text-white text-lg">
          <FaBookmark />
        </a>
        <button className="bg-yellow-500 text-gray-800 px-4 py-1 rounded hover:bg-yellow-600 transition">
          Iniciar Sesion
        </button>
        <button className="border border-yellow-500 text-yellow-500 px-4 py-1 rounded hover:bg-yellow-500 hover:text-gray-800 transition">
          Registrarse
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-[#06333c] flex flex-col items-center space-y-4 py-4 md:hidden z-10">
          <a href="#" className="text-white px-3 py-1 rounded hover:bg-[#08545b] transition">
            Productos
          </a>
          <a href="#" className="text-white px-3 py-1 rounded hover:bg-[#08545b] transition">
            Contactanos
          </a>
          <a href="#" className="text-white px-3 py-1 rounded hover:bg-[#08545b] transition">
            Publicar Producto
          </a>
          <div className="flex items-center bg-gray-100 rounded-full w-10/12">
            <input
              type="text"
              placeholder="Buscar"
              className="bg-transparent w-full px-4 py-2 outline-none text-gray-700 rounded-l-full"
            />
            <button className="px-4 text-gray-600">
              <FaSearch />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white text-lg">
              <FaShoppingCart />
            </a>
            <a href="#" className="text-white text-lg">
              <FaBookmark />
            </a>
          </div>
          <button className="bg-yellow-500 text-gray-800 px-4 py-1 rounded hover:bg-yellow-600 transition">
            Iniciar Sesion
          </button>
          <button className="border border-yellow-500 text-yellow-500 px-4 py-1 rounded hover:bg-yellow-500 hover:text-gray-800 transition">
            Registrarse
          </button>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
