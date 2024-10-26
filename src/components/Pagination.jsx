import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (pageNumber) => {
    onPageChange(pageNumber); // Llama a la función de cambio de página con el número de página seleccionado
  };

  // Genera un array con los números de página a mostrar
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-5">
      {pageNumbers.map((number) => (
        <button 
          key={number} 
          onClick={() => handleClick(number)}
          className={`px-4 py-2 mx-2 ${currentPage === number ? 'bg-yellow-500' : 'bg-gray-500'} text-white rounded`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
