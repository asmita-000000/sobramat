import React from 'react';
import CardMaterial from './cardMaterial';

import { useState } from "react";

const RecuperarContrasena = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleEnviar = (e) => {
    e.preventDefault();
    setModalVisible(true); // Muestra el modal
  };

  const handleCerrarModal = () => {
    setModalVisible(false); // Cierra el modal
  };

  return (
    <div className="bg-gray-800 text-black min-h-screen flex items-center justify-center">
      {/* Contenedor principal */}
      <div className="w-full max-w-sm bg-orange-400 p-6 rounded-lg shadow-md space-y-4">
        {/* Título */}
        <h2 className="text-xl font-bold text-center">Recuperar contraseña</h2>
        <p className="text-sm text-center text-white">
          Ingresa tu correo electrónico para recibir las instrucciones
        </p>

        {/* Formulario */}
        <form className="space-y-4" onSubmit={handleEnviar}>
          {/* Campo de correo */}
          <div>
            <label htmlFor="email" className="sr-only">
              Correo Electrónico
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                📧
              </span>
              <input
                type="email"
                id="email"
                placeholder="Ingrese tu correo electrónico"
                className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700"
                required
              />
            </div>
          </div>

          {/* Botón de enviar */}
          <button
            type="submit"
            className="w-full py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 flex items-center justify-center"
          >
            <span className="mr-2">📨</span> Enviar instrucciones
          </button>

          {/* Botón de cancelar */}
          <button
            type="button"
            onClick={() => console.log("Cancelar")}
            className="w-full py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center justify-center"
          >
            Cancelar
          </button>
        </form>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
            <p className="text-black text-sm">
              Se han enviado las instrucciones a tu correo
            </p>
            <button
              onClick={handleCerrarModal}
              className="px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecuperarContrasena;
