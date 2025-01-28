import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import HomeButton from '../components/HomeButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryForm = () => {
  const [name, setName] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/categories/${id}`)
        .then(response => setName(response.data.name))
        .catch(() => toast.error('Error cargando categoría'));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiCall = id
      ? axios.put(`http://localhost:5000/categories/${id}`, { name })
      : axios.post('http://localhost:5000/categories', { name });

    apiCall
      .then(() => {
        toast.success(id ? 'Categoría actualizada' : 'Categoría creada');
        navigate('/categories');
      })
      .catch(() => toast.error('Error al guardar la categoría'));
  };

  return (
    <div className="container mt-5">
        <HomeButton />
      <h1 className="mb-4">{id ? 'Editar Categoría' : 'Crear Categoría'}</h1>
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="d-flex justify-content-center gap-3">
  <button type="submit" className="btn btn-primary">{id ? 'Actualizar' : 'Crear'}</button>
  <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Cancelar</button>
</div>


      </form>
    </div>
  );
};

export default CategoryForm;
