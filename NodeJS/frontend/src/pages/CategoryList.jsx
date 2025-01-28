import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios.get('http://localhost:5000/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error cargando categorías:', error));
  };

  const deleteCategory = (id) => {
    if (window.confirm('⚠️ ¿Estás seguro de que deseas eliminar esta categoría?')) {
      axios.delete(`http://localhost:5000/categories/${id}`)
        .then(() => fetchCategories()) // Recargar lista después de eliminar
        .catch(error => console.error('Error eliminando categoría:', error));
    }
  };

  return (
    <div>
      <h1>Lista de Categorías</h1>
      <Link to="/categories/new">➕ Agregar Categoría</Link>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.name}
            <Link to={`/categories/edit/${category.id}`} style={{ marginLeft: '10px' }}>✏️ Editar</Link>
            <button onClick={() => deleteCategory(category.id)} style={{ marginLeft: '10px', color: 'red' }}>🗑️ Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
