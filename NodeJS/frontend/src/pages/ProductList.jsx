import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error cargando productos:', error));
  };

  const deleteProduct = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      axios.delete(`http://localhost:5000/products/${id}`)
        .then(() => fetchProducts()) // Recargar la lista después de eliminar
        .catch(error => console.error('Error eliminando producto:', error));
    }
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <Link to="/products/new">➕ Agregar Producto</Link>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price} USD (Categoría: {product.category_name})
            <Link to={`/products/edit/${product.id}`} style={{ marginLeft: '10px' }}>✏️ Editar</Link>
            <button onClick={() => deleteProduct(product.id)} style={{ marginLeft: '10px', color: 'red' }}>🗑️ Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
