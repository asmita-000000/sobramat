// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchText); // Llama a la función onSearch con el texto de búsqueda actual
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Buscar"
        value={searchText}
        onChange={handleInputChange}
        className="px-3 py-2 rounded text-black"
      />
      <button onClick={handleSearch} className="ml-2 text-white">
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
