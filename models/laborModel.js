const connection = require('../config/db');

exports.createLabor = async (req, res) => {
    const { TL_ID, LAB_NOMBRE, LAB_HORAS } = req.body;
    const sql = 'INSERT INTO labor (TL_ID, LAB_NOMBRE, LAB_HORAS) VALUES (?, ?, ?)';
    const values = [TL_ID, LAB_NOMBRE, LAB_HORAS];
    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).send('Error interno del servidor');
        } else {
            res.status(201).json({ message: 'Labor creado exitosamente' });
        }
    });
}
exports.updateLabor = async (req, res) => {
    const id = req.params.id;
    const { TL_ID, LAB_NOMBRE, LAB_HORAS } = req.body;
    const sql = 'UPDATE labor SET TL_ID = ?, LAB_NOMBRE = ?, LAB_HORAS = ? WHERE LAB_ID = ?';
    const values = [TL_ID, LAB_NOMBRE, LAB_HORAS, id];
    connection.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).send('Error interno del servidor');
        } else {
            res.json({ message: 'Labor actualizado exitosamente' });
        }
    });
}
exports.deleteLabor = async (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM labor WHERE LAB_ID = ?';
    connection.query(sql, [id], (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).send('Error interno del servidor');
        } else {
            res.json({ message: 'Labor eliminado exitosamente' });
        }
    });
}
exports.getLabor = async (req, res) => {
    const sql = 'SELECT * FROM labor';
    connection.query(sql, (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).send('Error interno del servidor');
        } else {
            res.json(results);
        }
    });
}
exports.getLaborById = async (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM labor WHERE LAB_ID = ?';
    connection.query(sql, [id], (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).send('Error interno del servidor');
        } else {
            if (results.length > 0) {
                res.json(results[0]);
            } else {
                res.status(404).json({ message: 'Labor no encontrado' });
            }
        }
    });
}
exports.getLaborByTipoLabor = async (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM labor WHERE TL_ID = ?';
    connection.query(sql, [id], (error, results) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).send('Error interno del servidor');
        } else {
            res.json(results);
        }
    });
}
