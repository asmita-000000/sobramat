import { useState } from 'react';
import { Route, Routes , useLocation } from 'react-router-dom';
import './App.css';
import Home from '../views/home';

import EditarProducto from './components/editarProducto';

const  App = () => {

  const location = useLocation();
  console.log(location.pathname);

  return (
     <>
       <Routes>
           <Route path="/"  element={<Home/>}/>
           <Route path="/editar-producto" element={<EditarProducto/>} />
       </Routes>
     </>
  )
}

export default App
