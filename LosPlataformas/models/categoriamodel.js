const db = require('../config/bd');

const crearCategoria = (categoria, callback) => {
    const sql = 'INSERT INTO categoria (nombre_categoria) VALUES (?)';
    db.query(sql, [categoria.nombre_categoria], callback);
};

const editarCategoria = (id, datos, callback) => {
    const sql = 'UPDATE categoria SET nombre_categoria = ? WHERE id_categoria = ?';
    db.query(sql, [datos.nombre_categoria, id], callback);
};

const eliminarCategoria = (id, callback) => {
    const sql = 'DELETE FROM categoria WHERE id_categoria = ?';
    db.query(sql, [id], callback);
};

const obtenerCategorias = (callback) => {
    const sql = 'SELECT * FROM categoria';
    db.query(sql, callback);
};

module.exports = {
    crearCategoria,
    editarCategoria,
    eliminarCategoria,
    obtenerCategorias
};
