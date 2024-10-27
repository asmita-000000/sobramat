// MainLayout.js
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <div>
    <Navbar />
    <main className="p-5">
      <Outlet /> {/* Esto renderiza el contenido de cada página dentro del layout */}
    </main>
  </div>
);

export default MainLayout;
