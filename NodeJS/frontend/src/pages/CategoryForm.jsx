import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CategoryForm = () => {
  const [name, setName] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/categories/${id}`)
        .then(response => setName(response.data.name))
        .catch(error => console.error('Error cargando categoría:', error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiCall = id
      ? axios.put(`http://localhost:5000/categories/${id}`, { name })
      : axios.post('http://localhost:5000/categories', { name });

    apiCall
      .then(() => navigate('/categories'))
      .catch(error => console.error('Error guardando categoría:', error));
  };

  return (
    <div>
      <h1>{id ? 'Editar Categoría' : 'Crear Categoría'}</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <button type="submit">{id ? 'Actualizar' : 'Crear'}</button>
      </form>
    </div>
  );
};

export default CategoryForm;
