import { Route, Routes } from 'react-router-dom';
import Home from '../views/home';
import UploadProduct from './components/uploadProduct';
import DetailsProduct from './components/DetailsProduct';
import EditProduct from './components/EditProduct';
import ListMaterial from './components/listMaterial';
import CategoryFilter from './components/CategoryFilter';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadProduct />} />
        <Route path="/details/:id" element={<DetailsProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/listMaterial" element={<ListMaterial />} />
        <Route path="/Category" element={<CategoryFilter />} />
      </Routes>
    </div>
  );
};

export default App;
