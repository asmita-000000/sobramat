import { useState } from 'react';
import { Route, Routes , useLocation } from 'react-router-dom';
import './App.css';
import Home from '../views/home';
import Register from './components/register';

const  App = () => {

  const location = useLocation();
  console.log(location.pathname);

  return (
     <>
       <Routes>
       
           <Route path="/"  element={<Register/>}/>
                
       </Routes>
     </>
  )
}

export default App
