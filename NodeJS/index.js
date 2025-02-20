const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

dotenv.config();
const app = express();

app.use(cors()); // Permite peticiones desde cualquier origen
app.use(express.json());

// Rutas
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
