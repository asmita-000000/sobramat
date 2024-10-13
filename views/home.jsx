import React from 'react';
import ListMaterial from '../src/components/listMaterial';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
        <h1>Welcome to my home page</h1>
        <ListMaterial/> 
        <Link to="/editar-producto">Ir a Editar Producto</Link>
    </div>
  )
}

export default Home;