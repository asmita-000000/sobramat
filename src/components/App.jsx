// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import ListMaterial from './ListMaterial';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/productos" element={<ListMaterial />} />
          <Route path="/otra-pagina" element={<OtherPage />} />
          {/* Agrega otras rutas aquí */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
