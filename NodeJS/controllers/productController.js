const db = require('../config/db');

// Obtener todos los productos
const getAllProducts = async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT products.*, categories.name AS category_name FROM products INNER JOIN categories ON products.category_id = categories.id'
        );
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un producto por su ID
const getProductById = async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT products.*, categories.name AS category_name FROM products INNER JOIN categories ON products.category_id = categories.id WHERE products.id = ?',
            [req.params.id]
        );
        if (rows.length === 0) return res.status(404).json({ message: 'Producto no encontrado' });
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
    const { name, description, price, category_id } = req.body;
    if (!name || !description || !price || !category_id) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    try {
        const [result] = await db.query(
            'INSERT INTO products (name, description, price, category_id) VALUES (?, ?, ?, ?)',
            [name, description, price, category_id]
        );
        res.status(201).json({ message: 'Producto creado', productId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un producto
const updateProduct = async (req, res) => {
    const { name, description, price, category_id } = req.body;
    try {
        const [result] = await db.query(
            'UPDATE products SET name = ?, description = ?, price = ?, category_id = ? WHERE id = ?',
            [name, description, price, category_id, req.params.id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Producto no encontrado' });
        res.status(200).json({ message: 'Producto actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
    try {
        const [result] = await db.query('DELETE FROM products WHERE id = ?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Producto no encontrado' });
        res.status(200).json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
