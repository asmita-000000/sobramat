// ShoppingCart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({ itemCount }) => {
  const navigate = useNavigate();

  return (
    <div className="relative cursor-pointer" onClick={() => navigate('/carrito')}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-white" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7H19m-6 6v1a2 2 0 01-2 2 2 2 0 002-2v-1m-6 4a2 2 0 104 0 2 2 0 00-4 0z" />
      </svg>
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default ShoppingCart;
