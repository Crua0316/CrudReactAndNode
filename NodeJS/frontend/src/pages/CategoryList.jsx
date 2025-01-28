import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import HomeButton from '../components/HomeButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios.get('http://localhost:5000/categories')
      .then(response => setCategories(response.data))
      .catch(() => toast.error('Error cargando categorías'));
  };

  const deleteCategory = (id) => {
    if (window.confirm('⚠️ ¿Seguro que deseas eliminar esta categoría?')) {
      axios.delete(`http://localhost:5000/categories/${id}`)
        .then(() => {
          toast.success('Categoría eliminada');
          fetchCategories();
        })
        .catch(() => toast.error('Error eliminando categoría'));
    }
  };

  return (
    <div className="container mt-5">
      <HomeButton />
      <h1 className="mb-4">Lista de Categorías</h1>
      <Link to="/categories/new" className="btn btn-success mb-3">➕ Agregar Categoría</Link>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>
                <Link to={`/categories/edit/${category.id}`} className="btn btn-warning btn-sm me-2">✏️ Editar</Link>
                <button onClick={() => deleteCategory(category.id)} className="btn btn-danger btn-sm">🗑️ Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
