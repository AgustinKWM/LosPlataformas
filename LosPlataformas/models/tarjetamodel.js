const db = require('../config/bd');

const crearTarjeta = (tarjeta, callback) => {
    const sql = `INSERT INTO tarjeta_credito 
        (numero_tarjeta, nombre_titular, fecha_expiracion, cvv, idUsuario) 
        VALUES (?, ?, ?, ?, ?)`;
    const values = [
        tarjeta.numero_tarjeta,
        tarjeta.nombre_titular,
        tarjeta.fecha_expiracion,
        tarjeta.cvv,
        tarjeta.idUsuario
    ];
    db.query(sql, values, callback);
};

const editarTarjeta = (id, datos, callback) => {
    const sql = `UPDATE tarjeta_credito SET 
        numero_tarjeta = ?, 
        nombre_titular = ?, 
        fecha_expiracion = ?, 
        cvv = ?, 
        idUsuario = ?
        WHERE id_tarjeta = ?`;
    const values = [
        datos.numero_tarjeta,
        datos.nombre_titular,
        datos.fecha_expiracion,
        datos.cvv,
        datos.idUsuario,
        id
    ];
    db.query(sql, values, callback);
};

const eliminarTarjeta = (id, callback) => {
    const sql = 'DELETE FROM tarjeta_credito WHERE id_tarjeta = ?';
    db.query(sql, [id], callback);
};

const obtenerTarjetas = (callback) => {
    const sql = 'SELECT * FROM tarjeta_credito';
    db.query(sql, callback);
};

module.exports = {
    crearTarjeta,
    editarTarjeta,
    eliminarTarjeta,
    obtenerTarjetas
};
