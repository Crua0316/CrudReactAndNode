import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenido a la Gestión de Productos y Categorías</h1>
      <p>Selecciona una opción:</p>

      <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Link to="/products" style={styles.button}>Ver Productos</Link>
        <Link to="/products/new" style={styles.button}>Agregar Producto</Link>
        <Link to="/categories" style={styles.button}>Ver Categorías</Link>
        <Link to="/categories/new" style={styles.button}>Agregar Categoría</Link>
      </nav>
    </div>
  );
};

const styles = {
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007bff',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background 0.3s',
  }
};

export default Home;
