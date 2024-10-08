import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from '../views/home';
import UploadProduct from './components/uploadProduct';
import DetailsProduct from './components/detailsProduct';  // Importar el componente

const App = () => {
  const location = useLocation();
  console.log(location.pathname);

  // Simulación de un producto
  const product = {
    productName: 'Producto Ejemplo',
    price: '500',
    description: 'Este es un producto de ejemplo.',
    state: 'Nuevo',
    category: 'Cemento',
    department: 'Cochabamba',
    images: ['https://via.placeholder.com/150'], // Imagen de ejemplo
    locationReference: '+59112345678',
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadProduct />} />
        <Route path="/details" element={<DetailsProduct product={product} />} /> {/* Pasar el producto */}
      </Routes>
    </div>
  );
}

export default App;
