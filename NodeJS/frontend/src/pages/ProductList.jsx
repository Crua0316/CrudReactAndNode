import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import HomeButton from '../components/HomeButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(() => toast.error('Error cargando productos'));
  };

  const deleteProduct = (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este producto?')) {
      axios.delete(`http://localhost:5000/products/${id}`)
        .then(() => {
          toast.success('Producto eliminado');
          fetchProducts();
        })
        .catch(() => toast.error('Error eliminando producto'));
    }
  };

  return (
    <div className="container mt-5">
      <HomeButton />
      <h1 className="mb-4">Lista de Productos</h1>
      <Link to="/products/new" className="btn btn-success mb-3">➕ Agregar Producto</Link>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.category_name}</td>
              <td>
                <Link to={`/products/edit/${product.id}`} className="btn btn-warning btn-sm me-2">✏️ Editar</Link>
                <button onClick={() => deleteProduct(product.id)} className="btn btn-danger btn-sm">🗑️ Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
