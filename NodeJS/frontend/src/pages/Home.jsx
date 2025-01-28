import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Gestión de Productos y Categorías</h1>
      <p>Selecciona una opción:</p>

      <div className="d-flex justify-content-center gap-3">
        <Link to="/products" className="btn btn-primary">📦 Ver Productos</Link>
        <Link to="/products/new" className="btn btn-success">➕ Agregar Producto</Link>
        <Link to="/categories" className="btn btn-secondary">📂 Ver Categorías</Link>
        <Link to="/categories/new" className="btn btn-warning">➕ Agregar Categoría</Link>
      </div>
    </div>
  );
};

export default Home;
