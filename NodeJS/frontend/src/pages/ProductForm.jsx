import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import HomeButton from '../components/HomeButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/categories')
      .then(response => setCategories(response.data))
      .catch(() => toast.error('Error cargando categorías'));

    if (id) {
      axios.get(`http://localhost:5000/products/${id}`)
        .then(response => {
          const product = response.data;
          setName(product.name);
          setDescription(product.description);
          setPrice(product.price);
          setCategoryId(product.category_id);
        })
        .catch(() => toast.error('Error cargando producto'));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { name, description, price, category_id: categoryId };

    const apiCall = id
      ? axios.put(`http://localhost:5000/products/${id}`, productData)
      : axios.post('http://localhost:5000/products', productData);

    apiCall
      .then(() => {
        toast.success(id ? 'Producto actualizado' : 'Producto creado');
        navigate('/products');
      })
      .catch(() => toast.error('Error al guardar el producto'));
  };

  return (
    <div className="container mt-5">
        <HomeButton />
      <h1 className="mb-4">{id ? 'Editar Producto' : 'Crear Producto'}</h1>
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción:</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Precio:</label>
          <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Categoría:</label>
          <select className="form-control" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
            <option value="">Seleccione una categoría</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="d-flex justify-content-center gap-3">
  <button type="submit" className="btn btn-primary">{id ? 'Actualizar' : 'Crear'}</button>
  <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Cancelar</button>
</div>


      </form>
    </div>
  );
};

export default ProductForm;
