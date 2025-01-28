const db = require('../config/db');

// Obtener todas las categorías
const getAllCategories = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM categories');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener una categoría por su ID
const getCategoryById = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM categories WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva categoría
const createCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'El campo nombre es obligatorio' });
    try {
        const [result] = await db.query('INSERT INTO categories (name) VALUES (?)', [name]);
        res.status(201).json({ message: 'Categoría creada', categoryId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar una categoría
const updateCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const [result] = await db.query('UPDATE categories SET name = ? WHERE id = ?', [name, req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(200).json({ message: 'Categoría actualizada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar una categoría
const deleteCategory = async (req, res) => {
    try {
        const [result] = await db.query('DELETE FROM categories WHERE id = ?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(200).json({ message: 'Categoría eliminada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
};
