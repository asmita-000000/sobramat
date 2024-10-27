import React from 'react';
import CardMaterial from './cardMaterialDelet';

const InicioSesion = () => (
  <div className="bg-gray-800 text-white p-5 min-h-screen flex flex-col items-center justify-center">
    <img src="/public/images/arquitectoLogo.png" alt="Logo" className="w-20 h-20 mb-4" />
    <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Inicio de Sesión</h2>

    <div className="w-full max-w-md p-8 space-y-6 bg-yellow-400 rounded-lg shadow-md">
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 mt-1 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="correo@ejemplo.com"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Contraseña</label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 mt-1 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Iniciar Sesión
        </button>

        <div className="flex items-center justify-between mt-4 text-sm">
          <a href="#" className="text-blue-500 hover:underline">¿Olvidaste tu contraseña?</a>
          <a href="#" className="text-blue-500 hover:underline">¿No tienes cuenta?</a>
        </div>
      </form>
    </div>
  </div>
);

export default InicioSesion;