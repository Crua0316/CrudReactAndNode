import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);

  const { id } = useParams(); // Obtener ID si estamos editando
  const navigate = useNavigate();

  // Cargar categorías para el select
  useEffect(() => {
    axios.get('http://localhost:5000/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error cargando categorías:', error));

    if (id) {
      axios.get(`http://localhost:5000/products/${id}`)
        .then(response => {
          const product = response.data;
          setName(product.name);
          setDescription(product.description);
          setPrice(product.price);
          setCategoryId(product.category_id);
        })
        .catch(error => console.error('Error cargando producto:', error));
    }
  }, [id]);

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = { name, description, price, category_id: categoryId };

    const apiCall = id
      ? axios.put(`http://localhost:5000/products/${id}`, productData)
      : axios.post('http://localhost:5000/products', productData);

    apiCall
      .then(() => navigate('/products'))
      .catch(error => console.error('Error guardando producto:', error));
  };

  return (
    <div>
      <h1>{id ? 'Editar Producto' : 'Crear Producto'}</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Descripción:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Precio:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        
        <label>Categoría:</label>
        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
          <option value="">Seleccione una categoría</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>

        <button type="submit">{id ? 'Actualizar' : 'Crear'}</button>
      </form>
    </div>
  );
};

export default ProductForm;
